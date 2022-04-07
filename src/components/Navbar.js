import React from 'react';
import { Link } from 'react-router-dom';
import "../components/Navbar.css";
import sha1 from "../images/sha1.jpg";
 import FacebookIcon from '@mui/icons-material/Facebook';
 import TwitterIcon from '@mui/icons-material/Twitter';
 import LinkedInIcon from '@mui/icons-material/LinkedIn';
 import YouTubeIcon from '@mui/icons-material/YouTube';
 import EmailIcon from '@mui/icons-material/Email';
 
const Navbar = () => {
  return (
    <div className='header-bottom header-sticky'>
        <div className='container_2'>
            <div className='d-flex align-items-center justify-content-between
            flex-wrap position-relative'> 
            <div className='header-right-btn d-flex f-right align-tems-center'>
                <div className='left-side d-flex align-items-center'>
                    <div className='logo'>
                    <img src={sha1} alt="" />
                    </div>
                    <div className='main-menu d-none d-lg-block'>
                        <nav>
                            <ul id='navigation'>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to= "/about">About</Link></li>
                                <li><Link to="programs">Programs</Link></li>
                                <li><Link to="blog">Blog</Link></li>
                                <li><Link to="contact">Contact</Link></li>
                                
                            </ul>
                        </nav>

                    </div>
                
                </div>
                <div className='call_us'>
                    <a href='#' >
                        Call Us: <span>9400354746</span>
                    </a>
                </div>
            <div className='icons'>
              <FacebookIcon className='facebook'/>  
              
              <TwitterIcon className='twitter'/>
              <LinkedInIcon className='linkedin'/>
              <YouTubeIcon className='youtube'/>
              <EmailIcon className='email'/>
            </div>

            </div>
            </div>
        </div>
    </div>
    
  )
}

export default Navbar