import React from 'react';
import Mail from '../assets/Mail.png';
import Linkedin from '../assets/linkedin.svg'

export default function Buttons() {
    return (
        <div className='button-div'>
            <button className='email-button'> <img src={Mail} /> Email</button>
            <button className='linkedin-button'> <img src={Linkedin} /> Linkedin</button>
        </div>
    );
}