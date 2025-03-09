import React from 'react'
import './LoginSignup.css'
import user_icon from '../Assets/user_icon.jpeg'
import email_icon from '../Assets/email_icon.jpeg'
import password_icon from '../Assets/password_icon.jpeg'

const LoginSignup = () => {
  return (
    <div className ='container'>
      <div className="header">
        <div className="text">Sign Up</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
      <div className="input"></div>
      <img src="" alt="" />
      <input type="text" />
    </div>
    <div className="input">
    <img src="" alt="" />
    <input type="email" />
  </div>
  <div className="input">
     <img src="" alt="" />
  <input type="password" />
</div>
</div>
  )
}

export default LoginSignup;















