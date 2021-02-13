import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div>
      <div className="row">
        <img className="img-fluid" src={'assets/engagement1.jpg'} alt="Andrew and Vanessa"></img>
      </div>
      <div className="row">
        <div id="banner" className="fixed-top col col-12">
          <h1>
            Andrew & Vanessa
            <br />
            Date to be announced
            <br />
            <Link to="/rsvp">
              <button id="rsvp-button" type="button" className="btn btn-primary">
                RSVP
              </button>
            </Link>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;
