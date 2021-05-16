import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Container } from '../../GlobalStyle';
import {Data} from '../../Data';


export const LatestProjectsSec = styled.section`
  padding: 50px 0;
`;

export const ProjectsContainer = styled(Container)`
  display: flex;
  flex-direction:column;
    align-items: center;
  justify-content: center;
`;

export const ProjectsDesc = styled.p`
  margin: 20px 0;
  text-align: center;
  width: 70%;
  font-size: 1.4rem;
  color: ${Data.theme.dark ? "#ccc" : "rgba(0, 0, 0, 0.6)"};

  @media screen and (max-width: 767px) {
    width: 100%;
    text-align: left;
  }
`;

export const Cards = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`;

export const ProjectCard = styled.div`
  padding: 20px;
  margin: 20px;
  width: calc(100% / 3);
  background-color: ${Data.theme.dark ? "#424242" : "#f0faf3"};
  height: 240px;

  @media screen and (max-width: 767px) {
    width: 100%;
    height: 100%;
  }
`;

export const CardHeading = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0 20px;

  h6 {
    font-size: 1.4rem;
    color: ${Data.theme.dark ? "#fff" : "#484646"};
  }
`;

export const MoreLink = styled(Link)`
  font-size: 1rem;
  text-decoration: none;
  font-weight: bold;
  color: ${Data.theme.dark ? "#fff" : "#000"};
`;

export const LeftIcon = styled(BsArrowRight)`
  margin: -5px 0;
  font-size: 20px;
`;

export const CardDesc = styled.p`
  color: rgba(0,0,0,0.8);
  font-size: 1.1rem;
  line-height: 1.2;
  color: ${Data.theme.dark ? "#ccc" : "#000000ab"};
`;