import styled from 'styled-components';
import { Container } from '../../GlobalStyle';
import {Data} from '../../Data';

export const Footer = styled.footer``;


export const FooterContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 767px) {
    flex-direction: column;
    padding: 0;
  }
`;

export const FooterCard = styled.div`
  width: calc(100% / 3);
  padding: 30px;

  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;

export const Heading = styled.h2`
  font-size: 1.5rem;
  padding: 1rem 0;
  color: ${Data.theme.dark ? "#fff" : "#000"}
`;

export const Desc = styled.p`
  font-size: 1rem;
  color: ${Data.theme.dark ? "#ccc" : "rgba(0, 0, 0, 0.7);"};
`;

export const FooterRow = styled.div`
  display: flex;
  justify-content: space-between;

  a {
    padding: 8px 0;
    font-weight: bold;
    font-size: 0.9rem;
    color: ${Data.theme.dark ? "#ccc" : "#000"};

    @media screen and (max-width: 767px) {
      font-size: 0.8rem;
    }
  }
`;