import React, {useState, useEffect} from 'react'
import axios from 'axios'
import "../../pages/Chat/Chat.css"

const Conversation = ({ data, currentUser }) => {

    const [userData, setUserData] = useState(null)
    const [online, setOnline ] = useState(true)

    console.log(data)

    useEffect(()=> {
    const userId = data.find(obj => obj.sender === currentUser)
    if (userId) {
        const receiverId = userId.receiver;
    }
    const getUserData = async ()=> {
      try
      {
        const res = await axios.get(`http://localhost:5000/guides/${receiverId}`)
         setUserData(res.data)
        //  dispatch({type:"SAVE_USER", data:data})
      }
      catch(error)
      {
        console.log(error)
      }
    }

    getUserData();
  }, [])
  console.log(userData)

  return (
    <>
    <div className="follower conversation">
        <div>
          {online && <div className="online-dot"></div>}
          {/* <img
            src={userData?.profilePicture? process.env.REACT_APP_PUBLIC_FOLDER + userData.profilePicture : process.env.REACT_APP_PUBLIC_FOLDER + "defaultProfile.png"}
            alt="Profile"
            className="followerImage"
            style={{ width: "50px", height: "50px" }}
          /> */}
          <div className="name" style={{fontSize: '0.8rem'}}>
            <span>{userData.name}</span>
            <span style={{color: online?"#51e200":""}}>{online? "Online" : "Offline"}</span>
          </div>
        </div>
      </div>
      <hr style={{ width: "85%", border: "0.1px solid #ececec" }} />
    </>
  )
}

export default Conversation
