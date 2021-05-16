import React from 'react';
import { Button } from '../../GlobalStyle';
import HeroImg from '../../images/hero.svg';
import {
  Btns,
  HeroContainer,
  HeroImgWrapper,
  HeroSec,
  HeroTextWrapper,
} from "./HeroStyle";

const Hero = ({heading, text }) => {
  return (
    <HeroSec>
      <HeroContainer>
        <HeroTextWrapper>
          <h1>{heading}</h1>
          <p>{text}</p>
          <Btns>
            <Button green="true" big="true" to="/">
              Apply As A Mentee
            </Button>
            <Button big="true" to="/">
              Apply As A Mentor
            </Button>
          </Btns>
        </HeroTextWrapper>
        <HeroImgWrapper>
          <img src={HeroImg} alt="" />
        </HeroImgWrapper>
      </HeroContainer>
    </HeroSec>
  );
}

export default Hero
