import React from 'react';

const Faq = () => {
  return (
    <div className="row">
      <div id="faq" className="col col-12 section-container">
        <h2 className="section-header">Things You May Be Wondering</h2>
        <div className="p-3 px-sm-5 py-sm-4">
          <h3>What about COVID?</h3>
          <p className="mb-0">
            We planned our wedding for May 2022 in the hopes that this pandemic will be behind us at
            that point, but for the safety of all our family, friends, and the venue's staff:&nbsp;
            <b>
              we kindly ask that all guests be vaccinated if eligible. Please let us know if you are
              unable to be vaccinated by May 7, 2022. If you don't feel well, please stay home.
            </b>
          </p>
        </div>
        <div className="p-3 px-sm-5 py-sm-4">
          <h3>Where can I stay?</h3>
          <p>
            We have a hotel block at the Embassy Suites by Berkeley Heights. If you'd like a room,
            please reserve by April 29, 2022.
          </p>
          <p>
            <em>Embassy Suites by Hilton Berkeley Heights</em>
            <br />
            250 Connell Drive
            <br />
            Berkeley Heights, New Jersey 07922
            <br />
          </p>
          <div id="hotel-btn-group" className="d-grid gap-2 d-sm-block">
            <button className="btn btn-dark me-sm-3">
              <a href="https://g.page/ESBHNJ?share" target="_blank" rel="noreferrer noopener">
                VIEW MAP
              </a>
            </button>
            <button className="btn btn-dark">
              <a
                href="https://embassysuites.hilton.com/en/es/groups/personalized/E/EWRBEES-GHW-20220520/index.jhtml?WT.mc_id=POG"
                target="_blank"
                rel="noreferrer noopener"
              >
                BOOK A ROOM
              </a>
            </button>
          </div>
        </div>
        <div className="p-3 px-sm-5 py-sm-4">
          <h3>What time should I get there?</h3>
          <p>
            Please arrive at the Primavera Regency by 6pm. There is a large parking lot so don't
            worry about looking for parking!
          </p>
        </div>
        <div className="p-3 px-sm-5 py-sm-4">
          <h3>What colors will the wedding party be wearing?</h3>
          <p>
            The bridesmaids will be wearing some sort of light blue and the groomsmen will be
            wearing gray.{' '}
            <span role="img" aria-label="smiley face">
              😁
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Faq;
