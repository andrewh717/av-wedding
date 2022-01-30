import React from 'react';
import useMobile from '../hooks/useMobile';
import RsvpForm from './RsvpForm/RsvpForm';

const Rsvp = () => {
  const isMobile = useMobile();
  return (
    <div>
      <div className="row rsvp-img-container">
        <img className={`rsvp-img ${isMobile ? '' : 'pt-5'}`} src={isMobile ? "assets/rsvpImageMobile.jpg" : "assets/rsvpImage.jpg"} alt="" />
      </div>
      {/* <div className="container temp">
        <h1 className="banner-text temp-text">
          Please visit this page to RSVP later after our official invitations have been sent out.
          Thanks!
        </h1>
      </div> */}
      <div className="row">
        <div className="col col-12 py-3 my-3">
          <RsvpForm/> 
        </div>
      </div>
    </div>
  );
};

export default Rsvp;
