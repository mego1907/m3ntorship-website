import styled from 'styled-components';
import {Container} from '../../GlobalStyle';
import {Data} from '../../Data'

export const InfoSection = styled.section`
  margin: 8rem 0 ;
`;

export const InfoContainer = styled(Container)`
`;

export const InfoHeading = styled.h2`
  font-size: 5rem;
  font-weight: bold;

  color: ${Data.theme.dark ? "#fff" : "#000"};

  @media screen and (max-width: 767px) {
    font-size: 2rem;
  }
`;

export const InfoDesc = styled.p`
  color: ${Data.theme.dark ? "#ccc" : "rgba(0,0,0,0.5)"};
  font-size: 1.2rem;
  padding: 2rem 0;
  width: 70%;

  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;