import React from 'react';
import { CardContainer, CardDisc, CardImg, CardNumber, CardTitle, WorkCard } from './WorkStyle';

const Card = ({img, title, desc, num}) => {
  return (
    <WorkCard>
      <CardNumber>{num}</CardNumber>
      <CardContainer>
        <CardImg src={img} />
        <CardTitle>{title}</CardTitle>
        <CardDisc>{desc}</CardDisc>
      </CardContainer>
    </WorkCard>
  )
}

export default Card
