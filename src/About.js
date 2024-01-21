import React from 'react';
import { Helmet } from 'react-helmet';
import AboutFav from './Favicon/aboutFav.png';
import AboutImage from './images/all-services.png';
import Photos from './Photos';

const About = () => {
  return (
    <>
      <Helmet>
        <link rel="icon" type="image/png" href={AboutFav} sizes="16x16" />
        {/* Other meta tags or head elements can be added here */}
      </Helmet>
      <div className="container mt-5 ml-5">
        <div className="row">
          <div className="col-md-6">
            <h2>About Page</h2>
            <p>
              Welcome to our About page. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Nulla facilisi. Vivamus vel risus ac nisi dignissim commodo. Donec sit amet justo
              vitae justo interdum fermentum. Nulla facilisi. Vestibulum auctor, lacus at efficitur
              tincidunt, justo justo pretium risus, ut interdum sem lacus in libero.
            </p>
          </div>
          <div className="col-md-6">
            {/* You can add an image or other content in the right column */}
            <img
              src={AboutImage} // Replace with your image URL
              alt="About Us"
              className="img-fluid"
              style={{
                height: '250px'
              }}
            />
          </div>
        </div>
        <Photos/>
      </div>
    </>
  );
};

export default About;
