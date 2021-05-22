import React from 'react';
import '../../App.scss';
import HomeLand from '../HomeLand';
import Cards from '../Cards';
import Footer from '../Footer';

function Home() {
  return (
    <>
      <HomeLand />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;