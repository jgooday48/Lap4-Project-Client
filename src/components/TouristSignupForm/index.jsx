import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useTourist } from '../../contexts/touristContext'
import { useWelcome } from '../../contexts/welcomeContext'

const TouristSignupForm = () => {

    const { errorMessage, setErrorMessage, setUsername, setPassword, setName, setEmail,setTourist } = useTourist();
    const { setWelcome } =useWelcome()

    const loginFunction = async (e) => {
        try {
            const userData = {
                username: e.target.username.value,
                password: e.target.password.value, 
                email: e.target.email.value,
                name: e.target.name.value
            }
    
            const response = null//= await axios.post('http://127.0.0.1:3000/user/login', userData)
            const data = await response.data
            if (data.err)
            {throw Error(data.err)}
            login(data)
        } catch (err) {
            console.warn(err);
        }
    
    }

    function login(data) {
        localStorage.setItem("token", data.token)
    }

    

    const goTo = useNavigate();

    // const [errorMessage, setErrorMessage] = useState();
    // const [ username, setUsername ] = useState();
    // const [ password, setPassword ] = useState();
    // const [ name, setName ] = useState();
    // const [ email, setEmail ] = useState(); 
    // const [ tourist, setTourist ] = useState(false)




    const handleSubmit = async(e) => {
        e.preventDefault();
        setErrorMessage('')
        //await registerFunction(e);
        await loginFunction(e);
        if(localStorage.length){
            setTourist(true)
            setWelcome(false)
            goTo('/touristhomepage')}
        else { setErrorMessage('User already exists!') }        
    }

    const updateUsername = e => {
        const input = e.target.value;
        setUsername(input)
    }

    const updatePassword = e => {
        const input = e.target.value;
        setPassword(input)
    }

    const updateName = e => {
        const input = e.target.value;
        setName(input)
    }

    const updateEmail = e => {
        const input = e.target.value;
        setEmail(input )
    }



  return (
    <>

<form aria-label='form' onSubmit={handleSubmit} id="tourist-register-form">
             {errorMessage && (
                <p className="error"> {errorMessage} </p>
            )}
            <label htmlFor="Name">Full Name</label>
            <input aria-label="Name" name="name" type="text" onChange={updateName} placeholder="example name" className="input" role="name" />
            <label htmlFor='Username'>Username</label>
            <input aria-label="Username" name="username" type='text' onChange={updateUsername} placeholder="example username" className="input" role="username"/>
            <label htmlFor="Email">Email</label>
            <input aria-label="Email" name="email" type="text" onChange={updateEmail} placeholder='example@email.com' className="input" role="email" />
            <label htmlFor='Password'>Password</label>
            <input aria-label='Password' name="password" type='password' onChange={updatePassword}  className="input" placeholder="example password" role="password"/>
            <input role='submit' type='submit' value='REGISTER' className="signup-btn" />
            <p role='signup' className="clickable" onClick={() => goTo('/touristloginpage')}>Already have an account With Us? Click here to login!</p>
            </form>
    </>
  ) 
}

export default TouristSignupForm
