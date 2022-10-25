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
        <h1>Bienvenido {user.nickname} a la página principal de Prode Bogado</h1>
        <h2>name: {user.name}</h2>
        <p>{user.email}</p>
        <JSONpretty data={JSON.stringify(user)}/>
    </div>
  )
}

export default Profile