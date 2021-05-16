import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Container } from '../../GlobalStyle';
import {Data} from '../../Data'

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: ${Data.theme.dark ? "#222" : "#fff"};
  z-index: 999;
  box-shadow: ${({ navScroll }) => (navScroll ? "0 0 10px rgba(0,0,0,0.5)" : "none")};
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;

  ${Container}
`;

export const NavLogo = styled(Link)`
  color: ${Data.theme.dark ? "#fff" : "#000"};;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  font-weight: bold;
  display: flex;
  align-items: center;
`

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 960px){
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  text-align: center;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 80px;
    left: ${({ click }) => (click ? 0 : "-100%")};
    opacity: 1;
    transition: all 0.5s ease;
    background: ${Data.theme.dark ? "#333" : "#eee"};
  }
`;

export const NavItem = styled.li`
  height: 80px;
  @media screen and (max-width: 960px){
    width: 100%;
    &:hover{
      background: #ff5623;
    }
  }
`;

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  padding: 0.5rem 1.2rem;
  height: 100%;
  font-size: 1.1rem;
  color: ${Data.theme.dark ? "#eee" : "#222"};

  &:hover {
    color: #ff5623;
  }
  @media screen and (max-width: 960px) {
    &:hover {
      color: #fff;
    }
  }
`;

export const NavBtn = styled.div`
  margin-left: 20px;
  @media screen and (max-width: 960px){
    margin-left: 0;
    margin-top: 30px
  }
`

