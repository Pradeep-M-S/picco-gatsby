import React, { useState } from "react"
import styled from "styled-components"
import { CgSpinner as CgSpinner2 } from "react-icons/cg"
import { Button as Button2 } from "./Button"
import Modal from "react-modal"
import Logo from "../assets/images/booked.svg"
const RentalForm = () => {
  const [values, setValues] = useState({
    from: "",
    phno: "",
    name: "",
    package: "",
  })

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
    setLoading(true)
    //calling smtp service with the form values
    sendEmail(values.name, values.from, values.package, values.phno)
  }

  //smtp service
  function sendEmail(name, from, pckg, phno) {
    window.Email.send({
      Host: "smtp.gmail.com",
      Username: "pradeepmsblogspot@gmail.com",
      Password: "ibxdnieqkadegcua",
      From: "pradeepmsblogspot@gmail.com",
      To: "athmikasundaram@gmail.com",
      Subject: `Mr/Ms.${name} Booked a Cab`,
      Body: `Name: ${name} <br/> From : ${from} <br/>  Package  : ${pckg}  <br/>  Phone Number : ${phno} `,
    }).then(() => {
      setLoading(false)
      setModal2IsOpen(true)

      setTimeout(() => {
        setModal2IsOpen(false)
      }, 3000)
    })
  }

  return (
    <FormContainer2>
      <FormContent2>
        <Form2 onSubmit={handleSubmit}>
          <FormInputs2></FormInputs2>
          <FormInputs2>
            <FormLabel2>Name </FormLabel2>
            <FormInput2
              type="text"
              name="name"
              placeholder="Enter your Name"
              value={values.name}
              onChange={handleChange}
              required
            />
          </FormInputs2>
          <FormInputs2>
            <FormLabel2>From </FormLabel2>
            <FormInput2
              autoComplete="off"
              type="text"
              name="from"
              placeholder="Enter your Pickup Point"
              value={values.from}
              onChange={handleChange}
              required
            />
          </FormInputs2>
          <FormInputs2>
            <FormLabel2>Package </FormLabel2>
            <PackageSelectorWrapper>
              <PackageSelector2 name="package" onChange={handleChange}>
                <option value="1hr  10km">1hr 10km</option>
                <option value="2hr  20km">2hr 20km</option>
                <option value="3hr  30km">3hr 30km</option>
                <option value="4hr  40km">4hr 40km</option>
                <option value="6hr  60km">6hr 60km</option>
                <option value="8hr  80km">8hr 80km</option>
                <option value="10hr  100km">10hr 100km</option>
                <option value="12hr  120km">12hr 120km</option>
              </PackageSelector2>
            </PackageSelectorWrapper>
          </FormInputs2>
          <FormInputs2>
            <FormLabel2>Ph.no </FormLabel2>
            <FormInput2
              type="tel"
              name="phno"
              maxLength="10"
              placeholder="Enter your phone number"
              value={values.phno}
              onChange={handleChange}
              required
            />
          </FormInputs2>
          {loading ? (
            <FormInputBtn2
              style={{
                margin: "10px auto",
              }}
            >
              <FormInputBtnSpin2>
                <CgSpinner2 />
              </FormInputBtnSpin2>
            </FormInputBtn2>
          ) : (
            <FormInputBtn2
              //   onClick={() => setLoading(true)}
              type="submit"
              style={{
                margin: "10px auto",
              }}
            >
              Book Now
            </FormInputBtn2>
          )}
          <FormInputs2></FormInputs2>
        </Form2>
        {/* {modal2ISOpen ? ( */}
        <Modal
          style={{
            overlay: {
              backgroundColor: "#fff",
              backdropFilter: "blur(40px)",
              zIndex: "100000000000000",
            },
            content: {
              backgroundColor: "#a7be38",
              // boxShadow: "0 3px 1px black",
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
          <SVGContainer2>
            <img src={Logo} alt="booked" />
          </SVGContainer2>
          <h1>Booked Succesfully</h1>
          <Button2
            primary
            round
            onClick={closeModal}
            style={{
              margin: "0 auto",
              color: "#fff",
              backgroundColor: "#000",
            }}
          >
            {" "}
            O K
          </Button2>
        </Modal>
      </FormContent2>
    </FormContainer2>
  )
}

export default RentalForm

const FormContainer2 = styled.div`
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
const FormContent2 = styled.div`
  border-radius: 0 10px 10px 0;
  color: black;
  width: 100%;
`
const Form2 = styled.form`
  display: grid;
  grid-template-rows: repeat(5, 1fr);
  height: 90%;
  width: 100%;
  gap: 8px;
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
    height: 50%;
    width: 70%;
    gap: 10px;
    display: grid;
    grid-template-rows: repeat(7, 1fr);
  }
`

const FormInputs2 = styled.div`
  margin-bottom: 0.1rem;
  width: 85%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 0.3fr 1fr;
  p {
    font-size: 0.8rem;
    color: #f00e0e;
  }

  @media screen and (min-width: 960px) {
    width: 80%;
  }
`

const FormLabel2 = styled.label`
  display: flex;
  height: 40px;
  place-items: center;
  font-weight: 500;
  font-size: 0.9rem;
  padding-left: 10px;
  color: rgba(0, 0, 0, 0.678);
  background-color: rgba(235, 235, 235, 0.9);

  @media screen and (min-width: 960px) {
    font-size: 1rem;
  }
`
const FormInput2 = styled.input`
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
    color: grey;
    transition: all 0.6s ease;
    background-color: rgb(235, 235, 235, 0.9);
    font-size: 0.9rem;
    font-weight: 300;

    @media screen and (min-width: 960px) {
      font-size: 1rem;
    }
    /* margin-bottom: 7%; */
  }

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`
const FormInputBtn2 = styled.button`
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
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: 2px;
  padding: 0px;
  transition: all 0.4s ease-out;

  &:hover {
    cursor: pointer;
    transition: all 0.4s ease-out;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
    background: #a1a2a1;
    color: #fff;
    font-weight: bold;
  }

  @media screen and (min-width: 960px) {
    width: 50%;
    height: 40px;
    margin: 0 auto 0 auto;
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

const FormInputBtnSpin2 = styled.button`
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
const SVGContainer2 = styled.div`
  width: 150px;
  height: 150px;
  margin: 0 auto;

  img {
    max-width: 100%;
    max-height: 100%;
  }
`
const PackageSelector2 = styled.select`
  height: 35px;
  width: 70vw;
  font-size: 1rem;

  @media screen and (min-width: 960px) {
    font-size: 0.8rem;
    width: 100px;
  }
`

const PackageSelectorWrapper = styled.div`
  width: 100%;
  position: relative;
  border-color: transparent transparent rgba(0, 0, 0, 0.1) transparent;
  select {
    width: 100%;
    background: #ebebeb;
    outline: none;
    border-color: transparent transparent rgba(0, 0, 0, 0.1) transparent;
    height: 100%;
    font-size: 1rem;
    padding: 5px;
    color: grey;

    @media screen and (max-width: 768px) {
      font-size: 0.8rem;
    }
  }
  option {
    font-size: 1rem;
    @media screen and (max-width: 768px) {
      font-size: 0.8rem;
    }
  }
`
