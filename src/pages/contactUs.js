import React from "react"
import Image from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/ui/layout"

import { Map, TileLayer, Marker, Popup } from "react-leaflet"
import L from "leaflet"

const DEFAULT_LAN = 174.73632
const DEFAULT_LAT = -36.80985
const DEFAULT_ZOOM = 17

const markerIcon = () => {
  if (typeof window !== "undefined") {
    return new L.Icon({
      iconUrl: require("../images/map_pin.png"),
      iconRetinaUrl: require("../images/map_pin.png"),
      iconAnchor: null,
      popupAnchor: null,
      shadowUrl: null,
      shadowSize: null,
      shadowAnchor: null,
      iconSize: new L.Point(220, 90),
      className: "leaflet-div-icon",
    })
  }
  return null
}

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
          <h2 className="title-style">contact detail</h2>
          <div className="contactUs-container">
            <div className="contactUs-info">
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
            <div className="contactUs-map">
              <Map center={[DEFAULT_LAT, DEFAULT_LAN]} zoom={DEFAULT_ZOOM}>
                <TileLayer
                  attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                ></TileLayer>

                <Marker
                  position={[DEFAULT_LAT, DEFAULT_LAN]}
                  icon={!!markerIcon ? markerIcon : null}
                >
                  <Popup>Queen's Travel</Popup>
                </Marker>
              </Map>
            </div>
          </div>
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
        </section>
      </Layout>
    </>
  )
}

export default ContactUs
