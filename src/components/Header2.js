import { Link } from "gatsby"
import React, { useState } from "react"
import styled from "styled-components"
import { menudata } from "../data/menudata"
import { Button } from "./Button"
import { Turn as Hamburger } from "hamburger-react"
import Logo from "../assets/images/tablogo.png"
const Header2 = () => {
  const [menuIsOpen, setMenuOpen] = useState(false)

  return (
    <NavContainer>
      <LogoContainer>
        <img src={Logo} alt="logo" />
      </LogoContainer>
      <BarsContainer>
        <Hamburger
          rounded
          label="Show menu"
          easing="ease"
          color="#000"
          direction="right"
          size={30}
          distance="md"
          duration={0.4}
          onToggle={toggled => {
            if (toggled) {
              setMenuOpen(true)
            } else {
              setMenuOpen(false)
            }
          }}
        />
      </BarsContainer>
      <NavMenu>
        {menudata.map((item, index) => (
          <Navlink key={index} to={item.link}>
            {item.title}
          </Navlink>
        ))}
      </NavMenu>
      {menuIsOpen ? (
        <NavMobileMenu>
          {menudata.map((item, index) => (
            <NavMobilelink key={index} to={item.link}>
              {item.title}
            </NavMobilelink>
          ))}
        </NavMobileMenu>
      ) : null}
      <NavBtn>
        <Button primary round big to="/trips">
          Book a Taxi
        </Button>
      </NavBtn>
    </NavContainer>
  )
}

export default Header2

const NavContainer = styled.div`
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
  background: red;
  background-color: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  color: #000;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
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

const NavMobilelink = styled(Link)`
  color: #000;
  display: flex;
  align-items: center;
  text-decoration: none;
  border-bottom: 0.5px solid grey;
  width: 80%;
  justify-content: center;
  font-size: 1.2rem;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
`
const BarsContainer = styled.div`
  display: none;
  color: white;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-50%, 50%);
    cursor: pointer;
  }
`

const LogoContainer = styled.div`
  display: block;
  width: 100px;
  height: 100px;
  margin: 10px;
  cursor: pointer;
  img {
    max-width: 100%;
    height: auto;
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

const NavMobileMenu = styled.div`
  position: absolute;
  top: 100px;
  right: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  width: 100vw;
  justify-content: space-evenly;
  align-items: center;
  height: 200px;
  border-radius: 50px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  --webkit-backdrop-filter: blur(10px);
  transition: all 0.5s ease;
  animation: mymove 0.3s;
  @keyframes mymove {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
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