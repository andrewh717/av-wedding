import React from 'react';
import Banner from 'components/Banner';
import Story from 'components/Story';
import WhenWhere from 'components/WhenWhere';
import Faq from 'components/Faq';

const Home = () => {
  return (
    <div>
      <Banner />
      <Story />
      <WhenWhere />
      <Faq />
    </div>
  );
}

export default Home;