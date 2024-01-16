import React, {useState, useEffect} from 'react'
import axios from 'axios'
import "../../pages/Chat/Chat.css"

const Conversation = ({ data, touristUser, guideUser }) => {


    const [userData, setUserData] = useState({})
    const [online, setOnline ] = useState(true)

    let currentUser = null
    let guideId = null
    let touristId = null
    let userId = null

    if (sessionStorage.getItem('touristUsername') && sessionStorage.getItem('touristUsername').length > 0) {
        currentUser = sessionStorage.getItem('touristId');
        touristId = sessionStorage.getItem('touristId')
      } else if (sessionStorage.getItem('guide_Username') && sessionStorage.getItem('guide_Username').length > 0) {
        currentUser = sessionStorage.getItem('guide_id')
        guideId = sessionStorage.getItem('guide_id')
      }

    


    useEffect(()=> {
    // const userId = data.find(obj => obj.sender == currentUser)?.receiver;
    
    if(guideId){
    userId = data.sender
    } else if (touristId){
    userId = data.receiver
    }
    
    const getUserData = async ()=> {
        if(guideId){
      try
      {
        const { data } = await axios.get(`http://localhost:5000/tourist/${userId}`)
         setUserData(data[0])
        //  dispatch({type:"SAVE_USER", data:data})
      }
      catch(error)
      {
        console.log(error)
      }
    } else if (touristId){
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
}

    getUserData();
  }, [data, userId])

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