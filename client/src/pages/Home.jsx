import React from 'react'
import Header from '../components/home/Header.jsx';
import PartOfReferences from '../components/home/PartOfReferences.jsx';
import PartOfAbout from '../components/home/PartOfAbout.jsx';
import StickyComponent from '../components/StickyComponent.jsx';

const Home = () => {
  return (
    <div>
      <Header />
      <PartOfAbout />
      <PartOfReferences />
      <StickyComponent />
		</div>
  );
}

export default Home