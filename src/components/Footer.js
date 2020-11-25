import React from "react"
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa"
import { BiTaxi } from "react-icons/bi"

import {
  FooterContainer,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterCityItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./Footer.elements"

const cityData = [
  "Madurai",
  "Chennai",
  "Bangalore",
  "Ramnad",
  "Pondicherry",
  "Tirunelveli",
  "Trichy",
  "Kerala",
  "Coimbatore",
  "Karnataka",
  "All Over South India",
]

const servicesData = [
  "Local Booking",
  "Rental Cabs",
  "Outstation Rides",
  "Offers",
  "Gift Vouchers",
  "Hill stations",
]
function Footer() {
  return (
    <FooterContainer>
      <FooterLinksContainer>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>Our best routes</FooterLinkTitle>
            <FooterCityItems>
              {cityData.map((city, index) => {
                return <FooterLink key={index}>{city}</FooterLink>
              })}
            </FooterCityItems>
          </FooterLinkItems>{" "}
          <FooterLinkItems>
            <FooterLinkTitle>Our Services</FooterLinkTitle>
            <FooterCityItems>
              {servicesData.map((service, index) => {
                return <FooterLink key={index}>{service}</FooterLink>
              })}
            </FooterCityItems>
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLinkTitle>Address</FooterLinkTitle>
            <FooterLink to="/">No.187 Palace Road</FooterLink>
            <FooterLink to="/"> Madurai-625001 Tamilnadu India</FooterLink>
          </FooterLinkItems>
        </FooterLinksWrapper>
        {/* <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>Contact </FooterLinkTitle>
            <FooterLink to="/">+91 915 915 7070</FooterLink>
            <FooterLink to="/">piccocabs@gmail.com</FooterLink>
            <FooterLink to="/">Terms & Conditions</FooterLink>
          </FooterLinkItems>
        </FooterLinksWrapper> */}
      </FooterLinksContainer>
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to="/">
            <BiTaxi
              css={`
                margin-right: 10px;
              `}
            />
            PICCO
          </SocialLogo>
          <WebsiteRights>
            Picco Cabs © 2020 || Powered By NoNo Design
          </WebsiteRights>{" "}
          <WebsiteRights>Terms & Conditions Applied </WebsiteRights>
          <SocialIcons>
            <SocialIconLink href="/" target="_blank" aria-label="Facebook">
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank" aria-label="Instagram">
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink
              href={""}
              rel="noopener noreferrer"
              target="_blank"
              aria-label="Youtube"
            >
              <FaYoutube />
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank" aria-label="Twitter">
              <FaTwitter />
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank" aria-label="LinkedIn">
              <FaLinkedin />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  )
}

export default Footer
