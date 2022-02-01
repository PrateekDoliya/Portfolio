import React from 'react';
import { FaLinkedinIn, FaInstagram, FaGithub, FaFacebookF } from 'react-icons/fa';
import styled from 'styled-components';


const MainContainer = styled.div`
    width: 50px;
    height: 200px;
    position: fixed;
    display: flex;
    /* justify-content: center; */
    flex-direction: column;
    /* align-items: center; */
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    background: transparent;
    /* border: 2px solid red; */

    @keyframes linkAnimation {
        from {
            transform: rotate(0);
            /* transform:scale(1); */
        }

        to {
            transform: rotate(180deg);
            /* transform:scale(2); */
        }

    }

    a {
        font-size: 1.9rem;
        transition: all 0.3s linear;
        color: grey;
    }
    
`;

const LinkHolder = styled.div`
        width: 40px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top:10px !important;
        padding-bottom: 8px !important;

        &:hover {
            animation: linkAnimation .1s linear 3; 
        }
`;


const SocilaLinks = () => {
    return (
        <>
          <MainContainer>
              
            <LinkHolder>
                <a target="_prateek" href="https://github.com/PrateekDoliya"><FaGithub /></a>
            </LinkHolder>
              
            <LinkHolder>
                <a target="_prateek" href="https://www.linkedin.com/in/prateek-doliya-4681a9208/"><FaLinkedinIn /></a>
            </LinkHolder>
              
            <LinkHolder>
                <a target="_prateek" href="https://www.instagram.com/prateek_doliya/?hl=en"><FaInstagram/></a>
            </LinkHolder>

            <LinkHolder>
                <a target="_prateek" href="https://www.facebook.com/prateek.doliya001"><FaFacebookF/></a>
            </LinkHolder>

          </MainContainer>  
        </>
    )
}

export default SocilaLinks;
