import React, { useState, useEffect, useDispatch, useRef} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import "./Chat.css"
import { baseApi } from '../../utils/baseApi';
import { Conversation, ChatBox } from '../../components';
import { io } from 'socket.io-client';


const Chat = () => {

    let loginId = ''

    let touristloginId = ''
    let touristloginUsername = ''

    let guideLoginId = ''
    let guideLoginUsername = ''

    // const dispatch = useDispatch();
    if (sessionStorage.getItem('touristUsername') && sessionStorage.getItem('touristUsername').length > 0) {
        touristloginUsername = sessionStorage.getItem('touristUsername');
        touristloginId = sessionStorage.getItem('touristId');
      } else if (sessionStorage.getItem('guide_Username') && sessionStorage.getItem('guide_Username').length > 0) {
        guideLoginUsername = sessionStorage.getItem('guide_Username');
        guideLoginId = sessionStorage.getItem('guide_id');
      }
    
      //Need to chnage this hard code to the tourist log in
    // const tourist =  {
    //     "tourist_id": 1,
    //     "name": "Jane Doe",
    //     "user_type": "TOURIST",
    //     "username": "janedoe123",
    //     "email": "jane.doe@gmail.com",
    //     "password": "scrypt:32768:8:1$UWEFtCED5zmDb6rF$2f559163c081ead935ce3b2da596332721657d67eb6ea42ff82ff829c63c696422d22dd012ec5c0c1e17c9a9b2a682624459a372abb3a1f106180b52f08efccc",
    //     "guide_username": [
    //       "guydunn42",
    //       "hiroshi88"
    //     ]
    //   }

    // let { id } = useParams()
  
    const [chats, setChats] = useState([]);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const [currentChat, setCurrentChat] = useState([]);
    const [sendMessage, setSendMessage] = useState(null);
    const [receivedMessage, setReceivedMessage] = useState(null);

    const socket = io(baseApi ,{
        transports: ["websocket", "polling"]
        ,
        cors: {
          origin: "http://localhost:5173/",
        }, reconnection: false

      });

      useEffect(() => {
        if(guideLoginId){
        socket.emit("new-user-add", guideLoginId);
        }
        else if(touristloginId){
          socket.emit("new-user-add", touristloginId)
        }
        socket.on("get-users", (users) => {
          setOnlineUsers(users);
        });
      }, []);

      useEffect(() => {
        socket.on("recieve-message", (data) => {
          setReceivedMessage(data);
        }
        );
      }, []);
        // Send Message to socket server
useEffect(() => {
    if (sendMessage!==null) {
      socket.emit("send-message", sendMessage);}
  }, [sendMessage]);


  // Get the message from socket server

    useEffect(() => {
        const getChats = async () => {
            if(guideLoginId){
          try {
            const res = await axios.get(baseApi+`chat/guide/${guideLoginId}`);
            setChats(res.data);
          } catch (error) {
            console.log(error);
          }
        } else if (touristloginId){
            try {
                const res = await axios.get(baseApi+`chat/tourist/${touristloginId}`);
                setChats(res.data);
                // setCurrentChat(chats)
              } catch (error) {
                console.log(error);
              }
        }

      
        }
        getChats();
      }, []);

      const checkOnlineStatus = () => {
        let chatMember;
        let online;
      
        if (guideLoginId) {
          chatMember = chats.filter((member) => member !== guideLoginId);
          online = Object.values(onlineUsers).some((user) => user.userId == chatMember);
          return online;
        }
      
        if (touristloginId) {
          chatMember = chats.filter((member) => member !== touristloginId);
          online = Object.values(onlineUsers).some((user) => user.userId == chatMember);
          return online;
        }
      
        return false;
      }

      console.log(onlineUsers)
      console.log(chats)

  return (
    <div className="Chat">
    {/* Left Side */}
    <div className="Left-side-chat">
      <div className="Chat-container">
        <h2>Chats</h2>
        <div className="Chat-list">
        {chats.map(chat => (
            <div
            key={chat.chat_id}
            
            onClick={() => {
              setCurrentChat(chat);
            }}
          >
            <Conversation
              data={chat}
              touristUser ={touristloginId}
              guideUser = {guideLoginId}
              online={checkOnlineStatus}

            />
          </div>
        )   
        )}
            {/* <div
              onClick={() => {
                setCurrentChat(chats);
              }}
            >
              <Conversation
                data={chats}
                currentUser={loginId}
                // online={checkOnlineStatus(chat)}
              />
            </div> */}
         
        </div>
      </div>
    </div>

  {/* Right Side */}

  <div className="Right-side-chat">
        <div style={{ width: "20rem", alignSelf: "flex-end" }}>
          {/* <NavIcons /> */}
        </div>
        <ChatBox
          chat={currentChat}
          touristUser={touristloginId}
          guideUser = {guideLoginId}
          socket = {socket}
          setSendMessage={setSendMessage}
          receivedMessage={receivedMessage}
        />
      </div>
    </div>
  );
}

export default Chat
