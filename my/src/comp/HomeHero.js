import React from 'react'
import "./HomeHero.css"
import Laptop from './Laptop'
import Nav from '../comp/Nav'

const HomeHero = () => {
    return (
        <div className='container'>
            
            <div className='home-left'>
                <div className='home-left-heading'>
                    <p>  You explore, we explain.</p>
                    <p>  You make, we mentor.</p>
                    <p>  You play, we pave the way.</p>
                  
               

                </div>
                <button className='glowing-btn'><span className='glowing-txt'>Learn <span className='faulty-letter'>M</span>ore</span></button>

            </div>
            <div className='home-right'>

            <Laptop/>

            





            </div>


        </div>
    )
}

export default HomeHero