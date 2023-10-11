import React, { useEffect, useState, useRef } from 'react';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, push, onValue } from 'firebase/database';
import { useFirebase } from '../context/Firebase';
import CubeCom from "./CubeCom"
import Logo from "../comp/logo.png";

import "./comminity.css"

function Comminity() {
    const firebase = useFirebase();
    const firebaseApp = firebase.firebaseApp;
    const database = getDatabase(firebaseApp);
    const messagesRef = ref(database, 'messages');

    const [showCube, setShowCube] = useState(true);
    const [messages, setMessages] = useState([]);
    const [inputMessage, setInputMessage] = useState('');
    const chatMessagesRef = useRef(null);

    // Function to send a new message
    const sendMessage = () => {
        if (inputMessage.trim() !== '') {
            push(messagesRef, { message: inputMessage });
            setInputMessage('');
        }
    };
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowCube(false); // Hide the Cube component
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    // Function to handle input message changes
    const handleInputChange = (e) => {
        setInputMessage(e.target.value);
    };

    // Scroll to the bottom of chat-messages div


    useEffect(() => {
        // Set up the Firebase event listener
        const unsubscribe = onValue(messagesRef, (snapshot) => {
            try {
                const messageData = snapshot.val();
                if (messageData) {
                    const messageList = Object.values(messageData);
                    setMessages(messageList);

                    // Scroll to the bottom of chat-messages div

                }
            } catch (error) {
                console.error("Error while retrieving data from Firebase:", error);
            }
        });

        // Unsubscribe the listener when the component unmounts
        return () => unsubscribe();
    }, []);




    return (
        <div>
            {
                showCube ? (<CubeCom />) : (<div className="chat-container">
                    <div className="chat-header">
                        <h1>Community</h1>

                        <div className='nav-logo-con nav-logo'>

                            <img src={Logo} className='nav-logo foot-logo' alt="Logo" />
                            <h3>Notion</h3>
                        </div>
                    </div>
                    <div className="chat-messages" ref={chatMessagesRef}>
                        {messages.map((message, index) => (
                            <div className="message01" key={index}>
                                {message.message}
                            </div>
                        ))}
                    </div>
                    <div className="chat-input">
                        <input
                            type="text"
                            placeholder="Type your message"
                            value={inputMessage}
                            onChange={handleInputChange}
                        />
                        <button onClick={sendMessage}>
                            <i className="fas fa-paper-plane">send</i>
                        </button>
                    </div>
                </div>)
            }

        </div>
    );
}

export default Comminity;
