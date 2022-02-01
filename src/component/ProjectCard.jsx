import React from 'react';
import Card from './Card';
import { Projects } from '../MyData/Projects'

const ProjectCard = () => {
  return (
    <>
        {
            Projects.map( (tech, indx) => {
                return <Card 
                    key={indx} 
                    img={tech.img}
                    title={tech.title} 
                    descp={tech.descp} 
                    technologies={tech.technologies} 
                    live_url={tech.live_url} />
            })
        }
    </>
  );
};

export default ProjectCard;
