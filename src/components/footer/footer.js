import React from 'react';
import { Link } from "react-router-dom";
import './footer.css'
import Icon from "../../elements/icon";

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='container  flex space-between  paddingX_10px'>
                <div className='links flex'>
                    <Link to='/' >Home</Link>
                    <Link to='/' >About</Link>
                    <Link to='/' >Contacts</Link>
                    <Link to='/' >Privacy and policy</Link>
                    <Link to='/' >Terms and condition</Link>
                </div>
                <div className='icons'>
                    <Icon icon='fa-twitter-square'/>
                    <Icon icon='fa-facebook-square'/>
                    <Icon icon='fa-youtube-square'/>
                    <Icon icon='fa-instagram-square'/>
                </div>
            </div>
        </div>
    );
};

export default Footer;