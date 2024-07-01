import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id="footer">
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quaerat porro itaque placeat, expedita quod nulla sit quam iusto neque.</p>
                <div className="footer-social-icons">
                  <img src={assets.facebook_icon} alt="" />
                  <img src={assets.linkedin_icon} alt="" />
                  <img src={assets.twitter_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
              <h2>Company</h2>
              <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privancy Policy</li>
              </ul>
            </div>
            <div className="footer-content-right">
                <h2>Get In Touch</h2>
                <ul>
                  <li>cafe@gmail.com</li>
                  <li>(+995)583-12-93</li>
                </ul>
            </div>

        </div>
        <hr />
        <p className="footer-copyright">
          All rights reserved 
        </p>
    </div>
  )
}

export default Footer