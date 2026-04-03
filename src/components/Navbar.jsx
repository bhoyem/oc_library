import React from "react";
import {Nav, NavLink, NavMenu } from "./Navbar/NavbarElements";

const Navbar = () => {
    return (
        <>
            <Nav className="w-full">
                <NavMenu>
                    <NavLink to="/">
                        Home
                    </NavLink>
                    <NavLink to="/about">
                        About
                    </NavLink>
                    <NavLink to="/contact">
                        Contact Us
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;