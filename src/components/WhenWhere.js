import React from 'react';

const WhenWhere = () => {
  return (
    <div>
      <div className="row">
        <div id="whenwhere" className="col col-12 ">
          <div className="row banner-img-container">
            <img className="img-fluid banner-img" src={'assets/primaveraCeremony.jpg'} alt="Andrew and Vanessa"></img>
            <h2 className="section-header">When &amp; Where</h2>
          </div>
          <ul>
            <li>Wedding Ceremony</li>
            <li>Cocktail Hour</li>
            <li>Reception</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WhenWhere;
