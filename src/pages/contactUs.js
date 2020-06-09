import React from "react"
import Layout from "../components/layout"
import Title from "../components/title"

const ContactUs = () => {
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
          <div className="contactForm-container"></div>
        </section>
      </Layout>
    </>
  )
}

export default ContactUs
