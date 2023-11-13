import React from 'react' 
import './LoginSignup.css'
import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'

const LoginSignup = () => {
  return (
    <div className='container'>
      <div className='header'>
        <div className='text'>Sign Up</div>
        <div className='underline'></div>
      </div>
      <div className="inputs"> 
      <div className="input">
        <img src={user_icon} alt="" className="src" />
        <input type="person" />
      </div>
      <div className="input">
        <img src={email_icon} alt="" className="src" />
        <input type="email" />
      </div>
      <div className="input">
        <img src={password_icon} alt="" className="src"/>
        <input type="password" />
      </div>
     </div>
     <div className='forget-password'>Lost Password? <span>Click Here!</span></div>
     <div className='summit-container'>
      <div className='summit'>Sign Up</div>
      <div className='summit'>Login</div>
     </div>
    </div>
  );
};