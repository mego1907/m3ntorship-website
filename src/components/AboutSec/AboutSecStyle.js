import styled from 'styled-components';
import { Container } from '../../GlobalStyle';
import {Data} from '../../Data';

export const About = styled.section`
  margin: 80px 0;
`;

export const AboutHeading = styled.div`
  height: 500px;
  background-color: #66f28d;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-bottom: 5rem;

  &::after{
    content: '';
    width: 100%;
    height: 100px;
    background-color: #66f28d;
    position: absolute;
    bottom: -50px;
    left: 0;
    right: 0;
    border-radius: 0 0 70% 70%; 
  }
`;


export const AboutH2 = styled.h2`
  font-size: 5rem;
  color: #000;

  @media screen and (max-width: 767px) {
    font-size: 2rem;
  }
`;

export const AboutP = styled.p`
  font-size: 1.5rem;
  margin: 6px 0;

  @media screen and (max-width: 767px) {
    font-size: 1.2rem;
    text-align: center;
  }
`;

export const Aboutbottom = styled(Container)`
  position: relative;
`;

export const P = styled.p`
  font-size: 1.3rem;
  line-height: 1.5;
  padding: 1rem 0;
  width: 60%;
  color: ${Data.theme.dark ? "#ccc" : "rgba(0, 0, 0, 0.8)"};

  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;

export const Img = styled.img`
  width: 300px;
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);

  @media screen and (max-width: 767px) {
    opacity: 0.3;
  }
`;