import React, {useState, useEffect } from 'react'
import { Manager, io } from "socket.io-client";
import { WebSocketCall } from '../../components'
import "../../components/WebSocketCall/WebSocketCall.css"


let socket; 

const WebSocketPage = () => {

  const [socketInstance, setSocketInstance] = useState('')
  const [loading, setLoading] = useState(true)
  // const [buttonStatus, setButtonStatus] = useState(false)

  const [username, setUsername] = useState('')
  const [room, setRoom] = useState('')
  const [chat, setChat] = useState(false)

  useEffect(() => {
    if (chat === true) {
      const socket = io("http://localhost:5000"
  , {
    transports: ["websocket", "polling"]
    ,
    cors: {
      origin: "http://localhost:5173/",
    },
    reconnection: false
  }
  );
            
      setSocketInstance(socket);
  
      socket.on("connect", () => {
        console.log(socket.id)
        setLoading(false);
        console.log("connected", socket.connected);
      });

      setLoading(false)

      if (username !== "" && room !== ""){
        socket.emit("join_room", { username: username, room: room})
      }

      console.log(socket)

  
      socket.on("disconnect", (data) => {
        console.log((data));
      });
      
      return function cleanup() {
        if (socket){
        socket.disconnect();
        setLoading(true);
        setRoom('')
        setUsername('')
      };
    }
    }
  }, [chat]);

  const handleClick = () => {
    if(chat === false){
        setChat(true)
    } else {
        setChat(false)
    }
  }

  return (
<div>
    <div className="joinChatContainer">
      <h3>Join a chat!</h3>
      <input type='text' placeholder='Type...' onChange={(e) => {
        setUsername(e.target.value)
      }}/>
      <input type='text' placeholder='Room ID...' onChange={(e) => {
        setRoom(e.target.value)
      }}/>
      {!chat ? (
         <button onClick={handleClick}>Enter chat room</button>) : <><button onClick={handleClick}>Leave chat room</button></>
      }
    {/* {!buttonStatus ? (
        <button onClick={handleClick}>Turn on chat</button>
        ) : <><button onClick={handleClick}>Turn off chat</button></>} */}
    </div>
    <div className='line'>
        {!loading && <WebSocketCall socket={socketInstance} username={username} room={room}/>}
    </div>
</div>
  )
}

export default WebSocketPage
