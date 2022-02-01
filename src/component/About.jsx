import React from 'react';
import about from '../assets/about2.gif';
import { Image } from './AboutElements';
import Bio from './Bio';
import Technologies from './Technologies';

const About = () => {
    return (
        <>
        <section id="about" className="bg-light" >
            <div className="container py-3">
                <span className="projectHeading">About</span>
                <div className=" col-10 mx-auto AboutCard mt-2 ">
                  <Image
                    src={about}
                    alt="Hyy Dear"
                  />
                  <Bio />
                  <Technologies />
                </div>   
            </div>
        </section>
        </>
    )
}

export default About;
