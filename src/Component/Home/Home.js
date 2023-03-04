import React from 'react';
import './Home.css';
import Typewriter from 'typewriter-effect';
import {FaAngleDown} from  'react-icons/fa';
const Home = () => {
    return (
        <section className='home-page' id='Home' style={{minHeight:'100vh'}}>
            <div className='home-text-area'>
                <h1>Welcome</h1>
                <Typewriter 
            options={{
                strings: [
                    "I'm Mahmudul Hasan", 
                    "I'm a Web Developer",
                    "I'm a Web Designer",
                ],
                autoStart: true,
                loop: true,
            }}
                />   
                <h6>based in City of Capital, Dhaka.</h6>
                <div className='btn'>
                <p>Hire Me</p>
                </div>
                <div className='animated-icon'>
                    <span>
                        <i><FaAngleDown></FaAngleDown></i>
                    </span>
                    
                </div>
                
            </div>
            
        </section>
    );
};

export default Home;