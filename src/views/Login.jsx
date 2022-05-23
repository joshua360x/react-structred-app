import React from 'react'
import { useLocation } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { useForm } from '../hooks/useForm'
import { signInUser } from '../utils/fetchUtils'



export default function Login() {
  const history = useHistory()
  const location = useLocation()
  const authForLogin = useAuth()
  const { formInState, handleFormToBeChange } = useForm({ email: '', password: ''})
  const { from } = location.state || { from: { pathname: '/' } };





  async function handleLogin(e) {
    try {
      e.preventDefault()
      // authForLogin.login(formInState.email, formInState.password)
      const newUser = await signInUser(formInState.email, formInState.password)
      await authForLogin.setUser(newUser)
      console.log('user :>> ', authForLogin.user);
      history.replace(from)


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
