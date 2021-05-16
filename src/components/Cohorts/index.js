import React from 'react'
import { Heading } from '../../GlobalStyle'
import { Card, CardBtn, CardDashed, CardDesc, CardTitle, CohortsCards, CohortsContainer, CohortsDesc, CohortsSec } from './CohortsStyle'

const Cohorts = ({text, cards }) => {
  return (
    <CohortsSec>
      <CohortsContainer>
        <Heading>
          <h3>COHORTS</h3>
        </Heading>
        <CohortsDesc>{text}</CohortsDesc>
        <CohortsCards>
          <Card>
            <CardTitle cardA>{cards.cardOne.title}</CardTitle>
            <CardDesc cardA>{cards.cardOne.desc}</CardDesc>
            <CardBtn cardA to="/">
              {cards.cardOne.btn}
            </CardBtn>
          </Card>
          <CardDashed>
            <CardTitle>{cards.cardTwo.title}</CardTitle>
            <CardDesc>{cards.cardTwo.desc}</CardDesc>
            <CardBtn to="/">{cards.cardTwo.btn}</CardBtn>
          </CardDashed>
        </CohortsCards>
      </CohortsContainer>
    </CohortsSec>
  );
}

export default Cohorts
