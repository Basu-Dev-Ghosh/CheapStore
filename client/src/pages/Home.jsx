import React from 'react';
import Header from '../components/header/Header';
import Slider01 from '../components/slider/Slider01';
import dataSlider from '../assets/fake-data/dataSlider';
import LiveAution from '../components/layouts/home/LiveAution';
import dataLiveAution from '../assets/fake-data/dataLiveAution'
import PopularCollection from '../components/layouts/explore/PopularCollection';
import dataPopularCollection from '../assets/fake-data/dataPopularCollection';
import Footer from '../components/footer/Footer';
import { Newsletters } from '../components/layouts/home/Newsletters';

const Home01 = () => {
  return <div className='home-1'>
      <Header />
      <Slider01 data={dataSlider} />
      <LiveAution data={dataLiveAution} />
      <PopularCollection data={dataPopularCollection} />
      <Newsletters />
      <Footer />
  </div>;
};

export default Home01;