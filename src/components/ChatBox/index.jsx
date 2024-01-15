import React, {useState, useEffect, useRef} from 'react'
import axios from 'axios';
import "./ChatBox.css"
import InputEmoji from 'react-input-emoji'

const ChatBox = ({ chat, currentUser, setSendMessage, receivedMessage}) => {

    const [userData, setUserData] = useState({});
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");
    const [id, setId] = useState([])

    const loginId = localStorage.getItem('touristId')
    const scroll = useRef()
  
    console.log("chat", chat)

    const handleChange = (newMessage)=> {
      setNewMessage(newMessage)
    }

    // fetching data for header
    useEffect(() => {

        const userId = chat.receiver
        console.log("userID", userId)

        const getUserData = async ()=> {
            try
            {
              const res = await axios.get(`http://localhost:5000/guides/${userId}`)
               setUserData(res.data.data)
              //  dispatch({type:"SAVE_USER", data:data})
            }
            catch(error)
            {
              console.log(error)
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
          const res = await axios.get(`http://localhost:5000/message/${chat.chat_id}`);
          setMessages(res.data);
          console.log("Response data:", res.data);
        } catch (error) {
          console.log(error);
        }
      };
  
    fetchMessages();
    }, [chat]);
  
  
    // Always scroll to last Message
    // useEffect(()=> {
    //   scroll.current?.scrollIntoView({ behavior: "smooth" });
    // },[messages])
  
  
  
    // // Send Message
    const handleSend = async(e)=> {
      e.preventDefault()
      const message = {
        chatId: chat.chat_id,
        senderId : currentUser,
        text: newMessage,
    }
    // const receiverId = chat.filter(obj => obj.sender !== currentUser).map(obj => obj.receiver);
    const receiverId = chat.receiver
    // // send message to socket server
    setSendMessage({...message, receiverId})
    // // send message to database
    try {
      const { data } = await axios.post("http://localhost:5000/message", message);
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
                    <span>
                      {userData?.name}
                    </span>
                  </div>
                </div>
              </div>
              <hr
                style={{
                  width: "95%",
                  border: "0.1px solid #ececec",
                  marginTop: "20px",
                }}
              />
            </div>
            {/* chat-body */}
            <div className="chat-body" >
              {messages.map((message) => (
                  <div ref={scroll} key={message.message_id}
                    className={
                      message.sender_id == currentUser
                        ? "message own"
                        : "message"
                    }
                  >
                    <span>{message.text}</span>
                  </div>
                
                ))}
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
