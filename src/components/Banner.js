import React from 'react';

const Banner = () => {
  return (
    <div>
      <div className="row banner-img-container">
        <img className="img-fluid banner-img" src={'assets/engagement1.jpg'} alt="Andrew and Vanessa"></img>
      </div>
      <div className="row">
        <div id="banner" className="fixed-top col col-12">
          <h1>
            Andrew &amp; Vanessa
          </h1>
          <h2>
            are getting married May 21, 2022!
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Banner;
