import { React, useState } from 'react'
import { useGuide } from '../../contexts/guideContext'
import { useWelcome } from '../../contexts/welcomeContext';
import { useNavigate } from 'react-router-dom';
import { baseApi } from '../../utils/baseApi';


const GuideLoginForm = () => {

    const { guideeemail, setGuideEmail, guidepassword, setGuidePassword, errorMessage, setErrorMessage, Loading, setGuide, guideusername, setGuideUsername, guideaccess, setGuideAccess, guiderefresh, setGuideRefresh } = useGuide(); 
    const { setWelcome } = useWelcome(); 

    // const [email, setEmail ] = useState('')
    // const [password, setPassword ] = useState('')
    // const [error, setError] = useState(null)
    // const [Loading, setLoading] = useState(null)

    const goTo = useNavigate();

    const loginFunction = async (e) => {
        try {
            const userData = {
                "username": guideusername,
                "password": guidepassword
            }
    
            const response = await axios.post(`${baseApi}guides/login`, userData)
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
            setGuide(true);
            setWelcome(false)
            goTo("/guidehomepage")
        }
        else {setErrorMessage("Could not log in right now, we are fixing this")}


    }

    const updateUsername = e => {
        const input = e.target.value;
        setGuideUsername(input )
    }

    const updatePassword = e =>{
        const input = e.target.value
        setGuidePassword(input)

    }

    function login(data) {
        localStorage.setItem("guide_access_token", data.tokens.access_token)
        localStorage.setItem("guide_refresh_token", data.tokens.refresh_token)
        if (
            localStorage.getItem("guide_access_token") === data.tokens.access_token &&
            localStorage.getItem("guide_refresh_token") === data.tokens.refresh_token
        ) {
            setTouristAccess(data.tokens.access_token);
            setTouristRefresh(data.tokens.refresh_token);
        }
    }



    




  


    return (
        <>
        <form aria-label='form' onSubmit={handleSubmit} id="tourist-register-form">
            {errorMessage && (
                <p className="error"> {errorMessage} </p>
            )}
            <label htmlFor='Username'>Username</label>
            <input className="input" aria-label="Username" name="username" type='text' onChange={updateUsername} placeholder="username" role="username" />
            <label htmlFor='Password'>Password</label>
            <input aria-label='Password' className="input" name="password" type='password' onChange={updatePassword} placeholder="password" role="password" />
            <input role='submit' className='signup-btn' type='submit' value='LOGIN' onClick={handleSubmit} />
        </form>
        </>
    );
}

export default GuideLoginForm

