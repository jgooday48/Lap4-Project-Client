import { React, useState } from 'react'
import { useTourist } from '../../contexts/touristContext'
import { useWelcome } from '../../contexts/welcomeContext';
import { useNavigate } from 'react-router-dom';


const TouristLoginForm = () => {

    const { email, setEmail, password, setPassword, errorMessage, setErrorMessage, Loading, setTourist, username, setUsername } = useTourist(); 
    const { setWelcome } = useWelcome(); 

    // const [email, setEmail ] = useState('')
    // const [password, setPassword ] = useState('')
    // const [error, setError] = useState(null)
    // const [Loading, setLoading] = useState(null)

    const goTo = useNavigate();

    const loginFunction = async () => {
        try {
            const userData = {
                "username": username,
                "password": password
            }
    
            const response = await axios.post(baseApi + "tourists/login", userData)
            // URL needs updating before deployment
            const data = await response.data
            if (data.err)
            {throw Error(data.err)}
            login(data)
        } catch (err) {
            console.warn(err);
        }
    
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();
        setErrorMessage('');
        await loginFunction(e);
        if(localStorage.length){
            setTourist(true);
            setWelcome(false)
            goTo("/touristhomepage")
        }
        else {setErrorMessage("Could not log in right now, we are fixing this")}


    }

    const updateUsername = e => {
        const input = e.target.value;
        setUsername(input )
    }

    const updatePassword = e =>{
        const input = e.target.value
        setPassword(input)

    }

    function login(data) {
        localStorage.setItem("access token", data.access_token)
        localStorage.setItem("refresh token", data.refresh_token)
    }



    




  


    return (
        <>
        <form aria-label='form' onSubmit={handleSubmit} id="register-form">
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
