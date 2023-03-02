import React from 'react';
import './Passion.css';
import Data from '../../Data/Data'
import PassionItem from '../PassionItem/PassionItem';



const Passion = () => {
   
      
   
    const passionData = Data;
    
    return (
        <div id='Passion' style={{minHeight:'100vh', background:'#343a40'}}>
            <div className='about-me-title'>
                <h1>Passion</h1>
                <p>What I Do ?</p>
                
            </div>
            <div className='item-box'>
            {
                passionData.map(ps => <PassionItem ps={ps}></PassionItem>)
            }
                
            </div>
        </div>
    );
};

export default Passion;