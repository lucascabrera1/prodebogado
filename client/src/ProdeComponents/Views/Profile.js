import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import JSONpretty from 'react-json-pretty'
import 'react-json-pretty/themes/monikai.css'

const Profile = () => {
  const {user, isAuthenticated} = useAuth0();
  return (
    isAuthenticated && 
    <div>
        
        <img src={user.picture} alt={user.email}/>
        <h1>Bienvenido {user.name} a Prode Bogado</h1>
        <JSONpretty data={JSON.stringify(user)}/>
    </div>
  )
}

export default Profile