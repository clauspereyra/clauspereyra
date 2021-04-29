import React from 'react';
import '../App.css';
import InfoSection from '../components/InfoSection';
import { homeObjOne } from '../components/InfoSection/Data';


function Services() {
  return (
    <>                       
      
      <InfoSection {...homeObjOne} />  
            
    </>
  );
}

export default Services;