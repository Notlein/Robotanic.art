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
        e.preventDefault(); // Prevent the form from submitting in the traditional way
        const userMessage = message.trim();
        if (!userMessage) return; // Ignore empty or whitespace-only messages
    
        // Call fetchChatGPTResponse and wait for the response
        const chatGPTResponse = await fetchChatGPTResponse(userMessage);
    
        // Update the conversation state with the new messages
        setConversation(prev => [
          ...prev,
          { sender: 'User', text: userMessage },
          { sender: 'ChatGPT', text: chatGPTResponse }
        ]);
        setMessage(''); // Clear the input field for the next message
    };


// Example fetch request in your React app
const fetchChatGPTResponse = async (message) => {
    try {
      const response = await fetch('/.netlify/functions/chatgpt', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log(data.response); // Use the response in your app
    } catch (error) {
      console.error("Request failed", error);
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
                placeholder="Type here"
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
