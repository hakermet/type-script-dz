import React, { useState, useEffect, FormEvent } from 'react';
import { io, Socket } from 'socket.io-client';

export const App: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState('');
  const [socket, setSocket] = useState<Socket | null>(null);

  const getTime = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    return `${hours}:${minutes}`;
  }
  useEffect(() => {
    const newSocket = io();
    setSocket(newSocket);

    newSocket.on('chat message', (msg: string) => {
      setMessages((prev) => [...prev, msg]);
    });
    newSocket.emit("user connected", localStorage.getItem("username"));

    return () => {
      newSocket.close();
    };
  }, []);

  const handleSubmit = (e: FormEvent) => {
    const username = localStorage.getItem("username");
    e.preventDefault();
    if (input && socket) {
      socket.emit('chat message', `${username}: ${input} ${getTime()}`);
      setInput('');
    }
  };

  return (
    <div style={{
      backgroundColor: '#121212',
      color: '#ffffff',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Arial, sans-serif'
    }}>
      <ul style={{
        listStyle: 'none',
        padding: '10px',
        width: '300px',
        height: '400px',
        overflowY: 'auto',
        backgroundColor: '#1e1e1e',
        borderRadius: '10px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
      }}>
        {messages.map((msg, index) => (
          <li key={index} style={{
            padding: '8px',
            borderBottom: '1px solid #333',
            wordWrap: 'break-word'
          }}>
            {msg}
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit} style={{
        marginTop: '10px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#1e1e1e',
        padding: '10px',
        borderRadius: '10px',
      }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          style={{
            flex: 1,
            padding: '10px',
            borderRadius: '5px',
            border: '1px solid #444',
            backgroundColor: '#333',
            color: '#fff',
            marginRight: '10px',
          }}
        />
        <button type="submit" style={{
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          padding: '10px 15px',
          borderRadius: '5px',
          cursor: 'pointer',
        }}>Send</button>
      </form>
    </div>
  );
};
