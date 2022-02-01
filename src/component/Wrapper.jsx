import React, { useState } from 'react';
import Navbar from './Navbar';
import NavDropdown from './NavDropdown';
import TypeAnimation from 'react-type-animation';
import { NameContainer, ScrollBtn } from './WrapperElements';
import { BsMouse } from "react-icons/bs";
import { Link } from "react-scroll";

const Wrapper = () => {
    const [isOpen, setIsOpen] = useState( false );
    
    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <main id='main'>
                <NavDropdown isOpen={ isOpen } toggle={ toggle } />
                <Navbar toggle = { toggle } />
                <NameContainer>
                <h1>Hi, I'm</h1><i><TypeAnimation
                        cursor={true}
                        sequence={['< Prateek Doliya />', 1000, '']}
                        wrapper="h1"
                        repeat={Infinity}
                        className="name"
                    /></i>
                    <h5 className='text-center'>Full Stack Web Developer | MERN Stack Developer</h5>
                    <nav>
                        <ul>
                            <a href="../assets/Prateek_Doliya_Resume.pdf" download><li>
                                Resume
                                <span></span><span></span><span></span><span></span>
                            </li></a>
                        </ul>
                    </nav>

                </NameContainer>
                <ScrollBtn>
                    <Link to="projects">Scroll Down &nbsp;<span><BsMouse /></span></Link>
                </ScrollBtn>
            </main>
        </>
    )
}



export default Wrapper;
