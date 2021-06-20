import React from 'react';

const WhenWhere = () => {
  return (
    <div>
      <div className="row">
        <img src="/assets/primaveraCeremony.jpg" alt="" />
      </div>
      <div className="row">
        <div id="when-and-where" className="col col-12 section-container">
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
              <a href="https://www.google.com/maps?q=1080+Valley+Rd,+Stirling,+NJ+07980" target="_blank" rel="noreferrer noopener">
                VIEW MAP
              </a>
            </button>
          </div>
        </div>
      </div>
      <div className="row">
        <img src="/assets/primaveraReception.jpeg" alt="" />
      </div>
    </div>
  );
};

export default WhenWhere;
