import styled from 'styled-components';
import { Container } from '../../GlobalStyle';
import { Data } from "../../Data";

export const WorkSec = styled.section`
  margin: 40px 0;
`;

export const WorkContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const WorkDesc = styled.p`
  width: 70%;
  margin: 20px 0;
  line-height: 1.3;
  text-align: center;
  font-size: 1.3rem;
  color: ${
    Data.theme.dark ? "#ccc" : "rgba(0,0,0,.51)"
  };
`;

export const Cards = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 2rem 0;
`;

export const CardsRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 50px 0;

  @media screen and (max-width: 960px){
    flex-direction: column;
  }
`;

export const WorkCard = styled.div`
  padding: 0 25px;
  position: relative;
  
  @media screen and (max-width: 960px){
    margin-bottom: 70px
  }
`;

export const CardContainer = styled.div`
  width: 350px;
  height: 550px;
  box-shadow: 0 0 10px rgba(0,0,0,0.15);
  z-index: 10;
  background-color: ${Data.theme.dark ? "#404040" : "#fff"}
`

export const CardNumber = styled.span`
  background-color: transparent;
  color: #a1f7b9;
  font-size: 6rem;
  font-weight: bold;
  position: absolute;
  top: -20px;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  display: block;
`;

export const CardImg = styled.img`
  width: 100%;
`;

export const CardTitle = styled.h5`
  text-align: center;
  font-size: 1.6rem;
  font-weight: bold;
  margin-top: 10px;
  color: ${Data.theme.dark ? "#fff" : "#000"};
`;

export const CardDisc = styled.p`
  text-align: center;
  font-size: 1.3rem;
  color: #333333b0;
  padding: 20px;
  color: ${Data.theme.dark ? "#ccc" : "#333333b0"};
`;