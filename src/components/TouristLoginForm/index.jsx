import { React, useState } from 'react'
import { useTourist } from '../../contexts/touristContext'
import { useWelcome } from '../../contexts/welcomeContext';

const TouristLoginForm = () => {

    const { email, setEmail, password, setPassword, error, Loading, setTourist } = useTourist(); 
    const { setWelcome } = useWelcome(); 

    // const [email, setEmail ] = useState('')
    // const [password, setPassword ] = useState('')
    // const [error, setError] = useState(null)
    // const [Loading, setLoading] = useState(null)

    // const useTouristLogin = async (email, password) => {
    //   setLoading(true)
    //   setError(null)
  
    //   const response = await fetch('http://localhost:3000/users/login', {
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
  
    //     dispatch({type: 'LOGIN', payload: json})

    //     setTourist(true)
    //     setWelcome(false)
  
    //     setLoading(false)
    //   }
    // }
     
    const handleSubmit = async (e) => {
      e.preventDefault()
    
  
      // await useTouristLogin(email, password)
    }

  return (
    <form role="form" className="login" onSubmit={handleSubmit}>
        <h1>Tourist Log In</h1>
        
        <label role="email">Email:</label>
        <input 
          type="email" 
          onChange={(e) => setEmail(e.target.value)} 
          value={email} 
        />
        <label role="password">Password:</label>
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

export default TouristLoginForm
