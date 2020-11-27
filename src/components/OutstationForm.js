import React, { useState } from "react"
import { Button } from "./Button"
import styled from "styled-components"
import { CgSpinner } from "react-icons/cg"
import Modal from "react-modal"
import Logo from "../assets/images/booked.svg"
const OutstationForm = () => {
  const [values, setValues] = useState({
    from: "",
    to: "",
    date: "",
    phno: "",
    oneway: "",
    twoway: "",
    sharingpooling: "",
    name: "",
  })

  //radio button state
  const [way, setWay] = useState("One-way")
  const [loading, setLoading] = useState(false)
  const [modal2ISOpen, setModal2IsOpen] = useState(false)

  const handleChange = e => {
    const { name, value } = e.target

    setValues({
      ...values,
      [name]: value,
    })
  }

  const closeModal = () => {
    setModal2IsOpen(false)
  }

  const handleSubmit = e => {
    e.preventDefault()

    //calling smtp service with the form values
    sendEmail(
      values.from,
      values.to,
      values.date,
      values.phno,
      way,
      values.name
    )
  }

  //smtp service
  function sendEmail(from, to, date, phno, way, name) {
    window.Email.send({
      Host: "smtp.gmail.com",
      Username: "pradeepmsblogspot@gmail.com",
      Password: "ibxdnieqkadegcua",
      From: "pradeepmsblogspot@gmail.com",
      To: "athmikasundaram@gmail.com",
      Subject: `Mr/Ms.${name} Booked a Cab`,
      Body: `Name: ${name} <br/> From : ${from} <br/>  To : ${to}  <br/>  date : ${date} <br/>  Phone Number : ${phno} <br/> Ride Option : ${way}`,
    }).then(() => {
      setLoading(false)
      setModal2IsOpen(true)

      setTimeout(() => {
        setModal2IsOpen(false)
      }, 3000)
    })
  }

  return (
    <FormContainer>
      <FormContent>
        <Form onSubmit={handleSubmit} noValidate>
          <FormSelectorComponent>
            <Button to="/">Outstations</Button>
            <Button to="/rentals">Rentals</Button>
          </FormSelectorComponent>{" "}
          <>
            <RBGroupGrouper>
              <RBGroup>
                <RB
                  type="radio"
                  name="One-way"
                  value="One-way"
                  checked={way === "One-way"}
                  onChange={e => setWay("One-way")}
                />
                One-way Drop
              </RBGroup>
              <RBGroup>
                {" "}
                <RB
                  type="radio"
                  name="Two-way"
                  value="Two-way"
                  checked={way === "Two-way"}
                  onChange={e => setWay("Two-way")}
                  required
                />
                Round Trip{" "}
              </RBGroup>
              <RBGroup>
                <RB
                  type="radio"
                  name="Sharing/Pooling"
                  value="Sharing/Pooling"
                  checked={way === "Sharing/Pooling"}
                  onChange={e => setWay("Sharing/Pooling")}
                />
                Sharing / Pooling{" "}
              </RBGroup>
            </RBGroupGrouper>

            <FormInputs>
              <FormLabel>Name </FormLabel>
              <FormInput
                type="text"
                name="name"
                placeholder="Enter your Name"
                value={values.name}
                onChange={handleChange}
                required
              />
            </FormInputs>
          </>
          <FormInputs>
            <FormLabel>From </FormLabel>
            <FormInput
              autoComplete="off"
              type="text"
              name="from"
              placeholder="Enter your Pickup Point"
              value={values.from}
              onChange={handleChange}
              required
            />
          </FormInputs>
          <FormInputs>
            <FormLabel>To </FormLabel>
            <FormInput
              type="text"
              name="to"
              placeholder="Enter your Drop Point"
              value={values.to}
              onChange={handleChange}
              required
            />
          </FormInputs>
          <FormInputs>
            <FormLabel>Date</FormLabel>
            <FormInput
              type="date"
              name="date"
              placeholder="Enter the date"
              value={values.date}
              onChange={handleChange}
              required
            />
          </FormInputs>
          <FormInputs>
            <FormLabel>Ph.no </FormLabel>
            <FormInput
              type="tel"
              name="phno"
              maxLength="10"
              placeholder="Enter your phone number"
              value={values.phno}
              onChange={handleChange}
              required
            />
          </FormInputs>
          {loading ? (
            <FormInputBtn>
              <FormInputBtnSpin>
                <CgSpinner />
              </FormInputBtnSpin>
            </FormInputBtn>
          ) : (
            <FormInputBtn
              primary
              small
              round
              onClick={() => setLoading(true)}
              type="submit"
              style={{
                margin: "10px auto",
              }}
            >
              Book Now
            </FormInputBtn>
          )}
        </Form>
        {/* {modal2ISOpen ? ( */}
        <Modal
          style={{
            overlay: {
              backgroundColor: "#fff",
              backdropFilter: "blur(40px)",
              zIndex: "100000000000000",
            },
            content: {
              backgroundColor: "#151719",
              boxShadow: "0 3px 15px black",
              zIndex: "1000000000000",
              border: "none",
              borderRadius: "20px",
              color: "white",
              top: "50%",
              left: "50%",
              right: "auto",
              bottom: "auto",
              marginRight: "-50%",
              transform: "translate(-50%, -50%)",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            },
          }}
          isOpen={modal2ISOpen}
          onRequestClose={() => setModal2IsOpen(false)}
        >
          <SVGContainer>
            <img src={Logo} alt="booked" />
          </SVGContainer>
          <h1>Booked Succesfully</h1>
          <Button
            primary
            round
            onClick={closeModal}
            style={{
              margin: "0 auto",
            }}
          >
            {" "}
            O K
          </Button>
        </Modal>
      </FormContent>
    </FormContainer>
  )
}

