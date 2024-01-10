import React, {useState, useEffect } from 'react'
import { io } from "socket.io-client";
import { WebSocketCall } from '../../components'

const WebSocketPage = () => {

  const [socketInstance, setSocketInstance] = useState(null)
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
      const socket = io("http://localhost:5000/", {
        transports: ["websocket"],
        cors: {
          origin: "http://localhost:5173",
        },
      });

      console.log(socket)
  
      setSocketInstance(socket);
  
      socket.on("connect", () => {
        // setLoading(false); // Set loading to false only when connected
        console.log("connected");
      });

      setLoading(false)
  
      socket.on("disconnect", (data) => {
        console.log("disconnected", JSON.stringify(data));
      });
  
      return function cleanup() {
        socket.disconnect();
        setLoading(true);
        setSocketInstance(null);
      };
    }
  }, [buttonStatus]);
  // useEffect(() => {

  //   if (buttonStatus === true) {
  //     const socket = io("localhost:5000/", {
  //       transports: ["websocket"],
  //       cors: {
  //         origin: "http://localhost:5173/",
  //       }
  //     });

  //     setSocketInstance(socket);

  //     socket.on("connect", (data) => {
  //       console.log("connected", data);
  //     });

  //     setLoading(false);

  //     socket.on("disconnect", (data) => {
  //       console.log("disconnected", JSON.stringify(data));
  //     });

  //     return function cleanup() {
        
  //      socket.disconnect()
  //      setLoading(true);
  //      setSocketInstance(null);

  //     };
  //   }
  //   // } else {
  //   //   socketInstance.disconnect();
  //   //   setSocketInstance(null);
  //   //   setLoading(true)

  //   // }
  // }, [buttonStatus]);

  console.log(loading)

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
