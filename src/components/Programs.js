import React from 'react';
import "../components/Programs.css";
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";

const Programs = () => {
  return (
    <section className='container_3'>
        <div className='row1'>
      <div className='section-title text-center' >
        <h2>MY RECENT WORKS ARE</h2>
        <p>Maecenas felis felis, vulputate sit amet mauris et, semper aliquam ligula. Integer efficitur tellus<br/> metus, sed feugiat leo posuere ac. Morbi vitae tincidunt mi, et malesuada massa.</p>
        
        </div>
        </div>
        <div className='row_2'>
        {/* <div className='col-lg-6 col-md-6'>  */}
          {/* <div className='single_blog'> */}
            <div className='image_box'>
            <div className='blog_imgs'>
              <img src={image1} alt="" width="600px" height="400px" /> 
            </div>
            <div className='blog_caption'>
              <p>
              Integer efficitur tellus metus, sed feugiat leo posuere ac.<br/> Morbi vitae tincidunt mi, et malesuada massa. Sed blandit<br/> placerat elit sit amet condimentum.
              </p>
              <div className='see_more form-button mt-20'>
                See More
              </div>


            </div>
          </div>
          {/* </div> */}
        {/* </div> */}
     {/* <div className='col-lg-6 col-md-6'>  */}
      <div className="image_box1">
        <div className='blog_img'>
          <img src={image2} alt="" width="600px" height="400px"/>
        </div>
        <div className='blog_caption1'>
              <p>
              Integer efficitur tellus metus, sed feugiat leo posuere ac.<br/> Morbi vitae tincidunt mi, et malesuada massa. Sed blandit<br/> placerat elit sit amet condimentum.
              </p>
              <div className='see_more form-button mt-20'>
                See More
              </div>

      </div>
            </div>
      </div>
    

        {/* </div> */}
        </section>            
  )
}

export default Programs