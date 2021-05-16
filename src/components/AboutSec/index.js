import React from 'react';
import {About, AboutHeading, AboutH2, AboutP, Aboutbottom, P, Img} from './AboutSecStyle';
import AboutImg from '../../images/Squiggles_Monochromatic_2_b29a6e2282.png'

const AboutSec = ({heading, smallp, text1, text2}) => {
  return (
    <About>
      <AboutHeading>
        <AboutH2>{heading}</AboutH2>
        <AboutP>{smallp}</AboutP>
      </AboutHeading>
      <Aboutbottom>
        <P>{text1}</P>
        <P>{text2}</P>
        <Img src={AboutImg} />
      </Aboutbottom>
    </About>
  )
}

export default AboutSec;
