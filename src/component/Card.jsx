import React from 'react';
import { 
    CardContainer, 
    ImgContainer,
    ProjectDetailsContainer,
    Button } from './ProjectCardElements';

const Card = ({ img, title, descp, technologies, live_url}) => {
  return (
    <>
        <CardContainer className='pt-5'>
            <ImgContainer>
                <img src={img} alt="E" className="img-fluid projectImage"  />
            </ImgContainer>
            <ProjectDetailsContainer>
                <h2 className="projectHead">{ title }</h2>
                <p className="projectDescp "> { descp } </p>
                <p><span className="techHead">Technologies -</span><span className="techName"> { technologies } </span></p>
                <a href={live_url} className="projectLink" target="_prateek">
                    <Button className="btn ">
                       ClickMe I'm Live
                    </Button>
                </a>
            </ProjectDetailsContainer>
        </CardContainer>
    </>
  );
};

export default Card;
