import { React, useState } from 'react'

const Login = () => {

    const [email, setEmail ] = useState('')
    const [password, setPassword ] = useState('')
    const [error, setError] = useState(null)
    const [Loading, setLoading] = useState(null)

    // const useLogin = async (email, password) => {
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
  
    //     setLoading(false)
    //   }
    // }
     
    // const handleSubmit = async (e) => {
    //   e.preventDefault()
  
    //   await useLogin(email, password)
    // }

  return (
    <div> Login </div>
  )
}

export default Login
