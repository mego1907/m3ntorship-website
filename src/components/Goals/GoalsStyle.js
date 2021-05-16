import styled from 'styled-components';
import { Container } from '../../GlobalStyle';
import {Data} from '../../Data'

export const GoalsSec = styled.section`
  margin: 15px;
`;

export const GoalsContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const GoalsDesc = styled.p`
  font-size: 2rem;
  line-height: 2;
  padding: 20px 120px;
  text-align: center;
  color: ${Data.theme.dark ? "#ccc" : "#000"};

  @media screen and (max-width: 960px) {
    padding: 20px 0;
  }
`;