"use client"

import { useState, useRef, useEffect } from "react"
import "./HealthcareAI.css"

function HealthcareAI() {
  const [message, setMessage] = useState("")
  const [chat, setChat] = useState([])
  const [loading, setLoading] = useState(false)
  const [suggestions, setSuggestions] = useState([
    "How can I improve my sleep quality?",
    "What are some quick stress relief techniques?",
    "Can you suggest a balanced meal plan?",
    "How much exercise do I need weekly?",
  ])
  const chatContainerRef = useRef(null)
  const sessionId = localStorage.getItem("userId") || `user-${Date.now()}`

  // Save session ID if not already saved
  useEffect(() => {
    if (!localStorage.getItem("userId")) {
      localStorage.setItem("userId", sessionId)
    }

    // Add welcome message
    if (chat.length === 0) {
      setChat([
        {
          role: "ai",
          text: "Hello! I'm your Wellness360 assistant. How can I help with your health and wellness journey today?",
        },
      ])
    }
  }, [chat.length, sessionId]) // Added chat.length and sessionId as dependencies

  // Auto-scroll to bottom of chat
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
    }
  }, [chatContainerRef]) // Removed unnecessary dependency: chat

  const sendMessage = async () => {
    if (!message.trim()) return
    setLoading(true)

    const userMessage = message
    const newChat = [...chat, { role: "user", text: userMessage }]
    setChat(newChat)
    setMessage("")

    try {
      const response = await fetch("/api/healthcare-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: userMessage,
          sessionId,
          chatHistory: newChat.slice(-6), // Send recent chat history for context
        }),
      })

      const data = await response.json()
      setChat([...newChat, { role: "ai", text: data.response }])
    } catch (error) {
      console.error("Error sending message:", error)
      setChat([
        ...newChat,
        {
          role: "ai",
          text: "I'm sorry, I'm having trouble connecting right now. Please try again in a moment.",
        },
      ])
    }

    setLoading(false)
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  const useSuggestion = (suggestion) => {
    setMessage(suggestion)
  }

  return (
    <div className="healthcare-ai-container">
      <div className="healthcare-ai-header">
        <h2>Wellness360 Health Assistant</h2>
        <p>Your personal guide to holistic wellness</p>
      </div>

      <div className="chat-container" ref={chatContainerRef}>
        {chat.map((msg, index) => (
          <div key={index} className={`message-bubble ${msg.role === "user" ? "user-message" : "ai-message"}`}>
            <div className="message-content">{msg.text}</div>
          </div>
        ))}
        {loading && (
          <div className="message-bubble ai-message">
            <div className="typing-indicator">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        )}
      </div>

      {suggestions.length > 0 && chat.length < 3 && (
        <div className="suggestion-chips">
          {suggestions.map((suggestion, index) => (
            <button key={index} className="suggestion-chip" onClick={() => useSuggestion(suggestion)}>
              {suggestion}
            </button>
          ))}
        </div>
      )}

      <div className="input-container">
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Ask about health, nutrition, fitness, or wellness..."
          rows={1}
          className="message-input"
        />
        <button onClick={sendMessage} disabled={loading || !message.trim()} className="send-button">
          {loading ? (
            <span className="loading-spinner"></span>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          )}
        </button>
      </div>
    </div>
  )
}

export default HealthcareAI

