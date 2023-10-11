import React from 'react'
import "./footer.css"
import Logo from "./logo.png"


const Footer = () => {
    return (
        <div className='foot-con'>
            <div className='foot-sub-con'>
                <div className='foot-sub-box-con'>
                    <div className='foot-box'>

                        <button className='foot-btn'>Contact us</button>
                        {/* <h3>
                            Menu
                        </h3>
                        <p>About Us</p>
                        <p>Courses</p>
                        <p>Labs</p>
                        <p>Contact</p> */}
                        

                    </div>
                    <div className='foot-box'>
                        <h3>
                            Services
                        </h3>
                        <p>Privacy Policy</p>
                        <p>Terms of use</p>
                        <p>Policy</p>
                  
                        

                    </div>
                    <div className='foot-box' id='foot-right'>
                        {/* <img src='./Logo.png'></img> */}
                        <img src={Logo} className='foot-logo' alt="Logo" />
                        <p className='foot-logo-txt'>Notion</p>
          
                     
                        

                    </div>
                    

                </div>
            </div>
        </div>
    )
}

export default Footer