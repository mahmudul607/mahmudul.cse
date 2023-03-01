import React, { useState } from 'react';
import './Passion.css';
import Data from '../../Data/Data'
import PassionItem from '../PassionItem/PassionItem';
import {FaPalette, FaDesktop, FaPencilRuler, FaPaintBrush, FaChartArea, FaBullhorn } from 'react-icons/fa';

const Passion = () => {
   
    const passionData = Data;
    
    return (
        <div id='Passion' style={{minHeight:'100vh',height:'100%', background:'#343a40'}}>
            <div className='about-me-title'>
                <h1>Passion</h1>
                <p>What I Do ?</p>
                {passionData.length}
                
            </div>
            {
                passionData.map(ps => <PassionItem ps={ps}></PassionItem>)
            }
        </div>
    );
};

export default Passion;