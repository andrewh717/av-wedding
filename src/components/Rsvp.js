import React, { useEffect, useState } from 'react';
// import RsvpForm from './RsvpForm/RsvpForm';

const Rsvp = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 576);
  useEffect(() => {
    window.addEventListener("resize", () => {
        const ismobile = window.innerWidth < 576;
        if (ismobile !== isMobile) setIsMobile(ismobile);
    }, false);
  }, [isMobile]);

  return (
    <div>
      <div className="row">
        <img className={`rsvp-img ${isMobile ? "" : "pt-5"}`} src="assets/rsvpImage.jpg" alt="" />
      </div>
      <div className="row">
        <div className="col col-12 py-3 my-3">
          <h3>Please visit this page to RSVP later after our official invitations have been sent out. Thanks!</h3>
          {/* <RsvpForm/> */}
        </div>
      </div>
    </div>
  );
};

export default Rsvp;