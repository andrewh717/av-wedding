import React from 'react';
import Banner from 'components/Banner';
import Story from 'components/Story';
import WhenWhere from 'components/WhenWhere';
import Faq from 'components/Faq';
import WeddingParty from './WeddingParty';
import Footer from './Footer';

const Home = () => {
  return (
    <div>
      <Banner />
      <Story />
      <WhenWhere />
      <WeddingParty />
      <Footer />
    </div>
  );
}

export default Home;