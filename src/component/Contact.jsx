import React from 'react';
import styled from 'styled-components';
import { Button } from './ProjectCardElements';
import { BsArrowUp } from "react-icons/bs";
import { Link } from 'react-scroll';

const ContactContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;

    span {
        font-size: 2.5rem;
        font-weight: 500;
        margin-bottom: 1rem;
    }

    @media (min-width: 576px) {
        span {
            font-size: 1.5rem;
        }
    }
 
    @media (max-width: 448px) {
        span {
            font-size: 1.2rem;
        }
    }

    @media (max-width: 575px) {
        span {
            font-size: 1.2rem;
        }
    }

    @media (min-width: 992px) {
        flex-direction: row;
        span {
        margin-bottom: 0;
        font-size: 3rem;
        }
    }
`;

const TopContainer = styled.div`
    width: 40px;
    height: 40px;
    background: #fff;
    position: absolute;
    right: 30px;
    bottom:30px;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 6px !important;
    box-shadow: rgba(0, 0, 0, 0.5) 0px 2px 5px;
    cursor: pointer;
    /* animation: GoTopAnimation 2s; */

    a {
        font-size:1.5rem;
        animation: GoTopAnimation 2s linear 0s infinite;
    }
    a:hover {
        /* height: 50px; */
        /* animation: GoTopAnimation 2s; */
    }

    @media screen and (max-width:768px) {
        right:50px;
    }

    @media screen and (max-width:586px) {
        right:30px;
    }

    @media screen and (max-width:448px) {
        right:10px;
        bottom: 20px;
    }

`;

const Contact = () => {
    return (
        <>
            <section id="contact" className="bg-light  pb-5 post" >
            <div className="container py-3">
                <span className="projectHeading">Get In Touch</span>
                <ContactContainer className=" col-10  mx-auto py-4 AboutCard mt-4">
                    <span>prateekdoliya00@gmail.com</span>
                    <a
                        className="btn"
                        href="mailto: prateekdoliya00@gmail.com"
                        target="prateek"
                        rel="noopener noreferrer"
                    >
                        <Button>
                            Send Mail
                        </Button>
                    </a>
                </ContactContainer>
            </div>
            <TopContainer>
                <Link to="main"><BsArrowUp/></Link>
            </TopContainer>
        </section>
        </>
    )
}

export default Contact;