export default OutstationForm

const FormContainer = styled.div`
  margin: 20px auto 0 auto;
  width: 80%;
  height: 50%;
  z-index: 1000;
  display: grid;

  @media screen and (min-width: 960px) {
    margin: 50px auto;
    width: 100%;
    height: 100%;
  }
`
const FormContent = styled.div`
  border-radius: 0 10px 10px 0;
  position: relative;
  color: black;
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
  align-items: center;
  border: 2px solid white;
  background-color: rgb(255, 255, 255);
  box-shadow: 0 5px 7px rgba(0, 0, 0, 0.2);
  border-radius: 5%;
  margin: 0 auto;
  h1 {
    font-size: 1rem;
    width: 80%;
    color: black;
  }

  @media screen and (min-width: 960px) {
    height: 60%;
    width: 70%;
    gap: 5px;
    display: grid;
    grid-template-rows: repeat(6, 1fr);
    justify-content: center;
    align-items: center;
  }
`
const FormSelectorComponent = styled.div`
  display: none;
`

const RBGroupGrouper = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  font-size: 1rem;
  font-weight: 600;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  margin-bottom: 7%;
`
const RBGroup = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  @media screen and (min-width: 960px) {
    margin-top: 20px;
  }
`
const RB = styled.input`
  width: 20px;
  height: 25px;
`
const FormInputs = styled.div`
  margin-bottom: 0.1rem;
  width: 90%;
  display: grid;
  grid-template-columns: 20% 80%;

  p {
    font-size: 0.8rem;
    color: #f00e0e;
  }

  @media screen and (min-width: 960px) {
    margin-bottom: 1px;
    width: 97%;
    margin: 0 auto;
  }
`
const FormLabel = styled.label`
  display: flex;
  height: 40px;
  place-items: center;
  font-size: 1rem;
  padding-left: 10px;
  color: rgba(0, 0, 0, 0.578);
  background-color: rgba(235, 235, 235, 0.9);

  @media screen and (min-width: 960px) {
    font-size: 1rem;
  }
`
const FormInput = styled.input`
  display: block;
  padding-left: 10px;
  outline: none;
  border-radius: 2px;
  height: 40px;
  width: 100%;
  border: none;
  background-color: rgba(235, 235, 235, 0.9);
  transition: all 0.6s ease;
  position: relative;
  &::placeholder {
    color: #000;
    transition: all 0.6s ease;
    background-color: rgb(235, 235, 235, 0.9);
    font-size: 1rem;
    /* margin-bottom: 7%; */
  }

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[value="00-00-0000"]::-webkit-datetime-edit {
    color: transparent;
  }
  input[type="date"] {
    color: blue;
  }
`
const FormInputBtn = styled.button`
  width: 40%;
  height: 50px;
  margin-bottom: 20px;
  border-radius: 5px;
  background-color: #c3e214;
  background-color: #b2ce25;
  outline: none;
  border: none;
  color: #fff;
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 2px;
  padding: 0px;
  transition: all 0.4s ease-out;

  &:hover {
    cursor: pointer;
    transition: all 0.4s ease-out;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
    background: rgba(0, 0, 0, 0.9);
    color: #89a006;
    font-weight: bold;
  }

  @media screen and (min-width: 960px) {
    width: 50%;
    height: 40px;
    margin: 0 auto 20px auto;
    border-radius: 50px;
    background-color: #b2ce25;
    outline: none;
    border: none;
    text-transform: uppercase;
    font-size: 1.2rem;
    letter-spacing: 2px;
    font-weight: 500;
    transition: all 0.4s ease-out;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
  }
`

const FormInputBtnSpin = styled.button`
  animation: spin 2s infinite;
  background: none;
  border: none;
  outline: none;
  width: 100%;
  font-size: 1rem;
  margin: 0 auto;
  color: #fff;
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`
const SVGContainer = styled.div`
  width: 150px;
  height: 150px;
  margin: 0 auto;

  img {
    max-width: 100%;
    max-height: 100%;
  }
`
