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
  const state = useContext(GlobalStateContext) || { lenguage: "EN" }

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
              <label className="contact-form__label">
                <LanguageConverter
                  tag="h4"
                  valueEn="First Name"
                  valueCn="名字"
                  styleCn="cn-font__noto_light"
                ></LanguageConverter>
              </label>
              <input
                name="fname"
                type="text"
                value={fname}
                onChange={onChange}
                placeholder={state.lenguage === "EN" ? "first name" : "名字"}
                className="contact-form__input contact-form__control"
                required
              ></input>
              <label className="contact-form__label">
                <LanguageConverter
                  tag="h4"
                  valueEn="Surname"
                  valueCn="姓氏"
                  styleCn="cn-font__noto_light"
                ></LanguageConverter>
              </label>
              <input
                name="sname"
                type="text"
                value={sname}
                onChange={onChange}
                placeholder={state.lenguage === "EN" ? "surname" : "姓氏"}
                className="contact-form__input contact-form__control"
                required
              ></input>
              <label className="contact-form__label">
                <LanguageConverter
                  tag="h4"
                  valueEn="Email"
                  valueCn="联系邮件"
                  styleCn="cn-font__noto_light"
                ></LanguageConverter>
              </label>
              <input
                name="email"
                type="email"
                value={email}
                onChange={onChange}
                placeholder={state.lenguage === "EN" ? "email" : "联系邮件"}
                className="contact-form__input contact-form__control"
                required
              ></input>
              <label className="contact-form__label">
                <LanguageConverter
                  tag="h4"
                  valueEn="Contact"
                  valueCn="连络电话"
                  styleCn="cn-font__noto_light"
                ></LanguageConverter>
              </label>
              <input
                name="contact"
                type="number"
                value={contact}
                onChange={onChange}
                placeholder={
                  state.lenguage === "EN" ? "contact number" : "连络电话"
                }
                className="contact-form__input contact-form__control"
                required
              ></input>
              <label className="contact-form__label">
                <LanguageConverter
                  tag="h4"
                  valueEn="Message"
                  valueCn="留言"
                  styleCn="cn-font__noto_light"
                ></LanguageConverter>
              </label>
              <textarea
                name="message"
                type="text"
                value={message}
                onChange={onChange}
                placeholder={state.lenguage === "EN" ? "message" : "留言"}
                rows="5"
                className="contact-form__textarea contact-form__control"
                required
              ></textarea>
              <label className="contact-form__label__generator">
                <h4
                  className={`${
                    state.lenguage === "CN" ? "cn-font__noto_light" : ""
                  }`}
                >
                  {state.lenguage === "EN"
                    ? "Random Number: "
                    : "请输入验证码: "}
                  {Math.floor(Math.random() * 9999) + 1000}
                </h4>
              </label>
              <input
                name="rnumber"
                type="text"
                placeholder={
                  state.lenguage === "EN" ? "random number" : "请输入验证码"
                }
                className="contact-form__input contact-form__control"
                required
              ></input>
              <button className="contact-form__btn btn" type="submit">
                {state.lenguage === "EN" ? "send" : "titleCn"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactUsForm
