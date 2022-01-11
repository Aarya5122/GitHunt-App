import React, { useContext, useState, Fragment } from "react";

import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Collapse,
    NavbarToggler,
    NavbarText

} from "reactstrap"

import { Link } from "react-router-dom"

import UserContext from "../context/UserContext";

import { FaUser } from "react-icons/fa"

const Header = () => {

    const context = useContext(UserContext)

    const [ isOpen, setIsOpen ] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return(
        <Navbar color="warning" light expand="md">
            <NavbarBrand tag={Link} to="/" className="text-white">
              GitHunt
            </NavbarBrand>
            {
                context.user ? (
                    <div className="ms-auto px-3">
                    <FaUser className="text-white"/>
                        <NavbarText className="text-white ps-1">
                            {context.user.email}
                        </NavbarText>
                    </div>
                )
                :
                ("")
            }
            <NavbarToggler onClick={toggle}/>
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ms-auto" navbar>
                    {
                        context.user ? 
                        (
                            <Fragment>
                                <NavItem>
                                    <NavLink onClick={()=>(context.setUser(null))} className="text-white" >
                                        Logout
                                    </NavLink>
                                </NavItem>
                            </Fragment>
                        ) 
                        :
                        (
                            <Fragment>
                                <NavItem>
                                    <NavLink tag={Link} to="/signin" className="text-white" >
                                        Signin
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} to="/signup" className="text-white" >
                                        Signup
                                    </NavLink>
                                </NavItem>
                            </Fragment>
                        ) 
                    }
                </Nav>
            </Collapse>
        </Navbar>
    )
}

export default Header