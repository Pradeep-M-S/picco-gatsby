import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { BiMenuAltRight } from "react-icons/bi"
import { menudata } from "../data/menudata"
import { Button } from "./Button"
const Header = () => {
  return (
    <Nav>
      <Navlink to="/">PICCO CABS</Navlink>
      <Bars />
      <NavMenu>
        {menudata.map((item, index) => (
          <Navlink key={index} to={item.link}>
            {item.title}
          </Navlink>
        ))}
      </NavMenu>
      <NavBtn>
        <Button primary round big to="/trips">
          Book a Cab
        </Button>
      </NavBtn>
    </Nav>
  )
}

export default Header

const Nav = styled.nav`
  height: 100px;

  border-radius: 0 0 50px 50px;
  justify-content: space-between;
  display: flex;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  z-index: 100;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
`

const Navlink = styled(Link)`
  color: #000;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 1.2rem;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
`
const Bars = styled(BiMenuAltRight)`
  display: none;
  color: white;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`
const NavMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: -50px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`
