import { Link } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import {Data} from './Data'

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Source Sans Pro', sans-serif;
  }
  body{ 
    background-color: ${Data.theme.dark ? '#333' : 'transparent'};
    position: relative;
  }
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;

  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;

// Button Style
export const Button = styled(Link)`
  white-space: nowrap;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({big}) => (big ? "14px 40px" : "10px 23px")};
  text-decoration: none;
  background-color: ${({green}) => (green ? "#66f28d" : "#2d5bff")};
  color: #fff;
  font-size: 1.1rem;
  font-weight: ${({big}) => big && 'bold'};
  border: none;
  outline: none;
  cursor: pointer;
  margin: 20px 0;
  &:hover{
    background: ${({green}) => (green ? "#ff5623" : "#e25d5d")};
    transition: background 0.3s ease-in-out;
  }
`;

// Heading
export const Heading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  h3{
    font-size: 2.2rem;
    font-weight: bold;
    position: relative;
    z-index: 1;
    color: ${Data.theme.dark ? "#f900fd" : "#000"};

    &::after{
      content: "";
      position: absolute;
      bottom: 8px;
      left: 0;
      width: 100%;
      height: 8px;
      background-color: #66f28d;
      opacity: 1;
      z-index: -1;
    }
  }

`;

export default GlobalStyle;