import React from 'react';

/*
Ceremony start: 6:30pm
Cocktail Hour: 7:00pm
Reception: 8:00pm - 12:00am

*/

const Timeline = () => {
  return (
      <div className="row pb-5">
        <div className="col-md-12">
          <h2 className="section-header">Events of the Day</h2>
          <ul className="timeline">
            <li className="event" data-date="6:30pm - 7:00pm">
              <h3>Ceremony</h3>
              <p>The ceremony will be outdoors weather permitting.</p>
            </li>
            <li className="event" data-date="7:00pm - 8:00pm">
              <h3>Cocktail Hour</h3>
              <p>There will be lots of delicious food!</p>
            </li>
            <li className="event" data-date="8:00pm - 12:00am">
              <h3>Reception</h3>
              <p>There will be even more delicious food and lots of dancing!</p>
            </li>
          </ul>
        </div>
      </div>
  );
};

export default Timeline;
