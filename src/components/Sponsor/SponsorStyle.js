import styled from 'styled-components';
import { Container } from '../../GlobalStyle';
import {Data} from '../../Data';

export const SponsorSec = styled.section`
  margin: 30px 0;
`;

export const SponsorContainer = styled(Container)`

`;

export const Wrapper = styled.div`
  border: 1px solid #66f28d;
  background-color: ${Data.theme.dark ? "#2f3130" : "#f0faf3"};
  padding: 3rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SponsorHeading = styled.h3`
  font-size: 1.6rem;
  color: ${Data.theme.dark ? "#fff" : "rgba(0, 0, 0, 0.51)"};
  font-weight: bold;
  text-align: center;
`;

export const SponserDesc = styled.p`
  font-size: 1.4rem;
  color: ${Data.theme.dark ? "#ccc" : "rgba(0,0,0,.51)"};
  line-height: 1.2;
  text-align: center;
  padding: 2rem 0 1.5rem;
  width: 70%;
`;