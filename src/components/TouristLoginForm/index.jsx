import { React, useEffect, useState } from 'react'
import { useTourist } from '../../contexts/touristContext'
import { useWelcome } from '../../contexts/welcomeContext';
import { useNavigate } from 'react-router-dom';
import { baseApi } from '../../utils/baseApi'
import axios from 'axios';
const TouristLoginForm = () => {

    const { touristemail, setTouristEmail, touristpassword, setTouristPassword, errorMessage, setErrorMessage, Loading, setTourist, touristusername, setTouristUsername, setLoading, setTouristAccess, setTouristRefresh } = useTourist(); 
    const { setWelcome } = useWelcome(); 

    // const [email, setEmail ] = useState('')
    // const [password, setPassword ] = useState('')
    // const [error, setError] = useState(null)
    // const [Loading, setLoading] = useState(null)

    const goTo = useNavigate();

    const loginFunction = async () => {


            const userData = {
                "username": touristusername,
                "password": touristpassword
        }

        await axios.post("http://localhost:5000/tourists/login", userData)
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
        
        // try {
        //     const userData = {
        //         "username": touristusername,
        //         "password": touristpassword
        //     }
    
        //     const response = await axios.post(`${baseApi}tourists/login`, userData)
        //     // URL needs updating before deployment
            
        //     const data = await response.data
        //     console.log("login details: ", data)
        //     localStorage.setItem("token", data.tokens.access)
        //     localStorage.setItem("refresh_token", data.tokens.refresh)

        //     if (data.err)
        //     {throw Error(data.err)}
        //     // login(data)
        //     getCurrentUser()
        // } catch (err) {
        //     console.warn(err);
        // }
    
    }

 

    const getCurrentUser = async (token) => {
           const axiosInstance = axios.create({
        baseURL: baseApi,
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
        axiosInstance.get("tourists/current")
            .then(res => {
                sessionStorage.setItem("touristId", res.data.user_details.tourist_id)
                sessionStorage.setItem("touristUsername", res.data.user_details.username)
        }).catch(e => console.log(e))

    }

    const handleSubmit = async (e) =>{
        e.preventDefault();
        setErrorMessage('');
        await loginFunction(e);
        if (sessionStorage.length > 0) {
            
            setTourist(true);
            setWelcome(false)
            goTo("/touristhomepage")
        }
        else {setErrorMessage("Could not log in right now, we are fixing this")}


    }

    const updateUsername = e => {
        const input = e.target.value;
        setTouristUsername(input)
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
      
            <form aria-label='form' onSubmit={handleSubmit} id="tourist-register-form">
                
            {errorMessage && (
                <p className="error"> {errorMessage} </p>
            )}
            <label htmlFor='Username'>Username</label>
            <input className="input" aria-label="Username" name="username" type='text' onChange={updateUsername} placeholder="username" role="username" required/>
            <label htmlFor='Password'>Password</label>
            <input aria-label='Password' className="input" name="password" type='password' onChange={updatePassword} placeholder="password" role="password" required/>
            <input role='submit' className='signup-btn' type='submit' value='LOGIN' onClick={handleSubmit}/>
            <p className='clickable' onClick={() => goTo('/touristsignuppage')}>Don't have an account yet? Register here!</p>
        </form>
        </>
    );
}

export default TouristLoginForm
