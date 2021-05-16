import styled from 'styled-components';
import { Container } from '../../GlobalStyle';
import {Data} from '../../Data'

export const HeroSec = styled.div`
  margin-top: 80px;
  background-color: ${Data.theme.dark ? "#333" : "#fff"};
  height: 700px;
  display: flex;
  justify-content: center;
  position: relative;

  @media screen and (max-width: 960px) {
    height: 60rem;
  }
`;

export const HeroContainer = styled(Container)`
  display: flex;
  @media screen and (max-width: 960px){
    flex-direction: column;
  }
`;

export const HeroTextWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-size: 4rem;
    font-weight: bold;
    color: ${Data.theme.dark ? "#fff" : "#000"};
  }

  p {
    color: ${Data.theme.dark ? "#ccc" : "#0000008f"};
    font-size: 20px;
    margin: 20px 5px;
    line-height: 1.5;
  }

  @media screen and (max-width: 960px) {
    width: 100%;
    h1 {
      font-size: 3.5rem;
    }
  }
`;

export const Btns = styled.div`
  display: flex;
  text-align: center;

  a{
    margin-right: 15px;
  }

  @media screen and (max-width: 960px){
    flex-direction: column;
    a{
      margin: 10px auto;
      width: 100%;
    }
  }
`;

export const HeroImgWrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  img{
    width: 500px;
    background-size: cover;

    @media screen and (max-width: 960px) {
      width: 100%;
    }
  }

  @media screen and (max-width: 960px){
    width: 100%;
  }
`;

export const DarkBtn = styled.button`
  position: fixed;
  top: 100px;
  left: 20px;
  cursor: pointer;
  padding: 8px 15px;
  font-size: 18px;
  z-index: 999;
`;