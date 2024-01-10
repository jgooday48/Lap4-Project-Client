import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const TouristSignupForm = () => {

    const loginFunction = async (e) => {
        try {
            const userData = {
                username: e.target.username.value,
                password: e.target.password.value
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

    const [errorMessage, setErrorMessage] = useState();
    const [ username, setUsername ] = useState();
    const [ password, setPassword ] = useState();




    const handleSubmit = async(e) => {
        e.preventDefault();
        setErrorMessage('')
        //await registerFunction(e);
        await loginFunction(e);
        if(localStorage.length){goTo('/touristhomepage')}
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



  return (
    <>

<form aria-label='form' onSubmit={handleSubmit} id="tourist-register-form">
             {errorMessage && (
                <p className="error"> {errorMessage} </p>
            )}
            <label htmlFor='Username'>Username</label>
            <input aria-label="Username" name="username" type='text' onChange={updateUsername} placeholder="example username" className="input" role="username"/>
            <label htmlFor='Password'>Password</label>
            <input aria-label='Password' name="password" type='password' onChange={updatePassword}  className="input" placeholder="example password" role="password"/>
            <input role='submit' type='submit' value='REGISTER' className="signup-btn" />
            <p role='text' className="clickable" onClick={() => goTo('/touristloginpage')}>Already have an account With Us? Click here to login!</p>
            </form>
    </>
  ) 
}

export default TouristSignupForm
