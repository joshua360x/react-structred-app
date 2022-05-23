import React from 'react'
import { Route } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'

export default function PrivateRoute({children, ...rest}) {
  let authFromDB = useAuth();
  return (
    <Route {...rest}
    render={({ location }) =>
    authFromDB.user ? (
        children
      ) : ( <Redirect to={{pathname: '/login', state: { from: location }, }} /> ) } />
  )
}
