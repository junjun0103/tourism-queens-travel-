import React from "react"
import Image from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import Title from "../components/title"

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

const ContactUs = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)
  return (
    <>
      <Layout>
        <section className="contactUs-page section section-center">
          <Title title="contact detail"></Title>
          <div className="contactUs-container">
            <div className="contactUs-container_info">
              <h4>Contact :</h4>
              <h4>+64 9 4800 118</h4>
              <h4>Fax :</h4>
              <h4>+64 9 4800 228</h4>
              <h4>Email :</h4>
              <h4>inbound@queenstravel.com</h4>
              <h4>QQ :</h4>
              <h4>2725799562</h4>
              <h4>WeChat :</h4>
              <h4>Queens-NZ</h4>
              <h4>Address :</h4>
              <h4>129A Onewa Road, Northcote, Auckland 0627, New Zealand</h4>
            </div>
            <div className="contactUs-container_map">map</div>
          </div>
          <div className="contactForm-container">
            <Image fluid={fluid} className="contactForm-img"></Image>
            <div className="contactForm-container_outside">
              <div className="contactForm-container_inside">
                <form className="contact-form">
                  <label className="contact-form_label">
                    <h4 className="font-h4-small">First Name</h4>
                  </label>
                  <input
                    name="fname"
                    type="text"
                    placeholder="first name"
                    className="contact-form_input contact-form_control"
                    required
                  ></input>
                  <label className="contact-form_label">
                    <h4 className="font-h4-small">Surname</h4>
                  </label>
                  <input
                    name="sname"
                    type="text"
                    placeholder="sur name"
                    className="contact-form_input contact-form_control"
                    required
                  ></input>
                  <label className="contact-form_label">
                    <h4 className="font-h4-small">Email</h4>
                  </label>
                  <input
                    name="email"
                    type="text"
                    placeholder="email address"
                    className="contact-form_input contact-form_control"
                    required
                  ></input>
                  <label className="contact-form_label">
                    <h4 className="font-h4-small">Contact</h4>
                  </label>
                  <input
                    name="contact"
                    type="text"
                    placeholder="contact number"
                    className="contact-form_input contact-form_control"
                    required
                  ></input>
                  <label className="contact-form_label">
                    <h4 className="font-h4-small">Message</h4>
                  </label>
                  <textarea
                    name="message"
                    type="text"
                    placeholder="message"
                    rows="5"
                    className="contact-form_textarea contact-form_control"
                    required
                  ></textarea>
                  <label className="contact-form_label contact-form_label_generator">
                    <h4 className="font-h4-small">
                      Random Number: {Math.floor(Math.random() * 9999) + 1000}
                    </h4>
                  </label>
                  <input
                    name="rnumber"
                    type="text"
                    placeholder="random number"
                    className="contact-form_input contact-form_control"
                    required
                  ></input>
                  <button className="contact-form_btn btn" type="submit">
                    submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}

export default ContactUs
