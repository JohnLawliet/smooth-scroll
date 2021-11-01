import React,{useEffect, useState} from 'react'
import './navbar.styles'
import {FaBars} from 'react-icons/fa'
import {animateScroll as scroll} from 'react-scroll'
import { MobileIcon, Nav, NavbarContainer, NavBtn, NavBtnLink, NavItem, NavLinks, NavLogo, NavMenu } from './navbar.styles'

const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if (window.scrollY >= 80)
            setScrollNav(true)
        else
            setScrollNav(false)
    }

    // Right after scrolling 80px vertically, changes navbar to black
    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop()
    }

    return (
        <>
            <Nav scrollNav = {scrollNav}>
                <NavbarContainer className="">
                    <NavLogo to="/" onClick={toggleHome}>Dolla</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                offset={-80}
                                to="about">About
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                offset={-80}
                                to="discover">Discover
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                offset={-80}
                                to="services">Services
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                offset={-80}
                                to="signup">SignUp
                            </NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/signin">Sign In</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
