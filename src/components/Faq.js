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
          <h3>What should I wear?</h3>
          <p>
            The dress code for our wedding is{' '}
            <a
              className="link"
              href="https://www.google.com/search?q=cocktail+attire"
              target="_blank"
              rel="noreferrer noopener"
            >
              cocktail attire
            </a>
            . Ladies, please refrain from wearing white. The bridesmaids will be wearing some sort
            of light blue and the groomsmen will be wearing gray.{' '}
            <span role="img" aria-label="smiley face">
              😁
            </span>
          </p>
        </div>
        <div className="p-3 px-sm-5 py-sm-4">
          <h3>What time should I get there?</h3>
          <p>
            Please arrive at the Primavera Regency by 6pm. There is a large parking lot so don't
            worry about looking for parking!
          </p>
        </div>
        <div className="p-3 px-sm-5 py-sm-4">
          <h3>How do I RSVP?</h3>
          <p>
            You can RSVP right here on our website by clicking "RSVP" in the menu bar, or by
            clicking{' '}
            <a className="link" href="/rsvp">
              here
            </a>
            . If you experience any problems when filling out the form, feel free to reach out to
            Andrew directly at (201) 841-1553.
          </p>
        </div>
        <div className="p-3 px-sm-5 py-sm-4">
          <h3>Can I bring a date?</h3>
          <p>
            When you fill out the RSVP form, you will see an option to RSVP for your guest if we've
            given you a +1.
          </p>
        </div>
        <div className="p-3 px-sm-5 py-sm-4">
          <h3>Can I take my own pictures?</h3>
          <p>
            Feel free to take as many pictures and Instagram/Snapchat stories as you'd like during
            the cocktail hour and reception! We simply ask that you do not take pictures during the
            ceremony. We're going to have professional photographers capturing beautiful photos
            throughout the night that we will share later. The last thing we want is people showing
            up in photos of the ceremony with their phones out!{' '}
            <span role="img" aria-label="smiley face with sweat">
              😅
            </span>
          </p>
        </div>
        <div className="p-3 px-sm-5 py-sm-4">
          <h3>So I have some dietary restrictions...</h3>
          <p>
            No problem! We know for certain that there will be vegetarian options, but for further
            dietary restrictions just reach out to us and we will gladly contact the venue to ensure
            you can be accomodated. The food we've tasted from the Primavera Regency has been
            incredible and we definitely don't want you to miss out!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Faq;
