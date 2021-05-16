import styled from 'styled-components';
import {Container, Heading} from '../../GlobalStyle';
import {Data} from '../../Data'

export const ContributeSec = styled.section`
  padding: 3rem 0;
`;

export const ContributeContainer = styled(Container)`
  display: flex;

  @media screen and (max-width: 960px){
    flex-direction: column;
  }
`;

export const ContributeText = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  @media screen and (max-width: 960px){
    width: 100%;
  }
`;

export const ContributeHeading = styled(Heading)`
  h3{
    &::after{
    background-color: #2b55e6;
  }
  }
`;

export const ContributeDesc = styled.p`
  font-size: 1.4rem;
  color: ${Data.theme.dark ? "#ccc" : "rgba(0,0,0,0.5)"};
  line-height: 1.7;
  margin: 1.5rem 0 2rem;
`;

export const ContributeImg = styled.div`
  width: 50%;
  display: flex;
  justify-content: Center;
  align-items: center;

  @media screen and (max-width: 767px){
    width: 100%;
  }
`;

export const Img = styled.img`
  width: 100%;
`