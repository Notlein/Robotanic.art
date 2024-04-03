import React, { useState, useEffect, useRef } from 'react';
import styles from './Discuss.module.css';

export default function Discuss({ onClose, isVisible  }) {
    const [isFocused, setIsFocused] = useState(false);
    const [message, setMessage] = useState(''); // To keep track of the input field
    const [conversation, setConversation] = useState([]); // Array to hold the conversation
    const rollingTextRef = useRef(null); // Ref for the rolling text container
    const discussClass = isVisible ? '' : styles.hidden;

    // Style object for focused input
    const focusedStyle = {
        border: '2px solid green' // Change this as needed
    };

    // Default style for input
    const defaultStyle = {
        border: '0.2px solid grey' // Change this as needed
    };

    useEffect(() => {
        // Scroll to the bottom of the rolling text container whenever the conversation updates
        if (rollingTextRef.current) {
            rollingTextRef.current.scrollTop = rollingTextRef.current.scrollHeight;
        }
    }, [conversation]); // Dependency array to run effect when conversation updates

    const handleSubmit = async (e) => {
        e.preventDefault();
        const userMessage = message.trim();
        if (!userMessage) return;
    
        try {
            const response = await fetch('/.netlify/functions/chatgpt', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: userMessage }),
            });
    
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            
            const data = await response.json();
            setConversation(prev => [...prev, { sender: 'User', text: userMessage }, { sender: 'ChatGPT', text: data.response }]);
            setMessage('');
        } catch (error) {
            console.error("Failed to fetch the ChatGPT response:", error);
            // Handle the error appropriately in your UI
        }
    };





    return (
        <>
            <div className={`${styles.discuss} ${discussClass}`}>

            <div className={styles.box}>
                <div className={styles.instructions}>Hello. Say something nice.<span className={styles.x} onClick={onClose}>x</span></div>
                <div className={styles.rollingText} ref={rollingTextRef}>
                    {conversation.map((msg, index) => (
                        <div key={index}>{msg.sender}: {msg.text}</div>
                    ))}
                </div>
                <form onSubmit={handleSubmit} className={styles.answerBox}>
                    <input
                        className={styles.input}
                        placeholder='Type here'
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        style={isFocused ? focusedStyle : defaultStyle}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                    />
                </form>
            </div>
            </div>

        </>
    );
}
