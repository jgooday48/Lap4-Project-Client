import React, {useState, useEffect} from 'react'
import axios from 'axios'
import "../../pages/Chat/Chat.css"
import { baseApi } from '../../utils/baseApi'
import './index.css'

const Conversation = ({ data, touristUser, guideUser, online }) => {


    const [userData, setUserData] = useState({})
    // const [online, setOnline ] = useState(true)

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

      console.log(touristId)
    


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
        const { data } = await axios.get(baseApi+`tourist/${userId}`)
         setUserData(data)
        //  dispatch({type:"SAVE_USER", data:data})
      }
      catch(error)
      {
        console.log(error)
      }
    } else if (touristId){
        try
        {
          const res = await axios.get(baseApi+`/guides/${userId}`)
           setUserData(res.data)
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

  console.log("daata", userData)
  return (
    <>
    <div className="follower conversation">
        <div>
          <div className="name" style={{fontSize: '0.8rem'}}>
            {userData && userData.length > 0 && (
              <div>
              <span style={{fontSize:'large'}} ><b>{userData[0].name}</b></span>

                {userData[0].images ? <span><img className='convo-img'  style={{ width: '70px', height: '70px' }} src={userData[0].images[0]} alt='User image'/></span> : null}
              </div>
            )}
            <br/>
            <span style={{ color: online ? "#51e200" : "", fontSize:'large'}}> 
              {online ? <div className="online-dot"></div> :
                <div className="offline-dot"></div>
              }
            {online? "Online" : "Offline"}</span>
          </div>
        </div>
      </div>
      <hr style={{ width: "85%", border: "2px solid #bcbcbc" }} />
    </>
  )
}

export default Conversation
