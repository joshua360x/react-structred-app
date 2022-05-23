import React from 'react'
import { useHistory } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { useForm } from '../hooks/useForm'



export default function Login() {
  const history = useHistory()

  const authForLogin = useAuth()
  const { formInState, handleFormToBeChange } = useForm({ email: '', password: ''})

  function handleLogin(e) {
    try {
      e.preventDefault()
      authForLogin.login(formInState.email, formInState.password)
      history.replace('/post')


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
        Password
        <input type="password" id='password' name='password' value={formInState.password} onChange={handleFormToBeChange} />
      </label>
      <br />

      <button type="submit" aria-label="Sign In">Sign In</button>

    </form>
    
    </>
  )
}
