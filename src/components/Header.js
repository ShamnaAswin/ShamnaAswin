import React from 'react'
import "../components/Header.css";

const Header = () => {
  return (
    <div className='header-area'>
      <div className='main-header'>
        <div className='header-top'>
          <div className='container9'>
            <div className='row'>
              <div className='col-xl-12'>
                <div className='d-flex justify-content-center flex-wrap align-items-center'>
                  <div className='header-info-left'>
                    <ul>
                      <li>
                        <span>ENDS TOMORROW:</span>
                        <p>"Join Teachable for $4,800 in bonus content"</p>
                      </li>
                    </ul>
                  </div>
                  <div className='header-info-right inline-flex align-items-center'>
                    <div className='cd-timer' id='countdown'>
                      <div className='cd-item'>
                        <span>30</span>
                        <p>Days</p>
                      </div>
                      <div className='cd-item'>
                        <span>12</span>
                        <p>Hrs</p>
                      </div>
                      <div className='cd-item'>
                        <span>18</span>
                        <p>Mins</p>
                      </div>
                      <div className='cd-item'>
                        <span>56</span>
                        <p>Secs</p>
                      </div>

                    </div>
                    <div className='learn_more'>
                    <a href='#' className="form-button">Learn More</a>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header