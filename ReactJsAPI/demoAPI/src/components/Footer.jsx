import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='footer'>
      <div className="border-bottom"></div>
  
      <div className='container'>
        <div className='sub-footer'>
  
          <div className='first-div'><span>Funiro.</span>
            <p className='gr-cl'>400 University Drive Suite 200 Coral Gables, <br/>
              FL 33134 USA</p>
          </div>
    
          <div>
            <ul className='footer-ul'>
              <li className='mg0-9 gr-cl'>Links </li>
              <li>Home</li>
              <li>Shop</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
    
          <div>
            <ul className='footer-ul'>
              <li className='mg0-9 gr-cl'>Help</li>
              <li>Payment Options</li>
              <li>Returns</li>
              <li>Privacy Policies</li>
            </ul>
          </div>
    
          <div>
            <ul >
              <li className='footer-lastest gr-cl'>Newsletter</li>
              <li><input type="text" placeholder='Enter Your Email Address'  className='footer-input'/> <button className='footer-button'>SUBSCRIBE</button></li>
            </ul>
          </div>
        </div>
  
        <div className="border-bottom"></div>
        <p className='last-last-p'>2023 furino. All rights reverved</p>
  
      </div>
    </div>
  )
}

export default Footer
