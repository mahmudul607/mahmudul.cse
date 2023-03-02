
import React from 'react';
import { FaServicestack } from 'react-icons/fa';
import './PassionItem.css'

const PassionItem = ({ ps }) => {

    const { title, paragraph, icon } = ps;



    return (
        <div className='passion-item'>
            <div className='passion-item-icon'>
                <FaServicestack className='icon' />
            </div>
            <div className='item-text'>
                <h3>{title}</h3>
                <p>{paragraph}</p>
            </div>

        </div>
    );
};

export default PassionItem;