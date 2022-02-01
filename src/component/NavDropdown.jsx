import React from "react";
import { FaTimes } from "react-icons/fa";
import styled from "styled-components";
import { Link as ScrollLink } from "react-scroll";
// import dropdownImage from '../assets/dropdownImage.png';

const SiderBar = styled.div`
  background: rgba(0,0,0,1);
  position: fixed;
  height: 100vh;
  width: 100%;
  top: 0;
  z-index: 999;
  transition: 0.3s ease-in-out;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  left: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

const CloseIcon = styled(FaTimes)`
  font-size: 2rem;
  color: #fff;
  position: absolute;
  right: 2rem;
  top: 2rem;
  cursor: pointer;
`;
export const NavMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .menu-item + .menu-item {
    margin-top: 2rem;
  }
`;

export const NavLink = styled(ScrollLink)`
  color: #fff;
  cursor: pointer;
  font-size: 1.7rem;
  &:hover {
    color: rgb(119, 119, 121);
  }
`;

export const NavBtn = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5rem;
  font-size: 1.7rem;
`;

export const Img = styled.img`
    width: 270px;
    height:290px;
    position: absolute;
    bottom: 0;
    right: 0;
`;

function NavDropdown({ isOpen, toggle }) {
  return (
    <SiderBar isOpen={isOpen} onClick={toggle}>
      <CloseIcon onClick={ toggle } />
      <NavMenu>
        <NavLink
          onClick={toggle}
          className="menu-item"
          to="projects"
          smooth={true}
        >
          Projects
        </NavLink>
        <NavLink
          onClick={toggle}
          className="menu-item"
          to="about"
          smooth={true}
        >
          About
        </NavLink>
        <NavLink
          onClick={toggle}
          className="menu-item"
          to="contact"
          smooth={true}
        >
          Contact
        </NavLink>
      </NavMenu>
      {/* <Img
          src={dropdownImage}
          alt="img">  
      </Img> */}
      
    </SiderBar>
  );
}

export default NavDropdown;