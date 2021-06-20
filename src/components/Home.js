import React from 'react';
import Banner from 'components/Banner';
import Story from 'components/Story';
import WhenWhere from 'components/WhenWhere';
import WeddingParty from 'components/WeddingParty';
import Photos from 'components/Photos';
import Registry from 'components/Registry';
import Faq from 'components/Faq';

const Home = () => {
  return (
    <div>
      <Banner />
      <Story />
      <WhenWhere />
    </div>
  );
}

export default Home;