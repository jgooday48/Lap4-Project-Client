import React, {useState, useEffect, useRef, Children} from 'react'
import axios from 'axios';
import "./ChatBox.css"
import InputEmoji from 'react-input-emoji'
import { baseApi } from '../../utils/baseApi';

const ChatBox = ({ chat, touristUser, guideUser, setSendMessage, receivedMessage, socket}) => {

    const [userData, setUserData] = useState({});
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");
    const [id, setId] = useState([])


    let currentUser = null
    let guideId = null
    let touristId = null

    if (sessionStorage.getItem('touristUsername') && sessionStorage.getItem('touristUsername').length > 0) {
        currentUser = sessionStorage.getItem('touristId');
        touristId = sessionStorage.getItem('touristId')
      } else if (sessionStorage.getItem('guide_Username') && sessionStorage.getItem('guide_Username').length > 0) {
        currentUser = sessionStorage.getItem('guide_id')
        guideId = sessionStorage.getItem('guide_id')
      }

    // const loginId = localStorage.getItem('touristId')
    const scroll = useRef()

    useEffect(() => {

      const senderId = async () => {
        if (touristId){
          try {
            const data = await axios.get(`http://localhost:5000/tourist/${touristId}`)
            setId(data.data)
            console.log(id)
          } catch(error)
          {
            console.log(error)
          }
        }

        if (guideId){
          try{
            const data = await axios.get(`http://localhost:5000/guides/${guideId}`)
            setId(data.data)
            console.log(id)
          } catch(error){
            console.log(error)
          }
        }
      }
      senderId()

  },[chat])
  
    const handleChange = (newMessage)=> {
      setNewMessage(newMessage)
    }

    let userId = null

    // fetching data for header
    useEffect(() => {


        if(guideId){
         userId = chat.sender
        } else if (touristId){
          userId = chat.receiver
        }

        const getUserData = async ()=> {

            if(guideId){
            try
            {
              const res = await axios.get(baseApi+`tourist/${userId}`)
              console.log(res.data)
               setUserData(res.data)
              //  dispatch({type:"SAVE_USER", data:data})
            }
            catch(error)
            {
              console.log(error)
            }
        } else if (touristId){
            try
            {
              const res = await axios.get(baseApi + `guides/${userId}`)
              console.log(res)
               setUserData(res.data)
              //  dispatch({type:"SAVE_USER", data:data})
            }
            catch(error)
            {
              console.log(error)
            }
        }
        }
      if (chat !== null) {
      getUserData();
      }
    }, [chat]);
  
    // fetch messages
    useEffect(() => {
      const fetchMessages = async () => {
        try {
          const res = await axios.get(baseApi+`message/${chat.chat_id}`);
          setMessages(res.data);
        } catch (error) {
          console.log(error);
        }
      };
  
    fetchMessages();
    },[chat]);
  
  
    // Always scroll to last Message
    useEffect(()=> {
      scroll.current?.scrollIntoView({ behavior: "smooth" });
    },[messages])
  
  
  
    // // Send Message
    const handleSend = async(e)=> {
      e.preventDefault()
      let message = null
      if (guideId){
       message = {
        chatId: chat.chat_id,
        senderId : guideId,
        text: newMessage,
        time: new Date().toLocaleTimeString('en-GB', {
          hour: 'numeric',
          minute: '2-digit',
          hour12: false,
          timeZone: 'Europe/London',
        })}
} else if (touristId){
    message = {
        chatId: chat.chat_id,
        senderId : touristId,
        text: newMessage,
        time: new Date().toLocaleTimeString('en-GB', {
          hour: 'numeric',
          minute: '2-digit',
          hour12: false,
          timeZone: 'Europe/London',
        })}
}
console.log(message)

    let receiverId = null

    if (guideId){
     receiverId = chat.sender
    } else if (touristId){
        receiverId = chat.receiver
    }
    // // send message to socket server
    setSendMessage({...message, receiverId})
    // // send message to database
    try {
      const { data } = await axios.post(baseApi+"/message", message);
      console.log(data)
      setMessages([...messages, data]);
      setNewMessage("");
    }
    catch
    {
      console.log("error")
    }
  }
  
//   Receive Message from parent component
  useEffect(()=> {
    console.log("Message Arrived: ", receivedMessage)
    if (receivedMessage !== null && receivedMessage.chatId === chat._id) {
      setMessages([...messages, receivedMessage]);
    }
  
  },[receivedMessage])

  console.log(messages)
  console.log(id)
  console.log(userData)
  return (
      <div className="ChatBox-container">
        {chat ? (
          <>
            {/* chat-header */}
            <div className="chat-header">
              <div className="follower">
                <div>
                  {/* <img
                    src={
                      userData?.profilePicture
                        ? process.env.REACT_APP_PUBLIC_FOLDER +
                          userData.profilePicture
                        : process.env.REACT_APP_PUBLIC_FOLDER +
                          "defaultProfile.png"
                    }
                    alt="Profile"
                    className="followerImage"
                    style={{ width: "50px", height: "50px" }}
                  /> */}
                  <div className="name" style={{ fontSize: "0.9rem" }}>
                      {touristId && userData && userData.length > 0 && (
                      <div>
                        <span>{userData[0].name}</span>
                        <span>
                        <img src={userData[0].images[0]} alt="User Image" />
                        </span>
                      </div>
                      )}
                      {guideId && userData && userData.length > 0 && (
                      <div>
                        <span>{userData[0].name}</span>
                        {/* <span>
                        <img src={userData[0].images[0]} alt="User Image" />
                        </span> */}
                      </div>
                      )}
                  </div>
                </div>
              </div>
              <hr
                style={{
                  width: "95%",
                  border: "2px solid #bcbcbc",
                  marginTop: "20px",
                }}
              />
            </div>
            {/* chat-body */}
            <div className="chat-body" >
              {guideId && (messages.map((message) => (
                <>
                  <div ref={scroll} key={message.message_id}
                    className={
                      message.sender_id == guideId
                      ? "message own"
                      : "message"
                    }
                    >
                    <span className='text'>{message.text}</span>
                  </div>
                  <div className={message.sender_id == guideId
                      ? "extra"
                      : "extra2"}>
                    {message.sender_id == id[0].guide_id ? <span>{id[0].name}</span> : <span>{userData[0].name}</span>}
                    <span className='time'>{message.time}</span>
                  </div>
                  </>
              
                )))}
                {touristId && (messages.map((message) => (
                  <>
                  <div ref={scroll} key={message.message_id}
                    className={
                      message.sender_id == touristId
                      ? "message own"
                      : "message"
                    }
                    >
                    <span className='text'>{message.text}</span>
                  </div>
                    <div className={ message.sender_id == touristId
                      ? "extra"
                      : "extra2"}>
                    {message.sender_id == id[0].tourist_id ? <span>{id[0].name}</span> : <span>{userData[0].name}</span>}
                    <span className='time'>{message.time}</span>
                    </div>
                  </>
                )))}
            </div>
            {/* chat-sender */}
            <div className="chat-sender">
              {/* <div onClick={() => imageRef.current.click()}>+</div> */}
              <InputEmoji
                value={newMessage}
                onChange={handleChange}
              />
              <div className="send-button button" onClick = {handleSend}>Send</div>
              <input
                type="file"
                name=""
                id=""
                style={{ display: "none" }}
                // ref={imageRef}
              />
            </div>{" "}
          </>
        ) : (
          <span className="chatbox-empty-message">
            Tap on a chat to start conversation...
          </span>
        )}
      </div>
  )
}

export default ChatBox
