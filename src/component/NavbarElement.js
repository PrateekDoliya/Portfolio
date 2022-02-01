import { FaBars } from 'react-icons/fa';
import { Link as LinkRouter } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import styled from 'styled-components';

export const Nav = styled.nav`
    background-color: transparent;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 10;
    /* position: fixed; */
    /* top: 0; */
`;

export const NavLink = styled(ScrollLink)`
    color: grey;
    display: flex;
    align-items: center;
    text-decoration: none;
    height: 100%;
    font-size: 1.3rem;
    cursor: pointer;
    transition: 0.8s;
    &:hover{
        color: #fff;
    }
`;

export const Logo = styled(LinkRouter)`
    h1 {
        /* font-size: 45px; */
        text-decoration: ;
    }
`;

export const Bars = styled(FaBars)`
    display: none;
    color: black;
    font-size: 1.3rem;
    cursor: pointer;
    @media screen and (max-width:768px) {
        display: block;
    }
`;


export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    .menu-item {
        margin-left: 1rem;
    }
    @media screen and (max-width:768px) {
        display: none;
    }
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 24px;
    @media screen and (max-width:768px) {
        display: none;
    }
`;