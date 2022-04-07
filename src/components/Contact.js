import React from 'react';
import "../components/Contact.css";
import SendIcon from '@mui/icons-material/Send';
import send_icon from "../images/send_icon.png";

const Contact = () => {
  return (
    <div className='footer-wrapper bg-gray-700'>
        <div className='footer-area footer-padding'>
        <div className='container_4'>
           <div className='row_5'>
            <div className='col_1'>
       
                <div className='single_footer_caption '>
                    <div className='footer_title'>
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href='#'>Work</a></li><br/>
                            <li><a href='#'>Services</a></li><br/>
                            <li><a href='#'>Products</a></li><br/>
                            <li><a href='#'>Tips & Tricks</a><br/>
                            </li>
                        </ul>
                    </div>

                </div>

            </div>

            {/* <div className='col_2'>
                <div className='single_footer_caption'>
                    <div className='footer_title'>
                        <h4>Programs</h4>
                        <ul>
                            <li><a href='#'> Air freight</a></li><br/>
                            <li><a href='#'>Ocean freight</a></li><br/>
                            <li><a href='#'>Large projects
                            </a></li>
                        </ul>
                    </div>
                </div>

            </div> */}
            <div className='col-xl-2 col-lg-2 col-md-4 col-sm-6'>
                <div className='single-footer-caption mb-50'>
                    <div className='footer_title'>
                        <h4>Resources</h4>
                        <ul>
                            <li><a href='#'>FAQ</a></li><br/>
                            <li><a href='#'>Submit Ticket</a></li><br/>
                            <li><a href='#'>Contact me </a></li><br/>
                        </ul>
                    </div>
                </div>

            </div>

            <div className='col-xl-2 col-lg-2 col-md-4 col-sm-6'>
                <div className='single-footer-caption mb-50'>
                    <div className='footer_title'>
                        <h4 className='queries'>Any Queries..?</h4>
                        
                           <form className='send'>
                               
                            <input className='email_field' type="email"  
                            placeholder='Enter your email'/>
                            
                           
                            
                                   {/* <button  type='submit' name='submit' className='email_icon'></button> */}
                                    
                                   {/* <img  src={send_icon} alt=""/> */}
                           <SendIcon className='send_icon w3-large'/>
                                    
                           </form>
                        

                    </div>
                </div>

            </div>




           </div>
        </div>
        </div>

    </div>
  )
}

export default Contact