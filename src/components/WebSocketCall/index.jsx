import {React, useState, useEffect } from 'react'
import ScrollToBottom from "react-scroll-to-bottom"
import "./WebSocketCall.css"

const WebSocketCall = ({ socket, username, room }) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const handleText = (e) => {
    const inputMessage = e.target.value;
    setMessage(inputMessage);
  };

  const handleSubmit = async () => {
    if (message) {
      const messageData = {
        roomID: room,
        author: username,
        message: message,
        time: new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes()
      }
      await socket.emit("data", messageData);
      setMessage("");
    }
  };

  const handleKeyPress = (e) => {
    if(e.key === 'Enter'){
      handleSubmit()
    }
  }

  useEffect(() => {
    socket.on("data", (data) => {
      setMessages([...messages, data.data]);
    });
  }, [socket, messages]);

  return (
  <div className="chat-window">
    <div className="chat-header">
        <p>Live Chat</p>
    </div>
    <div className="chat-body">
      <ScrollToBottom className="message-container">
        {messages.map((message) => {return (
          <div className='message' id={username === message.author ? "you" : "other"}>
            <div>
              <div className='message-content'>
                <p>{message.message}</p>
              </div>
                <div className='message-meta'>
                <p>{message.time}</p>
                <p id='author'>{message.author}</p>
                </div>
            </div>
          </div>
        )
        })}
        </ScrollToBottom>
      <div className='chat-footer'>
        <input type="text" placeholder='Enter...' value={message} onChange={handleText} onKeyDown={handleKeyPress} />
        <button onClick={handleSubmit}>submit</button>
      </div>
    </div>
  </div>
  );
}

export default WebSocketCall
