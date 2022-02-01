import React from 'react';
import { Nav, Logo, NavLink, Bars, NavMenu} from './NavbarElement';


const Navbar = ({ toggle }) => {
    return (
        <>
            <div className="container">
                <Nav>
                    <Logo to="/">
                        <h1 className="display-4" style={{fontFamily:'Dongle, sans-serif'}}><span className="text-light">P</span><span className="text-danger">D</span></h1>
                    </Logo>
                    <NavMenu>
                        <NavLink className="menu-item" to="projects" smooth={true}>
                            Projects
                        </NavLink>
                        <NavLink className="menu-item" to="about" smooth={true}>
                            About
                        </NavLink>
                        <NavLink className="menu-item" to="contact" smooth={true}>
                            Contact
                        </NavLink>
                    </NavMenu>
                    <Bars onClick={ toggle } className="text-light" />
                </Nav>
            </div>  
        </>
    )
}

export default Navbar;