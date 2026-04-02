import React from "react";
import {Nav, NavLink, NavMenu } from "./Navbar/NavbarElements";

const Navbar = () => {
    return (
        <>
            <Nav className="w-full">
                <NavMenu>
                    <NavLink to="/about" activeStyle>
                        About
                    </NavLink>
                    <NavLink to="/contact" activeStyle>
                        Contact Us
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;