import React from 'react';
import { Helmet } from 'react-helmet';
import AboutFav from './Favicon/aboutFav.png';

const Home = () => {
  return (
    <div>
      <Helmet>
        <link rel="icon" type="image/png" href={AboutFav} sizes="16x16" />
        {/* Other meta tags or head elements can be added here */}
      </Helmet>
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
      </div>
    </div>
  );
};

export default Home;
