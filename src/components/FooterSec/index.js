import React from 'react'
import {Link} from 'react-router-dom';
import {Footer, FooterContainer, FooterCard, Heading, Desc, FooterRow} from './FooterStyle'

const FooterSec = () => {
  return (
    <Footer>
      <FooterContainer>
        <FooterCard>
          <Heading>M3ntorship</Heading>
          <Desc>M3ntorship © 2019-2020. All rights reserved. All rights reserved.</Desc>
        </FooterCard>
        <FooterCard>
          <Heading>About Us</Heading>
          <Desc>M3ntorship was created in early 2020 to help fellow junior developers gain real world experience....<Link to="/about" >read more</Link></Desc>
        </FooterCard>
        <FooterCard>
          <Heading>Links</Heading>
          <FooterRow>
            <Link to="/">Linkedin</Link>
            <Link to="/">Github</Link>
          </FooterRow>
          <FooterRow>
            <Link to="/">info[at]m3ntorship.com</Link>
            <Link to="/">Facebook page</Link>
          </FooterRow>
        </FooterCard>
      </FooterContainer>
    </Footer>
  )
}

export default FooterSec
