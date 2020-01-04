import React from 'react'
import { isAuthenticated } from '../utils/auth'

class Profile extends React.Component {
  render(){
    if(isAuthenticated()){
      return (
        <h1>Profile</h1>
      )
    }
    else{
      return (
        <h1>You are not logged in</h1>
      )
    }
  }
}

export default Profile