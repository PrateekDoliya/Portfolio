import React from 'react';
import { techList } from '../MyData/Technologies';
import { 
    TechContainer,
    Tech,
    TechImg,
    TechName } from './AboutElements';

const Technologies = () => {
  return ( 
    <>
        <TechContainer>
            {
                techList.map( (tech, indx) => {
                    return(
                        <Tech key={indx}>
                            <TechImg src={tech.img} alt={tech.techName}></TechImg>
                            <TechName>{tech.techName}</TechName>
                        </Tech>
                    )
                })
            }
        </TechContainer>
    </>
  );
};

export default Technologies;
