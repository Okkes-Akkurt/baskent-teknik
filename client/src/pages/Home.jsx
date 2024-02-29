import React from 'react'
import Header from '../components/home/Header.jsx';
import PartOfReferences from '../components/home/PartOfReferences.jsx';
import PartOfAbout from '../components/home/PartOfAbout.jsx';

const Home = () => {
  return (
    <div>
      <Header />
      <PartOfAbout />
      <PartOfReferences />
		</div>
  );
}

export default Home