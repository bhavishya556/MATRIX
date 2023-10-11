import React from 'react'
import "./join.css"
import { Icons } from 'react-toastify'
import Footer from './Footer'

const Join = () => {
    return (<div className='join'>


        <div className='join-dot'>
            
            <div className='join-line'></div>
        </div>



        <div className='join-con'>
            <div className='join-head'>
                <h2 className='join-main-head'>Join our Coding family</h2>
                <p className='join-sub-head'>If you would like to keep up on the latest posts and courses,
                    come by and connect with us on the following links.
                </p>

                <div className='join-icon-con'>
                    <img className='join-icon' src='https://www.thecodehelp.in/_next/image?url=https%3A%2F%2Fcodehelp.s3.ap-south-1.amazonaws.com%2FYoutube_Oct_Denoiser_Beauty_001_copy_6a63d8ef65.png&w=3840&q=75'></img>
                    <img className='join-icon' src='https://www.thecodehelp.in/_next/image?url=https%3A%2F%2Fcodehelp.s3.ap-south-1.amazonaws.com%2FLinked_In_Oct_Denoiser_Beauty_001_copy_b6e0b974bb.png&w=3840&q=75'></img>
                    <img className='join-icon' src='https://www.thecodehelp.in/_next/image?url=https%3A%2F%2Fcodehelp.s3.ap-south-1.amazonaws.com%2FDiscord_Oct_Denoiser_Beauty_001_copy_a253ed4d28.png&w=3840&q=75'></img>
                    <img className='join-icon' src='https://www.thecodehelp.in/_next/image?url=https%3A%2F%2Fcodehelp.s3.ap-south-1.amazonaws.com%2FTelegram_Oct_Denoiser_Beauty_002_copy_fa9aeac119.png&w=3840&q=75'></img>
                    

                </div>
                {/* <Footer/> */}
            </div>
        </div>
    </div>
    )
}

export default Join