import React from 'react'
import Cohorts from '../components/Cohorts'
import Contribute from '../components/Contribute'
import Goals from '../components/Goals'
import Hero from '../components/Hero'
import LatestProjects from '../components/LatestProjects'
import Sponsor from '../components/Sponsor'
import Works from '../components/Works'

const Home = ({hero, goals, works, cohorts, projects, sponsor, contribute }) => {
  return (
    <>
      <Hero {...hero} />
      <Goals {...goals} />
      <Works {...works} />
      <Cohorts {...cohorts} />
      <LatestProjects {...projects} />
      <Sponsor {...sponsor} />
      <Contribute {...contribute} />

    </>
  )
}

export default Home;
