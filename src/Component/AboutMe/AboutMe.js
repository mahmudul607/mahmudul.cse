import React from 'react';
import './AboutMe.css'

const AboutMe = () => {
    return (
        <div id='About' style={{ minHeight: '100vh',height:'100%', padding: '20px' }}>
            <div className='about-me-title'>
                <h1>About me</h1>
                <p>Know Me More</p>
            </div>
            <div className='about-details'>
                <div className='about-me-text col-lg-7 col-xl-8'>
                    <h4>I'm <span>Mahmhudul Hasan</span>, a web developer</h4>
                    <p>I help you build brand for your business at an affordable price. Thousands of clients have procured exceptional results while working with our dedicated team. when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        <br />

                        Delivering work within time and budget which meets client’s requirements is our moto. Lorem Ipsum has been the industry's standard dummy text ever when an unknown printer took a galley.</p>

                </div>
                <div className='contact-details col-lg-5 col-xl-4'>
                    <div className='items'>
                        <ul>
                            <li>Name: Mahmudul Hasan</li>
                            <li>Email: mahmudul.cse.eng@gmail.com</li>
                            <li>Age: 22</li>
                            <li>From: Dhaka, Bangladesh</li>
                        </ul>

                    </div>
                    <div className='cv-btn btn'>
                        <span><a href="">Download CV</a></span>

                    </div>
                    

                </div>

            </div>
            <div className='work-details'>
                        <div className='col-md-3 box-item'>
                            <div className='box'>
                                <h4>1+</h4>
                                <p>Years Experience</p>
                            </div>
                        </div>
                        <div className='col-md-3 box-item'>
                            <div className='box'>
                                <h4>50+</h4>
                                <p>Happy Client’s</p>
                            </div>
                        </div>
                        <div className='col-md-3 box-item'>
                            <div className='box'>
                                <h4>200+</h4>
                                <p>Projects Done</p>
                            </div>
                        </div>
                        <div className='col-md-3 box-item'>
                            <div className='box'>
                                <h4>10</h4>
                                <p>Get Awards</p>
                            </div>
                        </div>


                    </div>
        </div>
    );
};

export default AboutMe;