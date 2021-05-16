import React from 'react';
import { Button } from '../../GlobalStyle';
import { SponserDesc, SponsorContainer, SponsorHeading, SponsorSec, Wrapper } from './SponsorStyle';

const Sponsor = ({heading, desc}) => {
  return(
    <SponsorSec>
      <SponsorContainer>
        <Wrapper>
          <SponsorHeading>{heading}</SponsorHeading>
          <SponserDesc>{desc}</SponserDesc>
          <Button big green to="/">Sponsor Now</Button>
        </Wrapper>
      </SponsorContainer>
    </SponsorSec>
  )
}

export default Sponsor