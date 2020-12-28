import React, { useState } from "react"
import styled from "styled-components"
import OutstationForm from "./OutstationForm"
import ImageContainer from "./ImageContainer"
import RentalForm from "./RentalForm"
const Hero1 = () => {
  const [rentalComponent, setRentalComponent] = useState(false)

  return (
    <Hero1Container>
      <FormsContainer>
        <ButtonContainer>
          {" "}
          <Button
            round
            rentalComponent={rentalComponent}
            onClick={() => setRentalComponent(false)}
          >
            Outstation
          </Button>
          <Button2
            round
            rentalComponent={rentalComponent}
            onClick={() => setRentalComponent(true)}
          >
            Rental
          </Button2>
        </ButtonContainer>
        {rentalComponent ? <RentalForm /> : <OutstationForm />}
      </FormsContainer>
      <ImageContainer />
    </Hero1Container>
  )
}

export default Hero1

const Hero1Container = styled.div`
;
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: #f6f6f6;

  @media screen and (max-width: 960px) {
    grid-template-columns: 1fr;
    gap: 100px;
  }
`
const FormsContainer = styled.div`
  display: grid;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: flex;
    max-height: 10%;
    flex-direction: column;
    justify-content: space-baseline;
  }
`
const ButtonContainer = styled.div`
  display: grid;
  padding-top: 20px;
  grid-template-columns: 150px 100px;
  align-self: center;
  place-items: center;
  gap: 2px;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    margin-bottom: -16px;
  }
`
const Button2 = styled.button`
  background: ${({ rentalComponent }) =>
    rentalComponent ? "#a7be38" : "#eee"};
  white-space: no-wrap;
  padding: ${({ big }) => (big ? "16px 40px" : "10px 32px")};
  color: #fff;
  color: ${({ rentalComponent }) => (rentalComponent ? "#fff" : "#000")};
  font-size: ${({ big }) => (big ? "20px" : "16px")};
  outline: none;
  border: none;
  text-decoration: none;
  cursor: pointer;
  transition: 0.3s all ease;
  border-radius: ${({ round }) => (round ? "50px" : "none")};

  &:hover {
    transform: translateY(-2px);
    transition: all 0.3s ease;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1);
  }
`

const Button = styled.button`
  background: ${({ rentalComponent }) =>
    rentalComponent ? "#eee" : "#a7be38"};
  white-space: no-wrap;
  padding: ${({ big }) => (big ? "16px 40px" : "10px 32px")};
  color: #fff;
  color: ${({ rentalComponent }) => (rentalComponent ? "#000" : "#fff")};

  font-size: ${({ big }) => (big ? "20px" : "16px")};
  outline: none;
  border: none;
  text-decoration: none;
  cursor: pointer;
  transition: 0.3s all ease;
  border-radius: ${({ round }) => (round ? "50px" : "none")};

  &:hover {
    transform: translateY(-2px);
    transition: all 0.3s ease;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1);
  }
`
