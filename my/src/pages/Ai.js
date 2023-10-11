import React, { useState, useEffect } from 'react';

function ChatBot() {
  const [userInput, setUserInput] = useState('');
  const [chatMessages, setChatMessages] = useState([]);
  const [isListening, setIsListening] = useState(false);
  const [isReading, setIsReading] = useState(true);
  const [speakingQueue, setSpeakingQueue] = useState([]);
  const [synth, setSynth] = useState(null);
  const [recognition, setRecognition] = useState(null);

  useEffect(() => {
    // Check if the SpeechSynthesis API is available in the browser
    if ('speechSynthesis' in window) {
      const synth = window.speechSynthesis;
      setSynth(synth);

      // Initialize the SpeechRecognition API for voice input
      const recognition = new (window.SpeechRecognition ||
        window.webkitSpeechRecognition)();
      recognition.lang = 'en-US';
      setRecognition(recognition);

      recognition.onresult = function (event) {
        const transcript = event.results[0][0].transcript.toLowerCase();
        setUserInput(transcript);
      };

      recognition.onstart = function () {
        // Change the button color to green when voice input is activated
        setIsListening(true);
      };

      recognition.onend = function () {
        // Change the button color back to blue when voice input ends
        setIsListening(false);
        if (isListening) {
          sendMessage(); // Send the user's message when voice input ends
        }
      };
    }
  }, [isListening, isReading]);

  function startVoiceInput() {
    if (recognition) {
      recognition.start();
      setIsListening(true);
    }
  }

  function speakText(text) {
    if (synth && synth.speaking) {
      // If already speaking, add the text to the queue
      setSpeakingQueue([...speakingQueue, text]);
    } else {
      const utterance = new SpeechSynthesisUtterance(text);
      synth.speak(utterance);

      utterance.onend = function () {
        // Continue reading from the queue if it's not empty
        if (speakingQueue.length > 0) {
          speakText(speakingQueue[0]);
          setSpeakingQueue(speakingQueue.slice(1));
        }
      };
    }
  }

  function sendMessage() {
    // Simulate receiving a bot response
    const botMessage = "This is a bot response.";
    
    // After receiving the bot's response, you can call speakText
    // to read the response if reading is active.
    if (isReading) {
      speakText(botMessage);
    }
  }
  function toggleReading() {
    setIsReading(!isReading);
    const synth = window.speechSynthesis;
    synth.cancel(); // Stop the current speech if reading is toggled off.
  }
  
  return (
    <div className="chat-container">
      <div className="chat-box" id="chat-box">
        {/* Render chat messages here */}
        {chatMessages.map((message, index) => (
          <div key={index} className={message.sender}>
            {message.messageType === 'code-message' ? (
              <pre className="code-block">{message.message}</pre>
            ) : (
              message.message
            )}
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          id="user-input"
          placeholder="Type your message..."
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <button onClick={sendMessage}>
          <i className="fa fa-paper-plane" aria-hidden="true"></i>
        </button>
        <button
          id="voice-input-button"
          onClick={startVoiceInput}
          className={isListening ? 'active' : ''}
        >
          <i className="fa-solid fa-microphone"></i>
        </button>
        <button
          id="stop-button"
          onClick={toggleReading} // Make sure to define toggleReading
          className={isReading ? 'active' : ''}
        >
          <i className="fa-solid fa-stop"></i>
        </button>
      </div>
    </div>
  );
}

export default ChatBot;
