import React from 'react';
import Timeline from './Timeline';
import useMobile from '../hooks/useMobile';

const WhenWhere = () => {
  const isMobile = useMobile();
  return (
    <div>
      <div className={`row parallax primavera-ceremony ${isMobile ? "mobile" : ""}`}>
        {/* <img className="section-img" src="/assets/primaveraCeremony.jpg" alt="Primavera Regency outdoor ceremony space" /> */}
      </div>
      <div id="whenwhere" className="row">
        <div id="when-and-where" className="col col-12 section-container pb-3">
          <div>
            <h2 className="section-header">Ceremony &amp; Reception</h2>
            <p>Saturday, May 21, 2022</p>
            <p>
              <em>The Primavera Regency</em>
              <br />
              1080 Valley Road
              <br />
              Stirling, NJ 07980
            </p>
            <button type="button" className="btn btn-dark">
              <a
                href="https://www.google.com/maps?q=1080+Valley+Rd,+Stirling,+NJ+07980"
                target="_blank"
                rel="noreferrer noopener"
              >
                VIEW MAP
              </a>
            </button>
          </div>
        </div>
        <Timeline />
      </div>
      <div className={`row parallax primavera-reception ${isMobile ? "mobile" : ""}`}>
        {/* <img className="section-img" src="/assets/primaveraReception.jpeg" alt="" /> */}
      </div>
    </div>
  );
};

export default WhenWhere;
