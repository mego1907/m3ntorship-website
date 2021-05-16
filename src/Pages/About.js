import React from 'react'
import AboutSec from '../components/AboutSec'
import { Data } from '../Data'

const About = () => {
  return (
    <>
      <AboutSec {...Data.about} />
    </>
  )
}

export default About
