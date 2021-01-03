import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Main.css';
import Button from 'react-bootstrap/Button';



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

          <div>
           <img src="/images/pre.jpg" alt="" width="100%" height="100%"/>
          </div>

          <div className="try_now_btn">
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












     {/* Fee Structure Section Start */}

     <section id="Fee-Structure">
        <div className="container">

          <div className="row">
            <div className="col">
              <h1 className="section_title_text" style={{backgroundImage: 'url(images/background.png)'}}> Waterfall Fee Structure </h1>
              

              <p className="section_title_description css-ulgnwk-WaterFall">Drag the slider around based on what you think it will cost to repair the property. <br />
                Move forward based on the estimated fee structure below.
              </p>
              <div className="partial_fee_btn">
                    <i className="info_popup" data-toggle="popover" data-placement="top" data-content="Fee Structure Example: An estimate grand total of $100k will result in a fee of $7,360. The $750 deposit will be collected upon submission and applied toward the overarching fee."> i </i>
                    <div id="partialFee">
                        <label> 750% </label>
                    </div>
                    <span> mpartial Fee </span>
                </div>

                <p className="waterfall_info_text"> [$750 Minimum] </p>



            </div>
          </div>
        </div>
      </section>

      {/* Fee Structure Section End */}

    







      {/* Example Deliverables Section Start */}

      <section id="Example-Deliverables">
        <div className="container">

          <div className="row">
            <div className="col">
              <h1 className="section_title_text" style={{backgroundImage: 'url(images/background.png)'}}> Example Deliverables </h1>
            </div>
          </div>

          <h3 className="widget-title mt-1"> Pre-Mitigation Scan + Post-Mitigation Scan = ESX & SKX (TrueSketch PLUS) </h3>

          <div className="deliver_widget_container">
            <div className="row">

              <div className="col-lg-6 col-md-12 col-sm-12 Example_1">
                <iframe src="https://my.matterport.com/show/?m=e5Wxtu8Arbx" > </iframe>
              </div>

              <div className="col-lg-6 col-md-12 col-sm-12">
                <iframe src="https://my.matterport.com/show/?m=DhqzGgT7M1E" > </iframe>
              </div>

            </div>
          </div>



        <div section id="carosel">
          <div class="row">
            <div class="col-lg-4">

            </div>
            <div class="col-lg-4">
              <h3 className="heading5">Immaculate. Impartial. [ESX]</h3>
            </div>
            <div class="col-lg-4">

            </div>          
          </div>

          <br />
          <br />

          <div class="row">
        
            <div class="col-lg-4">
              
            </div>
        
            <div class="col-lg-4">
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="/images/img1.jpg"
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="/images/img2.jpg"
                    alt="Third slide"
                  />

                  <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="/images/img3.jpg"
                    alt="Third slide"
                  />

                  <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>

            <div class="col-lg-4">
              
            </div>

          </div>
        </div>
         


        


        <div className="row">
          <div className="col">

          </div>
        </div>



        </div>
      </section>

      {/* Example Deliverables Section End */}




      {/* Contact US Section Start */}

      <section id="Contact-US">
        <div className="container">

          <div className="row">
            <div className="col">
              <h1 className="section_title_text" style={{backgroundImage: 'url(images/background.png)'}}> Contact Us </h1>
            </div>
          </div>

          <div className="form-holder">
            <form>

              <div className="row">

                <div className="col-md-6 col-sm-12 ">

                <div className="form-group nogroup">
                    <input type="text" name="Name" required id="inputField1" className="input-area"/>
                    <label for="inputField1" className="floating_label"> Your Name </label>
                  </div>

                  <div className="form-group nogroup">
                    <input type="text" name="Email" required id="inputField2" className="input-area"/>
                    <label for="inputField2" className="floating_label"> Email </label>
                  </div>

                  <div className="form-group nogroup">
                    <input type="text" name="Cell" required id="inputField3" className="input-area"  />
                    <label for="inputField3" className="floating_label"> Cell </label>
                  </div>

                </div>

                <div className="col-md-6 col-sm-12 ">

                  <div className="form-group nogroup">
                    <textarea name="Message" required id="text_area" className="input-area"  />
                    <label for="text_area" className="floating_label">  Write your message...  </label>
                  </div>

                </div>

              </div>

              <div className="try_now_btn">
                <button type="submit" className="submit_btn"> Submit </button>
              </div>

            </form>
          </div>

        </div>
      </section>

      {/* Contact US Section End */}



      
    </div>
  );
}

export default Main;
