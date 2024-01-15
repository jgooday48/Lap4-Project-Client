import React, { useState, useEffect, useDispatch, useRef} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import "./Chat.css"
import { Conversation, ChatBox } from '../../components';
import { io } from 'socket.io-client';


const Chat = () => {

    let loginId = ''

    let touristloginId = ''
    let touristloginUsername = ''

    let guideLoginId = ''
    let guideLoginUsername = ''

    // const dispatch = useDispatch();
    if (localStorage.getItem('touristUsername') && localStorage.getItem('touristUsername').length > 0) {
        touristloginUsername = localStorage.getItem('touristUsername');
        touristloginId = localStorage.getItem('touristId');
      } else if (localStorage.getItem('guide_Username') && localStorage.getItem('guide_Username').length > 0) {
        guideLoginUsername = localStorage.getItem('guide_Username');
        guideLoginId = localStorage.getItem('guide_id');
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


    const socket = useRef();

    // let { id } = useParams()
  
    const [chats, setChats] = useState([]);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const [receiver, setReceiver] = useState([])
    const [currentChat, setCurrentChat] = useState([]);
    const [sendMessage, setSendMessage] = useState(null);
    const [receivedMessage, setReceivedMessage] = useState(null);

    useEffect(() => {
        socket.current = io("http://localhost:5000");
        if(guideLoginId){
        socket.current.emit("new-user-add", guideLoginId);
        }
        else if(touristloginId){
          socket.current.emit("new-user-add", touristloginId)
        }
        socket.current.on("get-users", (users) => {
          setOnlineUsers(users);
        });
      }, []);

        // Send Message to socket server
useEffect(() => {
    if (sendMessage!==null) {
      socket.current.emit("send-message", sendMessage);}
  }, [sendMessage]);


  // Get the message from socket server
  useEffect(() => {
    socket.current.on("recieve-message", (data) => {
      setReceivedMessage(data);
    }
    );
  }, []);

    useEffect(() => {
        const getChats = async () => {
            if(guideLoginId){
          try {
            const res = await axios.get(`http://localhost:5000/chat/guide/${guideLoginId}`);
            setChats(res.data);
          } catch (error) {
            console.log(error);
          }
        } else if (touristloginId){
            try {
                const res = await axios.get(`http://localhost:5000/chat/tourist/${touristloginId}`);
                setChats(res.data);
                // setCurrentChat(chats)
              } catch (error) {
                console.log(error);
              }
        }

      
        }
        getChats();
      }, []);



      console.log("what are chats", chats)

    //   const checkOnlineStatus = (chat) => {
    //     const chatMember = chat.members.find((member) => member !== user._id);
    //     const online = onlineUsers.find((user) => user.userId === chatMember);
    //     return online ? true : false;
    //   };

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
              // online={checkOnlineStatus(chat)}
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
          setSendMessage={setSendMessage}
          receivedMessage={receivedMessage}
        />
      </div>
    </div>
  );
}

export default Chat