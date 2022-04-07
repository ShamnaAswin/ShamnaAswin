import React from 'react';
import "../components/Topstories.css";
import react1 from "../images/react1.jpg";
import react2 from "../images/react2.jpg";
import react3 from "../images/react3.jpg";

const Topstories = () => {
  return (
    <section className='class-offer-area section-padding 
     border-bottom'>
         <div className='container-fluid'>
         <div className='row10'>
             <div className='col-xl-12'>
                <div className='section-title d-flex justify-content-between align-items-center'>
                    <h1>Top Stories</h1>
                    <a href='#' className='form-button mb-20'>
                        
                        More Stories
                    </a>
                </div>
             </div>
             </div>  
        <div className='stories'>
            <div className='stories_div'>
                <div>
                    <img src={react1} alt=""/>
                </div>
                <div>
              <p className='para1'>  Linguistics alumna says
             recognizing<br/></p> <p className='para2'>Indigenous Languages Day is crucial to our<br/></p>
             <p className='para3'> histories</p>
                </div>
            </div>
            <div className='stories_div'>
                <div>
                    <img src={react2} alt=""/>
                </div>
                <div>
                <p className='para1'> Linguistics alumna says
             recognizing<br/></p> <p className='para2'> Indigenous Languages Day is crucial to our<br/></p>
             <p className='para3'>histories</p>
                </div>
            </div>
            <div className='stories_div'>
                <div>
                    <img src={react3} alt=""/>
                </div>
                <div>
                <p className='para1'> Linguistics alumna says
             recognizing<br/></p> <p className='para2'> Indigenous Languages Day is crucial to our<br/></p> 
             <p className='para3'>histories</p>
                </div>
            </div>

        </div>
         </div>

    </section>
  )
}

export default Topstories