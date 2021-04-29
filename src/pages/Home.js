import React from 'react';
import '../App.css';
import InfoSection from './../components/InfoSection';
import { homeObjOne } from './../components/InfoSection/Data';
import SlideShow from './../components/SlideShow';
import Services from './../components/Services';
import PayServices from './../components/PayServices';

import Suscripcion from './../components/Suscripcion';


function Home() {
  return (
    <>      
      <SlideShow />
      <InfoSection {...homeObjOne} />
      <Services />
      <PayServices />
      <Suscripcion />
    </>
  );
}

export default Home;