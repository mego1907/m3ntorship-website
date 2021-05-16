import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Container } from '../../GlobalStyle';
import {Data} from '../../Data';

export const CohortsSec = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`;

export const CohortsContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CohortsDesc = styled.p`
  margin: 15px 0;
  width: 70%;
  display: flex;
  justify-content: center;
  text-align: center;
  font-size: 1.5rem;
  line-height: 1.5;
  color: ${Data.theme.dark ? "#ccc" : "rgba(0, 0, 0, 0.6)"};

  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;

export const CohortsCards = styled.div`
  display: flex;
  align-items: left;
  justify-content: left;
  margin: 20px 0;
  
  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`;

export const Card = styled.div`
  width: 30%;
  background-color: #a1f7b9;
  padding: 10px;

  @media screen and (max-width: 767px) {
    width: 100%;
    margin-bottom: 30px;
  }
`;

export const CardDashed = styled.div`
  width: 30%;
  border: ${Data.theme.dark ? "4px dashed #a1f7b9" : "4px dashed #000"};
  margin-left: 30px;
  padding: 10px;

  @media screen and (max-width: 767px) {
    width: 100%;
    margin-left: 0;
  }
`;

export const CardTitle = styled.h5`
  font-size: 1.6rem;
  text-align: center;
  color: ${({ cardA }) =>
    Data.theme.dark && !cardA ? "#a1f7b9" : "#000" };
  font-weight: bold;
  margin: 20px 0;
`;

export const CardDesc = styled.p`
  font-size: 1.2rem;
  color: #000;
  color: ${({ cardA }) => (Data.theme.dark && !cardA ? "#ccc" : "#000")};
  text-align: left;
  padding: 35px;

  @media screen and (max-width: 767px) {
    padding: 35px 20px;
  }
`;

export const CardBtn = styled(Link)`
  font-weight: bold;
  font-size: 1.2rem;
  text-align: left;
  padding: 0 35px;
  color: ${({ cardA }) => (Data.theme.dark && !cardA ? "#a1f7b9" : "#000")};

  @media screen and (max-width: 767px) {
    text-align: center;
  }
`;

