import React, { useEffect, useState, useRef } from 'react';
import './Ai1.css';
import Sidebar from '../sidebar/sidebar';

const Ai1 = () => {
    const [messages, setMessages] = useState([]);
    const [userInput, setUserInput] = useState('');
    const chatMessagesRef = useRef(null);
    const sessionId = useRef('session_' + Math.random().toString(36).substring(2, 15));

    const addMessage = (text, isUser) => {
        setMessages(prev => [...prev, { text, isUser }]);
    };

    const sendMessageToAPI = async (message) => {
        addMessage(message, true);
        setUserInput('');

        try {
            const response = await fetch('http://localhost:3000/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message, sessionId: sessionId.current }),
            });

            if (!response.ok) throw new Error('Network response was not ok');

            const data = await response.json();
            addMessage(data.response, false);
        } catch (error) {
            console.error('Error:', error);
            addMessage("Sorry, I'm having trouble connecting to the server. Please try again later.", false);
        }
    };

    useEffect(() => {
        if (chatMessagesRef.current) {
            chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight;
        }
    }, [messages]);

    useEffect(() => {
        sendMessageToAPI("Hello");
    }, []);

    return (
        <>
            <Sidebar />
            <div className="container1">
                <header className="header1">
                    <div className="logo1">
                        <div className="logo-icon1">FT</div>
                        <div className="logo-text1">
                            <h1>Wellness360</h1>
                            <p>Your All-in-One Health & Fitness Companion</p>
                        </div>
                    </div>
                    <div className="contact-info1">
                        <i className="fas fa-phone-alt"></i>
                        <span>Need help? Call 1234567891</span>
                    </div>
                </header>

                <main className="main1">
                    <div className="features1">
                        <h2 className="feature-heading1">Meet Your AI Health Assistant</h2>
                        <p>Your personal AI-powered health companion ready to assist with all your fitness and wellness needs.</p>

                        <div className="feature-list1">
                            {["Health Tracking", "Calorie Counter", "Fitness Centers", "Yoga Pose Detection", "Workout Videos", "Community"].map((feature, index) => (
                                <div className="feature-card1" key={index}>
                                    <h3>{feature}</h3>
                                    <p>Feature description for {feature}</p>
                                </div>
                            ))}
                        </div>

                        <div className="disclaimer1">
                            <strong>Important:</strong> Wellness360 is designed to provide general health and fitness information. It is not a substitute for professional medical advice, diagnosis, or treatment.
                        </div>
                    </div>

                    <div className="chatbot-container1">
                        <div className="chatbot-header1">
                            <div className="chatbot-status1"></div>
                            <h2>Wellness360 AI Assistant</h2>
                        </div>
                        <div className="chat-messages1" ref={chatMessagesRef}>
                            {messages.map((msg, index) => (
                                <div key={index} className={`message1 ${msg.isUser ? 'user-message1' : 'bot-message1'}`}>
                                    {msg.text}
                                </div>
                            ))}
                        </div>
                        <div className="chat-input1">
                            <input 
                                type="text" 
                                value={userInput} 
                                onChange={(e) => setUserInput(e.target.value)} 
                                onKeyPress={(e) => e.key === 'Enter' && sendMessageToAPI(userInput)}
                                placeholder="Ask me about fitness, nutrition, workouts..." 
                            />
                            <button className="send-button1" onClick={() => sendMessageToAPI(userInput)}>Send</button>
                        </div>
                    </div>
                    <footer className="footer">
                    <p>&copy; 2024 Wellness360 . All rights reserved.</p>
                    </footer>
                </main>
            </div>
        </>
    );
};

export default Ai1;
