import { React, useState } from 'react'
import { useGuide } from '../../contexts/guideContext'
import { useWelcome } from '../../contexts/welcomeContext';
import { useNavigate } from 'react-router-dom';
import { baseApi } from '../../utils/baseApi';
import { NavLink } from 'react-router-dom';
import axios from 'axios';




const GuideLoginForm = () => {

    const { guideemail, setGuideEmail, guidepassword, setGuidePassword, errorMessage, setErrorMessage, Loading, setGuide, guideusername, setGuideUsername, guideaccess, setGuideAccess, guiderefresh, setGuideRefresh } = useGuide(); 
    const { setWelcome } = useWelcome(); 

    // const [email, setEmail ] = useState('')
    // const [password, setPassword ] = useState('')
    // const [error, setError] = useState(null)
    // const [Loading, setLoading] = useState(null)

    const goTo = useNavigate();

    const loginFunction = async () => {


        const userData = {
            "email": guideemail,
            "password": guidepassword
    }

    await axios.post(baseApi+"guides/login", userData)
        .then(res => {
            const data = res.data
               sessionStorage.setItem("guide_token", data.tokens.access)
            sessionStorage.setItem("guide_refresh", data.tokens.refresh)
            if (data.tokens.access) {
                getCurrentUser(data.tokens.access)
            } else {
                console.log("current user (guide) not got ")
            }
            
        }).catch(e => console.log(e))

    }

    const getCurrentUser = async (token) => {
        const axiosInstance = axios.create({
     baseURL: baseApi,
     headers: {
         'Authorization': `Bearer ${token}`
     }
 })
     axiosInstance.get("guides/current")
         .then(res => {
             sessionStorage.setItem("guide_id", res.data.user_details.guide_id)
             sessionStorage.setItem("guide_Username", res.data.user_details.username)
             sessionStorage.setItem("guide_Email", res.data.user_details.email)

     }).catch(e => console.log(e))

 }

 const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    await loginFunction(e);

    // Wait for getCurrentUser to complete before checking sessionStorage
    await getCurrentUser(sessionStorage.getItem("guide_token"));

    if (sessionStorage.getItem("guide_token")) {
        setGuide(true);
        setWelcome(false);
        goTo("/guidehomepage");
    } else {
        setErrorMessage("Could not log in right now, we are fixing this");
    }
}

    const updateEmail = e => {
        const input = e.target.value;
        setGuideEmail(input)
    }

    const updatePassword = e =>{
        const input = e.target.value
        setGuidePassword(input)

    }

    // function login(data) {
    //     localStorage.setItem("guide_access_token", data.tokens.access_token)
    //     localStorage.setItem("guide_refresh_token", data.tokens.refresh_token)
    //     if (
    //         localStorage.getItem("guide_access_token") === data.tokens.access_token &&
    //         localStorage.getItem("guide_refresh_token") === data.tokens.refresh_token
    //     ) {
    //         setTouristAccess(data.tokens.access_token);
    //         setTouristRefresh(data.tokens.refresh_token);
    //     }
    // }



    




  


    return (
        <>
         <div className="login-switch">
                <NavLink to="/touristloginpage" className="switch-element">TOURIST</NavLink>
                <NavLink to="/guideloginpage" className="switch-element">GUIDE</NavLink>
            </div>
        <form aria-label='form' onSubmit={handleSubmit} id="tourist-register-form">
            {errorMessage && (
                <p className="error"> {errorMessage} </p>
            )}
            <p> GUIDE LOGIN </p>
            <label htmlFor='Email'>Email</label>
            <input className="input" aria-label="email" name="email" type='text' onChange={updateEmail} placeholder="email" role="email" />
            <label htmlFor='Password'>Password</label>
            <input aria-label='Password' className="input" name="password" type='password' onChange={updatePassword} placeholder="password" role="password" />
            <input role='submit' className='signup-btn' type='submit' value='LOGIN' onClick={handleSubmit} />
        </form>
        </>
    );
}

export default GuideLoginForm
