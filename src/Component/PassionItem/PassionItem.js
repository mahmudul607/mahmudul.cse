
import React from 'react';
import {  FaSketch } from 'react-icons/fa';
import './PassionItem.css'

const PassionItem = ({ ps }) => {

    const { title, paragraph, icon } = ps;



    return (
        <div className='passion-item'>
            <div className='passion-item-icon'>
                <div className='icon-area'>
                <FaSketch className='icon' />
                </div>
            </div>
            <div className='item-text'>
                <h3>{title}</h3>
                <p>{paragraph}</p>
            </div>

        </div>
    );
};

export default PassionItem;