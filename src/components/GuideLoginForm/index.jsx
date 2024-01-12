import { React, useState }from 'react'
import { useGuide } from '../../contexts/guideContext'
import { useWelcome } from '../../contexts/welcomeContext';

const GuideLoginForm = () => {

    const { email, setEmail, password, setPassword, error, setError, Loading, setLoading } = useGuide(); 
    const { setWelcome } = useWelcome(); 

    // const useGuideLogin = async (email, password) => {
    //   setLoading(true)
    //   setError(null)
  
    //   const response = await fetch('http://localhost:3000/guide/login', {
    //     method: 'POST',
    //     headers: {'Content-Type': 'application/json'},
    //     body: JSON.stringify({ email, password })
    //   })
    //   const json = await response.json()
  
    //   if (!response.ok) {
    //     setLoading(false)
    //     setError(json.error)
    //   }
    //   if (response.ok) {
  
    //     localStorage.setItem('user', JSON.stringify(json))
    //     setGuide(true) 
    //     setWelcome(false)
  
    //     dispatch({type: 'LOGIN', payload: json})
  
    //     setLoading(false)
    //   }
    // }
     
    const handleSubmit = async (e) => {
      e.preventDefault()
  
    //   await useGuideLogin(email, password)
    }

  return (
    <form className="login" onSubmit={handleSubmit}>
        <h1>Guide Log In</h1>
        
        <label>Email:</label>
        <input 
          type="email" 
          onChange={(e) => setEmail(e.target.value)} 
          value={email} 
        />
        <label>Password:</label>
        <input 
          type="password" 
          onChange={(e) => setPassword(e.target.value)} 
          value={password} 
        />
  
        <button disabled={Loading} id="loginButton">Log in</button>
        {error && <div className="error">{error}</div>}
      </form>
  )
}

export default GuideLoginForm
