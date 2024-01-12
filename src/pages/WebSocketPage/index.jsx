import React, {useState, useEffect } from 'react'
import { io } from "socket.io-client";
import { WebSocketCall } from '../../components'

let socket; 

const WebSocketPage = () => {

  const [socketInstance, setSocketInstance] = useState('')
  const [loading, setLoading] = useState(true)
  const [buttonStatus, setButtonStatus] = useState(false)

  const handleClick = () => {
    if(buttonStatus === false){
        setButtonStatus(true)
    } else {
        setButtonStatus(false)
    }
  }

  useEffect(() => {
    if (buttonStatus === true) {
      const socket = io("http://localhost:5000"
      , {
        transports: ["polling","websocket"]
        ,
        cors: {
          origin: "http://localhost:5173",
        },
        reconnection: false,
        path: "/socket.io",
        upgrade: true
      }
      );

      socket.connect()

      console.log(socket.connected)
  
      setSocketInstance(socket);
  
      socket.on("connect", () => {
        console.log(socket.id)
        setLoading(false);
        console.log("connected", socket.connected);
      });

      setLoading(false)

      console.log(socket)

  
      socket.on("disconnect", (data) => {
        console.log((data));
      });
      
      return function cleanup() {
        if (socket){
        socket.disconnect();
        setLoading(true);
      };
    }
    }
  }, [buttonStatus]);
  // useEffect(() => {
  //   if (buttonStatus === true) {
  //     const socket = io("localhost:5001/", {
  //       transports: ["websocket"],
  //       cors: {
  //         origin: "http://localhost:3000/",
  //       },
  //     });

  //     setSocketInstance(socket);

  //     socket.on("connect", (data) => {
  //       console.log(data);
  //     });

  //     setLoading(false);

  //     socket.on("disconnect", (data) => {
  //       console.log(data);
  //     });

  //     return function cleanup() {
  //       socket.disconnect();
  //     };
  //   }
  // }, [buttonStatus]);

  console.log(socketInstance)

  return (
<div>
    <div>
    {!buttonStatus ? (
        <button onClick={handleClick}>Turn on chat</button>
        ) : <><button onClick={handleClick}>Turn off chat</button></>}
    </div>
    <div className='line'>
        {!loading && <WebSocketCall socket={socketInstance}/>}
    </div>
</div>
  )
}

export default WebSocketPage
