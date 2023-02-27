import React from 'react';
import './Home.css';
import Typewriter from 'typewriter-effect';

const Home = () => {
    return (
        <div className='home-page' id='Home' style={{height:'100%',  minHeight:'100vh'}}>
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
                
            </div>
        </div>
    );
};

export default Home;