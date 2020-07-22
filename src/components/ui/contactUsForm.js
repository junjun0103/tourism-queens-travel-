import React from "react"
import Image from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

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
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)
  return (
    <>
      <div className="contactForm-container">
        <Image fluid={fluid} className="contactForm-img"></Image>
        <div className="contactForm-outside">
          <div className="contactForm-inside">
            <form className="contact-form">
              <label className="contact-form__label">
                <h4>First Name</h4>
              </label>
              <input
                name="fname"
                type="text"
                placeholder="first name"
                className="contact-form__input contact-form__control"
                required
              ></input>
              <label className="contact-form__label">
                <h4>Surname</h4>
              </label>
              <input
                name="sname"
                type="text"
                placeholder="sur name"
                className="contact-form__input contact-form__control"
                required
              ></input>
              <label className="contact-form__label">
                <h4>Email</h4>
              </label>
              <input
                name="email"
                type="text"
                placeholder="email address"
                className="contact-form__input contact-form__control"
                required
              ></input>
              <label className="contact-form__label">
                <h4>Contact</h4>
              </label>
              <input
                name="contact"
                type="text"
                placeholder="contact number"
                className="contact-form__input contact-form__control"
                required
              ></input>
              <label className="contact-form__label">
                <h4>Message</h4>
              </label>
              <textarea
                name="message"
                type="text"
                placeholder="message"
                rows="5"
                className="contact-form__textarea contact-form__control"
                required
              ></textarea>
              <label className="contact-form__label contact-form__label__generator">
                <h4>
                  Random Number: {Math.floor(Math.random() * 9999) + 1000}
                </h4>
              </label>
              <input
                name="rnumber"
                type="text"
                placeholder="random number"
                className="contact-form__input contact-form__control"
                required
              ></input>
              <button className="contact-form__btn btn" type="submit">
                send
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactUsForm
