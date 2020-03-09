import React, {useState} from 'react';
import './menu.item.css';

const MenuItem = ({ title, imageUrl, url }) => (
        <div className='menu-item'  style={{backgroundImage: `url(${imageUrl})`}}>
        <div className='content'>
            <h1 className='title'>{ title }</h1>
            <a href={url}><span className='subtitle'>See now</span></a>                
        </div>
    </div>  
)
export default MenuItem;
