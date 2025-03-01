import { useState } from "react";

const AIPage = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const sessionId = "session_" + Math.random().toString(36).substring(2, 15);

  const sendMessage = async () => {
    if (!input.trim()) return;
    
    const newMessages = [...messages, { text: input, user: true }];
    setMessages(newMessages);
    setInput("");

    try {
      const response = await fetch("http://localhost:3000/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input, sessionId }),
      });
      const data = await response.json();
      setMessages([...newMessages, { text: data.response, user: false }]);
    } catch (error) {
      console.error("Error:", error);
      setMessages([...newMessages, { text: "Error connecting to server.", user: false }]);
    }
  };

  return (
    <div className="chat-container">
      <h2>AI Chatbot</h2>
      <div className="chat-box">
        {messages.map((msg, index) => (
          <p key={index} className={msg.user ? "user-msg" : "bot-msg"}>{msg.text}</p>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask me anything..."
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default AIPage;
