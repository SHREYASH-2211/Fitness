import { useState } from 'react';

function Chatbot() {
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);
  const [loading, setLoading] = useState(false);
  const sessionId = 'user123'; // Unique session ID (could be dynamic)

  const sendMessage = async () => {
    if (!message.trim()) return;
    setLoading(true);

    const newChat = [...chat, { role: 'user', text: message }];
    setChat(newChat);
    setMessage('');

    try {
      const response = await fetch('http://localhost:3000/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message, sessionId })
      });

      const data = await response.json();
      setChat([...newChat, { role: 'ai', text: data.response }]);
    } catch (error) {
      console.error('Error sending message:', error);
    }

    setLoading(false);
  };

  return (
    <div style={{ maxWidth: '500px', margin: 'auto', padding: '20px', border: '1px solid #ddd', borderRadius: '10px' }}>
      <h2>Wellness360 Chatbot</h2>
      <div style={{ height: '300px', overflowY: 'auto', borderBottom: '1px solid #ddd', marginBottom: '10px', padding: '10px' }}>
        {chat.map((msg, index) => (
          <div key={index} style={{ textAlign: msg.role === 'user' ? 'right' : 'left', margin: '5px 0' }}>
            <strong>{msg.role === 'user' ? 'You' : 'AI'}:</strong> {msg.text}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message..."
        style={{ width: '80%', padding: '10px', marginRight: '5px' }}
      />
      <button onClick={sendMessage} disabled={loading} style={{ padding: '10px' }}>
        {loading ? 'Sending...' : 'Send'}
      </button>
    </div>
  );
}

export default Chatbot;