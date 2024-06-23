import React from 'react'
import Hero from '../component/home/Hero';
import About from '../component/home/About';
import OurTeam from '../component/home/OurTeam';
import FitnessImportance from '../component/home/FitnessImportance';

const HomePage = () => {
  return (
    <>
    <Hero/>
    <FitnessImportance/>
    <About/>
    <OurTeam/>
    </>
  )
}

export default HomePage