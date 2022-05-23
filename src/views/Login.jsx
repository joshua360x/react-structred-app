import React from 'react'
import { useAuth } from '../hooks/useAuth'
import { useForm } from '../hooks/useForm'



export default function Login() {
  const authForLogin = useAuth()
  const { formInState, handleFormToBeChange } = useForm({ email: '', password: ''})

  function handleLogin(e) {
    try {
      e.preventDefault()
      authForLogin.login(formInState.email, formInState.password)

    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
    
    <h3>Please Login To Continue</h3>
    <form onSubmit={handleLogin}>
      <label htmlFor="email">
        Email
        <input type="email" id='email' name='email' value={formInState.email} onChange={handleFormToBeChange} />
      </label>
      <br />
      
      <label htmlFor="password">
        Email
        <input type="password" id='password' name='password' value={formInState.password} onChange={handleFormToBeChange} />
      </label>
      <br />

      <button type="submit" aria-label="Sign In">Sign In</button>

    </form>
    
    </>
  )
}
