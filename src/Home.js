import React from 'react';
import { Helmet } from 'react-helmet';
import AboutFav from './Favicon/aboutFav.png';
import mangif from './images/plus.gif'
import mic from './images/mic.gif'
import graph from './images/graph.gif'
import joinus from './images/joinus.gif'
import colorbar from './images/colorBar.gif'
import youtube from './images/youtube.gif'
import free from './images/free.gif'
import guidline from './images/guidline.gif'
import qutes from './qutes';
import Footer from './Footer';


const Home = () => {
  return (
    <div>
      <Helmet>
        <link rel="icon" type="image/png" href={AboutFav} sizes="16x16" />
      </Helmet>
      {/* home page hero  */}
      <div className="container mt-5">
        <div className="jumbotron">
          <h1 className="display-4">Welcome to Our Website</h1>
          <p className="lead">
            Explore and discover amazing content on our platform. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Nulla facilisi.
          </p>
          <hr className="my-4" />
          <p>
            It uses utility classes for typography and spacing to space content out within the larger
            container.
          </p>
          <a className="btn btn-primary btn-lg" href="/about" role="button">
            Learn more
          </a>
        </div>
              {/* end */}


           {/* Two section  */}
        <div className="row" style={{ marginTop: '6%' }}>
          <div className="col-md-4">
            <img src={joinus} className="img-fluid mx-auto d-block" style={{ width: '50%' }} alt="GIF" />
          </div>
          <div className="col-md-8">
            <div className="d-flex align-items-center justify-content-center">
              <div>
                <p>
                  In this modification, the GIF is directly placed within the first column without the card structure. The img-fluid class ensures that the image is responsive, and mx-auto d-block centers the image horizontally within the column. Adjust the width property as needed for your design.
                </p>
                <p>In this modification, the GIF is directly placed within the first column without the card structure. The img-fluid class ensures that the image is responsive, and mx-auto d-block centers the image horizontally within the column. Adjust the width property as needed for your design.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row" style={{ marginTop: '6%' }}>
          <div className="col-md-8">
            <div className="d-flex align-items-center justify-content-center">
              <div>
              <p>
                  In this modification, the GIF is directly placed within the first column without the card structure. The img-fluid class ensures that the image is responsive, and mx-auto d-block centers the image horizontally within the column. Adjust the width property as needed for your design.
                </p>
                <p>In this modification, the GIF is directly placed within the first column without the card structure. The img-fluid class ensures that the image is responsive, and mx-auto d-block centers the image horizontally within the column. Adjust the width property as needed for your design.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="d-flex align-items-center justify-content-center">
              <div>
                <img src={colorbar} className="img-fluid mx-auto d-block" style={{ width: '50%' }} alt="GIF" />
              </div>
            </div>
          </div>
        </div>
{/* End */}

        {/* Bootstrap Cards */}
        <div className="row" style={{ marginTop: '6%' }}>
          <div className="col-md-4 d-flex align-items-center">
            <div className="card">
              <img src={youtube} className="card-img-top mx-auto" style={{ width: '25%' }} alt="Card GIF" />
              <div className="card-body text-center">
                <h5 className="card-title">Card Title 1</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 d-flex align-items-center">
            <div className="card">
              <img src={free} className="card-img-top mx-auto" style={{ width: '25%' }} alt="Card GIF" />
              <div className="card-body text-center">
                <h5 className="card-title">Card Title 2</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 d-flex align-items-center">
            <div className="card">
              <img src={guidline} className="card-img-top mx-auto" style={{ width: '25%' }} alt="Card GIF" />
              <div className="card-body text-center">
                <h5 className="card-title">Card Title 3</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
        </div>
        <br/>
        <br/>
         

        <qutes/>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
