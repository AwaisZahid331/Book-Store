import React from 'react'
import './Footer.css'

import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TelegramIcon from '@material-ui/icons/Telegram';
import InstagramIcon from '@material-ui/icons/Instagram';

function Footer() {
    return (
        <div className='footer'>
            <div>
                <div className='footer-data'>
                    <div className="contact-details">
                        <h1>Contact Us</h1>
                        <p>Central Library</p>
                        <p>National University of Science and Technology</p>
                        <p>Islamabad, 44000</p>
                        <p>Pakistan</p>
                        <p><b>Email:</b> library@nust.edu.pk</p>
                        <p><b>Phone:</b> +92 51 90851234</p>
                    </div>
                    <div className='useful-links'>
                        <h1>Related Links</h1>
                        <a href='https://nust.edu.pk/' target="_blank" rel="noopener noreferrer">University Website</a>
                        <a href='https://library.nust.edu.pk/' target="_blank" rel="noopener noreferrer">Library Catalog</a>
                        <a href='https://digital.nust.edu.pk/' target="_blank" rel="noopener noreferrer">Digital Library</a>
                        <a href='https://research.nust.edu.pk/' target="_blank" rel="noopener noreferrer">Research Portal</a>
                    </div>
                    <div className='librarian-details'>
                        <h1>Librarian</h1>
                        <p>Dr. ABC...</p>
                        <p>PhD in Library and Information Science</p>
                        <p><b>Contact:</b> +92 00 00001235</p>
                    </div>
                </div>
                <div className="contact-social">
                    <a href='https://twitter.com/nust' target="_blank" rel="noopener noreferrer" className='social-icon'>
                        <TwitterIcon style={{ fontSize: 40, color: "rgb(255,83,75)" }} /> <br />
                    </a>
                    <a href='https://linkedin.com/school/nust/' target="_blank" rel="noopener noreferrer" className='social-icon'>
                        <LinkedInIcon style={{ fontSize: 40, color: "rgb(255,83,75)" }} />
                    </a>
                    <a href='https://t.me/nust_official' target="_blank" rel="noopener noreferrer" className='social-icon'>
                        <TelegramIcon style={{ fontSize: 40, color: "rgb(255,83,75)" }} />
                    </a>
                    <a href='https://instagram.com/awaiszahid13' target="_blank" rel="noopener noreferrer" className='social-icon'>
                        <InstagramIcon style={{ fontSize: 40, color: "rgb(255,83,75)" }} />
                    </a>
                </div>
            </div>
            <div className='copyright-details'>
                <p className='footer-copyright'>
                    &#169; 2024 All Rights Reserved<br />
                    <span>Designed by Awais Zahid</span>
                </p>
            </div>
        </div>
    )
}

export default Footer
