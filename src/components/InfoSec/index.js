import React from 'react';
import {InfoSection, InfoContainer, InfoHeading, InfoDesc} from './InfoStyle';

const InfoSec = ({heading, text1, text2}) => {
  return (
    <InfoSection>
      <InfoContainer>
        <InfoHeading>{heading}</InfoHeading>
        <InfoDesc>{text1}</InfoDesc>
        <InfoDesc>{text2}</InfoDesc>
      </InfoContainer>
    </InfoSection>
  )
}

export default InfoSec
