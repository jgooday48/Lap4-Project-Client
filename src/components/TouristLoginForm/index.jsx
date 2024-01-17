import { React, useEffect, useState } from 'react'
import { useTourist } from '../../contexts/touristContext'
import { useWelcome } from '../../contexts/welcomeContext';
import { useNavigate } from 'react-router-dom';
import { baseApi } from '../../utils/baseApi'
import axios from 'axios';
import { NavLink } from 'react-router-dom';

const TouristLoginForm = () => {

    const { touristemail, setTouristEmail, touristpassword, setTouristPassword, errorMessage, setErrorMessage, Loading, setTourist, touristusername, setTouristUsername, setLoading, setTouristAccess, setTouristRefresh } = useTourist(); 
    const { welcome, setWelcome } = useWelcome(); 

    // const [email, setEmail ] = useState('')
    // const [password, setPassword ] = useState('')
    // const [error, setError] = useState(null)
    // const [Loading, setLoading] = useState(null)

    const goTo = useNavigate();

    const loginFunction = async () => {


            const userData = {
                "email": touristemail,
                "password": touristpassword
        }

        await axios.post(baseApi + "/tourists/login", userData)
            .then(res => {
                const data = res.data
                   sessionStorage.setItem("tourist_token", data.tokens.access)
                sessionStorage.setItem("tourist_refresh", data.tokens.refresh)
                if (data.tokens.access) {
                    getCurrentUser(data.tokens.access)
                } else {
                    console.log("current user not got ")
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
        axiosInstance.get(baseApi+"tourists/current")
            .then(res => {
                sessionStorage.setItem("touristId", res.data.user_details.tourist_id)
                sessionStorage.setItem("touristUsername", res.data.user_details.username)
                sessionStorage.setItem("touristEmail", res.data.user_details.email)
        }).catch(e => console.log(e))

    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage('');
        await loginFunction(e);
    
        // Wait for getCurrentUser to complete before checking sessionStorage
        await getCurrentUser(sessionStorage.getItem("tourist_token"));
    
        if (sessionStorage.getItem("tourist_token")) {
            setTourist(true);
            setWelcome(false);
            goTo("/touristhomepage");
        } else {
            setErrorMessage("Could not log in right now, we are fixing this");
        }
        console.log(welcome)
    }

    const updateEmail = e => {
        const input = e.target.value;

        setTouristEmail(input)
    }

    const updatePassword = e =>{
        const input = e.target.value
        setTouristPassword(input)

    }

    // function login(data) {
    //     localStorage.setItem("tourist_access_token", data.tokens.access_token)
    //     localStorage.setItem("tourist_refresh_token", data.tokens.refresh_token)
    //     if (
    //         localStorage.getItem("tourist_access_token") === data.tokens.access_token &&
    //         localStorage.getItem("tourist_refresh_token") === data.tokens.refresh_token
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

            <p> TOURIST LOGIN </p>
            <label htmlFor='Email'>Email</label>
            <input className="input" aria-label="Email" name="email" type='text' onChange={updateEmail} placeholder="email" role="email" required/>
            <label htmlFor='Password'>Password</label>
            <input aria-label='Password' className="input" name="password" type='password' onChange={updatePassword} placeholder="password" role="password" required/>
            <input role='submit' className='signup-btn' type='submit' value='LOGIN' onClick={handleSubmit}/>
            <p className='clickable' onClick={() => goTo('/touristsignuppage')}>Don't have an account yet? Register here!</p>
        </form>
        </>
    );
}

export default TouristLoginForm
