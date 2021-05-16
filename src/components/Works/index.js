import React from 'react';
import { Data } from '../../Data';
import { Heading } from '../../GlobalStyle';
import Card from './Card';
import { Cards, CardsRow, WorkContainer, WorkDesc, WorkSec } from './WorkStyle';

const Works = () => {
  return (
    <WorkSec>
      <WorkContainer>
        <Heading>
          <h3>HOW IT WORKS ?</h3>
        </Heading>
        <WorkDesc>{Data.home.works.text}</WorkDesc>
        <Cards>
          <CardsRow>
            <Card {...Data.home.works.cards.cardOne} />
            <Card {...Data.home.works.cards.cardTwo} />
            <Card {...Data.home.works.cards.cardThree} />
          </CardsRow>
          <CardsRow>
            <Card {...Data.home.works.cards.cardFour} />
            <Card {...Data.home.works.cards.cardFive} />
            <Card {...Data.home.works.cards.cardSix} />
          </CardsRow>
        </Cards>
      </WorkContainer>
    </WorkSec>
  )
}

export default Works;
