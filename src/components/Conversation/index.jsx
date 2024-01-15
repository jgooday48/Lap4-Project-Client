import React, {useState, useEffect} from 'react'
import axios from 'axios'
import "../../pages/Chat/Chat.css"

const Conversation = ({ data, currentUser }) => {

    const [userData, setUserData] = useState({})
    const [online, setOnline ] = useState(true)

    useEffect(()=> {
    // const userId = data.find(obj => obj.sender == currentUser)?.receiver;
    const userId = data.receiver
    console.log("data",userId)

    const getUserData = async ()=> {
      try
      {
        const res = await axios.get(`http://localhost:5000/guides/${userId}`)
         setUserData(res.data.data)
         console.log("convo",userData)
        //  dispatch({type:"SAVE_USER", data:data})
      }
      catch(error)
      {
        console.log(error)
      }
    }

    getUserData();
  }, [data, currentUser])

  return (
    <>
    <div className="follower conversation">
        <div>
          {online && <div className="online-dot"></div>}
          <div className="name" style={{fontSize: '0.8rem'}}>
            <span>{userData.name}</span>
            <span>{userData.image}</span>
            <span style={{color: online?"#51e200":""}}>{online? "Online" : "Offline"}</span>
          </div>
        </div>
      </div>
      <hr style={{ width: "85%", border: "0.1px solid #ececec" }} />
    </>
  )
}

export default Conversation
