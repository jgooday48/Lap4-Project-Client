import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useTourist } from '../../contexts/touristContext'
import { useWelcome } from '../../contexts/welcomeContext'
import { baseApi } from '../../utils/baseApi'

const TouristSignupForm = () => {

    const { errorMessage, setErrorMessage, setTouristUsername, setTouristPassword, setTouristName, setTouristEmail,setTourist, touristusername, touristpassword, touristname, touristemail, setTouristAccess, setTouristRefresh} = useTourist();
    const { setWelcome } =useWelcome()

    const registerFunction = async () => {
        try {
            const userData = {
                "username": touristusername,
                "password": touristpassword,
                "name": touristname,
                "email": touristemail,
                "user_type": "TOURIST"
            }
    
            const response = await axios.post(`${baseApi}tourists/register`, userData)
            const data = await response.data
            console.log(data)
            if (data.err)
            {throw Error(data.err)}
        } catch (err) {
            console.warn(err);
        }
    
    }

    const loginFunction = async () => {


        const userData = {
            "username": touristusername,
            "password": touristpassword
    }

    await axios.post(baseApi + "tourists/login", userData)
        .then(res => {
            const data = res.data
               localStorage.setItem("tourist_token", data.tokens.access)
            localStorage.setItem("tourist_refresh", data.tokens.refresh)
            if (data.tokens.access) {
                getCurrentUser(data.tokens.access)
            } else {
                console.log("current user not got ")
            }
            
        }).catch(e => console.log(e))

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

    

    const goTo = useNavigate();

    // const [errorMessage, setErrorMessage] = useState();
    // const [ username, setUsername ] = useState();
    // const [ password, setPassword ] = useState();
    // const [ name, setName ] = useState();
    // const [ email, setEmail ] = useState(); 
    // const [ tourist, setTourist ] = useState(false)

    const getCurrentUser = async (token) => {
        const axiosInstance = axios.create({
     baseURL: baseApi,
     headers: {
         'Authorization': `Bearer ${token}`
     }
 })
     axiosInstance.get("tourists/current")
         .then(res => {
             localStorage.setItem("touristId", res.data.user_details.tourist_id)
             localStorage.setItem("touristUsername", res.data.user_details.username)
     }).catch(e => console.log(e))

 }




    const handleSubmit = async(e) => {
        e.preventDefault();
        setErrorMessage('')
        await registerFunction(e);
        await loginFunction(e);
        if(localStorage.length){
            setTourist(true)
            setWelcome(false)
            goTo('/touristhomepage')}
        else { setErrorMessage('User already exists!') }        
    }

    const updateUsername = e => {
        const input = e.target.value;
        setTouristUsername(input)
    }

    const updatePassword = e => {
        const input = e.target.value;
        setTouristPassword(input)
    }

    const updateName = e => {
        const input = e.target.value;
        setTouristName(input)
    }

    const updateEmail = e => {
        const input = e.target.value;
        setTouristEmail(input )
    }



  return (
    <>

<form aria-label='form' onSubmit={handleSubmit} id="tourist-register-form">
             {errorMessage && (
                <p className="error"> {errorMessage} </p>
            )}
            <label htmlFor="Name">Full Name</label>
            <input aria-label="Name" name="name" type="text" onChange={updateName} placeholder="example name" className="input" role="name" required/>
            <label htmlFor='Username'>Username</label>
            <input aria-label="Username" name="username" type='text' onChange={updateUsername} placeholder="example username" className="input" role="username" required/>
            <label htmlFor="Email">Email</label>
            <input aria-label="Email" name="email" type="text" onChange={updateEmail} placeholder='example@email.com' className="input" role="email" required/>
            <label htmlFor='Password'>Password</label>
            <input aria-label='Password' name="password" type='password' onChange={updatePassword}  className="input" placeholder="example password" role="password" required/>
            <input role='submit' type='submit' value='REGISTER' className="signup-btn" onClick={handleSubmit} />
            <p role='signup' className="clickable" onClick={() => goTo('/touristloginpage')}>Already have an account With Us? Click here to login!</p>
            </form>
    </>
  ) 
}

export default TouristSignupForm
