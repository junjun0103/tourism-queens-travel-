import React, { useState, useContext } from "react"
import { GlobalStateContext } from "../../context/GlobalContextProvider"
import Image from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import axios from "axios"
import Swal from "sweetalert2"
import LanguageConverter from "../ui/languageConverter"

const query = graphql`
  {
    file(relativePath: { eq: "plant.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const ContactUsForm = () => {
  // language status
  const state = useContext(GlobalStateContext) || { lenguage: "CN" }

  const [user, setUser] = useState({
    fname: "",
    sname: "",
    email: "",
    contact: "",
    message: "",
  })
  const { fname, sname, email, contact, message } = user

  //function to fill the state with any input change
  const onChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    })
  }

  //function to send an email
  const sendemail = async user => {
    Swal.fire({
      title: "Thank Yoy",
      text: "We Will contact you ASP",
      icon: "success",
      confirmButtonText: "Ok",
    })

    //call axios
    await axios.post("http://emails.ariza.ml/api/contact-email", user)

    //clean user
    setUser({
      fname: "",
      sname: "",
      email: "",
      contact: "",
      message: "",
    })
  }

  //function to submit the form
  const formSubmit = e => {
    e.preventDefault()

    //call axios function
    sendemail(user)
  }

  //plant image in the background
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)
  return (
    <>
      <div className="contactForm-container">
        <Image fluid={fluid} className="contactForm-img" />
        <div className="contactForm-outside">
          <div className="contactForm-inside">
            <form className="contact-form" onSubmit={formSubmit}>
              <div className="contact-form__label">
                <LanguageConverter
                  tag="h4"
                  valueEn="First Name"
                  valueCn="??????"
                  styleCn="cn-font__noto_light"
                />
              </div>
              <input
                name="fname"
                type="text"
                value={fname}
                onChange={onChange}
                placeholder={state.lenguage === "EN" ? "first name" : "??????"}
                className="contact-form__input contact-form__control"
                required
              />
              <div className="contact-form__label">
                <LanguageConverter
                  tag="h4"
                  valueEn="Surname"
                  valueCn="??????"
                  styleCn="cn-font__noto_light"
                />
              </div>
              <input
                name="sname"
                type="text"
                value={sname}
                onChange={onChange}
                placeholder={state.lenguage === "EN" ? "surname" : "??????"}
                className="contact-form__input contact-form__control"
                required
              />
              <div className="contact-form__label">
                <LanguageConverter
                  tag="h4"
                  valueEn="Email"
                  valueCn="????????????"
                  styleCn="cn-font__noto_light"
                />
              </div>
              <input
                name="email"
                type="email"
                value={email}
                onChange={onChange}
                placeholder={state.lenguage === "EN" ? "email" : "????????????"}
                className="contact-form__input contact-form__control"
                required
              />
              <div className="contact-form__label">
                <LanguageConverter
                  tag="h4"
                  valueEn="Contact"
                  valueCn="????????????"
                  styleCn="cn-font__noto_light"
                />
              </div>
              <input
                name="contact"
                type="number"
                value={contact}
                onChange={onChange}
                placeholder={
                  state.lenguage === "EN" ? "contact number" : "????????????"
                }
                className="contact-form__input contact-form__control"
                required
              />
              <div className="contact-form__label">
                <LanguageConverter
                  tag="h4"
                  valueEn="Message"
                  valueCn="??????"
                  styleCn="cn-font__noto_light"
                />
              </div>
              <textarea
                name="message"
                type="text"
                value={message}
                onChange={onChange}
                placeholder={state.lenguage === "EN" ? "message" : "??????"}
                rows="5"
                className="contact-form__textarea contact-form__control"
                required
              ></textarea>
              <div className="contact-form__label__generator">
                <h4
                  className={`${
                    state.lenguage === "CN" ? "cn-font__noto_light" : ""
                  }`}
                >
                  {state.lenguage === "EN"
                    ? "Random Number: "
                    : "??????????????????: "}
                  {Math.floor(Math.random() * 9999) + 1000}
                </h4>
              </div>
              <input
                name="rnumber"
                type="text"
                placeholder={
                  state.lenguage === "EN" ? "random number" : "??????????????????"
                }
                className="contact-form__input contact-form__control"
                required
              />
              <button
                className={`contact-form__btn btn ${
                  state.lenguage === "CN" ? "cn-font__noto_medium" : ""
                }`}
                type="submit"
              >
                {state.lenguage === "EN" ? "send" : "??????"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactUsForm
