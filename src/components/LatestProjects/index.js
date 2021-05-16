import React from 'react';
import { Heading } from '../../GlobalStyle';
import { CardDesc, CardHeading, Cards, LatestProjectsSec, LeftIcon, MoreLink, ProjectCard, ProjectsContainer, ProjectsDesc } from "./LatestProjects";

const LatestProjects = ({desc, cards }) => {
  return (
    <LatestProjectsSec>
      <ProjectsContainer>
        <Heading>
          <h3>OUR LATEST PROJECTS</h3>
        </Heading>
        <ProjectsDesc>
          {desc}
        </ProjectsDesc>
        <Cards>
          {cards.map((e) =>(
            <ProjectCard key={Math.random() * 3}>
              <CardHeading>
                <h6>{e.heading}</h6>
                <MoreLink to="/">more <LeftIcon /></MoreLink>
              </CardHeading>
              <CardDesc>
                {e.desc}
              </CardDesc>
            </ProjectCard>)
          )}
        </Cards>
      </ProjectsContainer>
    </LatestProjectsSec>
  )
}

export default LatestProjects
