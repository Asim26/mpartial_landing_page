import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="row">

            <div className="col-md-6 col-sm-12">
              <p> mpartial, a 4D Schematics Company. Copyright 2020 all rights reserved. </p>
            </div>

            <div className="col-md-6 col-sm-12">
              <ul className="social-links">
                <li>
                  <a href="/" target="_blank">
                    <img src="/images/linkedin.png" alt="linkedin" /> 
                   </a>
                </li>
                <li>
                  <a href="/" target="_blank"> 
                    <img src="/images/instagram.png" alt="instagram" />  
                  </a>
                </li>
                <li>
                  <a href="/" target="_blank"> 
                    <img src="/images/facebook.png" alt="facebook" />  
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Footer;
