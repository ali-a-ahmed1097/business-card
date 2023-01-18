import React from 'react';
import Twitter from '../assets/twitter.png';
import Facebook from '../assets/facebook.png';
import Insta from '../assets/instagram.png';
import GitHub from '../assets/github.png';

export default function Footer() {
    return (
        <div className='footer-div'>
            <img src={Twitter} />
            <img src={Facebook} />
            <img src={Insta} />
            <img src={GitHub} />
        </div>
    );
}