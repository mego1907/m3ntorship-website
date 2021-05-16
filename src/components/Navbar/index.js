import React, { useState } from 'react';
import { IconContext } from 'react-icons';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Button } from '../../GlobalStyle';
import { Data } from "../../Data";

import { MobileIcon, Nav, NavbarContainer, NavBtn, NavItem, NavLink, NavLogo, NavMenu } from './NavbarStyle';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [navScroll, setNavScroll] = useState(false);

  const NavbarScroll = () => {
    if(window.scrollY >= 80) {
      setNavScroll(true)
    } else {
      setNavScroll(false);
    }
  }

  window.addEventListener('scroll', NavbarScroll)

  const handleClick =  () => setClick(!click)
  return (
    <IconContext.Provider value={Data.theme.dark ? {color: '#fff'} : {color: '#333'}}>
      <Nav navScroll={navScroll}>
        <NavbarContainer>
          <NavLogo to="/">M3ntorship</NavLogo>
          <MobileIcon onClick={handleClick}>
            {click ? <FaTimes/> : <FaBars/>}
          </MobileIcon>
          <NavMenu onClick={handleClick} click={click}>
            <NavItem>
              <NavLink to="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/sponsors">Sponsors</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/contact">Contact</NavLink>
            </NavItem>
            <NavBtn>
              <Button green="true" to="/" >Apply Now</Button>
            </NavBtn>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
  )
}

export default Navbar
