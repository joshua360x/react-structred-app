import React from 'react'
import { useAuth } from '../hooks/useAuth'
import { useForm } from '../hooks/useForm'

export default function Post() {
  const authForLogin = useAuth()

  const { formInState, handleFormToBeChange } = useForm({ post: '', email: authForLogin.user.email})

  function handlePost(e) {
    e.preventDefault()
  }

  return (
    <section>
      <h4>Make A Post</h4>
      <form onSubmit={handlePost}>
        <label htmlFor="post">
        Post Content
        <input type="text" name='post' id='post' placeholder='Enter body of Post' value={formInState.post} onChange={handleFormToBeChange} />
        </label>
        <button type='submit'>Add Post</button>
      </form>
    </section>
  )
}
