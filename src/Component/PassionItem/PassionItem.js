import React from 'react';

const PassionItem = ({ps}) => {

    const {title, paragraph, icon} = ps;
    
   
  
    return (
        <div className='passion-item' style={{color:'red'}}>
                <div className='passion-item-icon'>
                    {icon}
                  
                </div>
                <h3>{title}</h3>
                <p>{paragraph}</p>
            </div>
    );
};

export default PassionItem;