import React from 'react';

const SearchStep = (props) => {
  if (props.step !== 0 ) {
    return null;
  }

  return (
    <div>
      <label htmlFor="rsvp-search">Full name</label>
      <input type="text" id="rsvp-search" />
    </div>
  );
};

export default SearchStep;
