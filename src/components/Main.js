import React from 'react';
import './Main.css';



function Main() {

  return (
    <div className='sections'>

      {/* Ground-Truth Section Start */}

      <section id="Ground-Truth-Data">
        <div className="container">

          <div className="row">

            <div className="col-lg-6 col-md-6 col-sm-12">
              <h1 className="section_title_text" style={{backgroundImage: 'url(images/background.png)'}}> GROUND-TRUTH DATA EVERYONE TRUSTS </h1>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="section_title_description" >
              We have combined the best-of-breed technology platforms with an eye towards relieving you of administrative burden. Matterport 3D scans augmented by TrueSketch PLUS are used to generate consistent Xactimate sheets that are delivered in accord with Actionable Insights compliance rule sets. Each mpartial is produced with full transparency, unprecedented forensic photography, and infallible geospatial data that collectively result in rapid approvals.
              </div>
            </div>

          </div>

          <div className="try_now_btn">
          <br/>
          <br/>
            <button className="btn"> Try Today </button>
          </div>

          
        </div>
      </section>

      {/* Ground-Truth Section End */}
      








      {/* How it Works Section Start */}

      <section id="How-It-Works">
        <div className="container">

          <div className="row">
            <div className="col">
              <h1 className="section_title_text" style={{backgroundImage: 'url(images/background.png)'}}> How It Works </h1>
            </div>
          </div>

          <div className="data_points">
            <div className="row no-gutters">

              <div className="col-md-4 col-sm-12">
                <div className="data_point_item row no-gutters">
                  <div className="data_number data_number_1 col-md-4 col-sm-12" style={{backgroundImage: 'url(images/data_points.png)'}}>
                    1
                  </div>
                  <div className="data_text col-md-8 col-sm-12 ">
                    <a href="/">
                      Perform pre-mitigation and post-mitigation scans with a Matterport Pro Series camera.
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-sm-12">
                <div className="data_point_item row no-gutters">
                  <div className="data_number data_number_2 col-md-4 col-sm-12" style={{backgroundImage: 'url(images/data_points.png)'}}>
                    2
                  </div>
                  <div className="data_text col-md-8 col-sm-12 ">
                    <span> Submit the Matterport scans via the mpartial portal and then go back to what you do great. </span>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-sm-12">
                <div className="data_point_item row no-gutters">
                  <div className="data_number data_number_3 col-md-4 col-sm-12" style={{backgroundImage: 'url(images/data_points.png)'}}>
                    3
                  </div>
                  <div className="data_text col-md-8 col-sm-12 ">
                    <span> Receive a well-formatted, fully documented Xactimate PDF, ESX & Matterport TrueSketch PLUS SKX. </span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div className="try_now_btn">
            <button className="btn"> Get Started </button>
          </div>

        </div>
      </section>

      {/* How it Works Section End */}




      
    </div>
  );
}

export default Main;
