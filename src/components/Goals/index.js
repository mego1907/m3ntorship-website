import React from 'react';
import { Heading } from '../../GlobalStyle';
import { GoalsContainer, GoalsDesc, GoalsSec } from './GoalsStyle';

const Goals = ({text}) => {
  return (
    <GoalsSec>
      <GoalsContainer>
        <Heading>
          <h3>GOALS</h3>
        </Heading>
        <GoalsDesc>{text}</GoalsDesc>
      </GoalsContainer>
    </GoalsSec>
  )
}

export default Goals
