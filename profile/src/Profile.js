import React from 'react'
import './Profile.css'

function Profile({title,handler,src}) {
  return (
    <div>
    <div >Profile</div>
    <img className = "avatar" src = {src} alt='logo'/>
    <h3>Title {title} </h3>
    <p> handle {handler}</p>
  </div>
  )
}

export default Profile