import React from 'react';
import { Button } from '../../GlobalStyle';
import {ContributeSec, ContributeContainer, ContributeHeading, ContributeText, ContributeDesc, ContributeImg, Img} from './ContributeStyle'

const Contribute = ({heading, desc, img}) => {
  return(
    <ContributeSec>
      <ContributeContainer>
        <ContributeText>
          <ContributeHeading>
            <h3>{heading}</h3>
          </ContributeHeading>
          <ContributeDesc>
            {desc}
          </ContributeDesc>
          <Button big="true" to="/">Apply As A Mentor</Button>
        </ContributeText>
        <ContributeImg>
          <Img src={img} alt="Contribute Image" />
        </ContributeImg>
      </ContributeContainer>
    </ContributeSec>
  )
}

export default Contribute;