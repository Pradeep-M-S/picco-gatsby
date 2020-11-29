import { Link } from "gatsby"
import { animateScroll as scroll } from "react-scroll"
import React, { useState } from "react"
import styled from "styled-components"
import { menudata } from "../data/menudata"
import { Turn as Hamburger } from "hamburger-react"
import Logo from "../assets/images/tablogo.webp"
const Header2 = () => {
  const [menuIsOpen, setMenuOpen] = useState(false)

  const scrollToTop = () => {
    scroll.scrollToTop()
  }

  return (
    <NavContainer>
      <LogoContainer onClick={scrollToTop}>
        <img src={Logo} alt="logo" />
      </LogoContainer>
      <BarsContainer>
        <Hamburger
          style={{ color: "inherit" }}
          rounded
          label="Show menu"
          easing="ease"
          color="#000"
          direction="left"
          size={29}
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
    </NavContainer>
  )
}

export default Header2

const NavContainer = styled.div`
  font-family: "Roboto", sans-serif;
  height: 100px;
  border-radius: 0 0 50px 50px;
  justify-content: space-between;
  display: flex;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  z-index: 100454545100000000000000;

  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  background: red;
  background-color: rgba(255, 255, 255);
  /* backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px); */
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
  color: "inherit";
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-50%, 50%);
    cursor: pointer;
  }
  i {
    color: inherit;
  }
`

const LogoContainer = styled.div`
  display: block;
  width: 130px;
  height: 130px;
  margin-left: -10px;
  cursor: pointer;
  img {
    max-width: 100%;
    height: auto;
  }

  @media screen and (max-width: 768px) {
    width: 120px;
    height: 120px;
    margin-left: 18px;
    margin-top: 2px;
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
  font-weight: 500;
  justify-content: space-evenly;
  align-items: center;
  height: 200px;
  border-radius: 50px;
  background: rgba(255, 255, 255, 0.985);
  backdrop-filter: blur(10px);
  --webkit-backdrop-filter: blur(10px);
  transition: all 0.5s ease;
  animation: mymove 0.3s;
  @keyframes mymove {
    from {
      opacity: 0;
      bottom: -100px;
    }
    to {
      opacity: 1;
      bottom: 0;
    }
  }
`
