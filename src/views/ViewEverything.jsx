import React from 'react'
import { Link } from 'react-router-dom'
import { useData } from '../context/InteractionContext'

export default function ViewEverything() {
  const { entries } = useData()
  return (
    <div>
      <>
        {entries.map(({id, post, email}) => (
          <Link to={`/all/:${id}`} key={id}>
            <ul>
          <li>Post: {post}</li>
          <li>User: {email}</li>
          <li>Post ID: {id}</li>
            </ul>
          </Link>
        ))}
      </>
    </div>
  )
}
