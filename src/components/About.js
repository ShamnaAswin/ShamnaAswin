import React from 'react';
import "../components/About.css";
import  shamna from "../images/shamna.jpg";

const About = () => {
  return (
    <section className='slider-area position-relative'>
      <section className='about-area section-bg section-padding'>
        <div className='container_6'>
          
              <div className='img_div'>
                <img src={shamna} alt="" />
              </div>
            
      
        <div className='about_caption'>
        
          <h2>About Me</h2>
          <h3>Developer & Designer</h3><br/>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>Maecenas felis felis, vulputate sit amet mauris et, semper<br/>
          aliquam ligula. Integer efficitur tellus metus, sed feugiat leo<br/>
          posuere ac. Morbi vitae tincidunt malesuada massa.</p><p>
          Maecenas felis felis, vulputate sit amet mauris et, semper<br/> aliquam ligula. Integer efficitur tellus metus, sed feugiat leo<br/>
           posuere ac. Morbi vitae tincidunt mi, et malesuada massa.
           

           </p>
          <a href='#' className='form-button mt-20'>
            
            Learn More
      
      
      
          </a>

        </div>
      </div>

      </section>
    </section>
  )
}

export default About