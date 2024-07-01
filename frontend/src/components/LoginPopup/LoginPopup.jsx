import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

const LoginPopup = ({setShowLogin}) => {

    const [currState, setCurrState] = useState("Sign Up")

  return (
    <div className='login-popup'>
        <form  className="login-popup-container">
            <div className="login-popup-title">
                <h2>{currState}</h2>
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="login-popups-inputs">
                {currState==='Login'?<></>:<input type="text" placeholder='Your name' required/>}
                
                <input type="email" placeholder='Your email' required/>
                <input type="password" placeholder='Your password' required/>
            </div>
            <button>{currState==='Sign Up'?'Create Account':'Login'}</button>
            <div className="login-popup-condition">
                <input type="checkbox"  required/>
                <p>I am accepting Pricancy Policy</p>
            </div>
            {currState==='Login'?<p onClick={() => setCurrState("Sign Up")}  >Create a new account? <span>Click here</span></p>:
            <p onClick={() => setCurrState("Login")} >Already have an account? <span>Login Here</span></p>}
           
            
        </form>
    </div>
  )
}

export default LoginPopup