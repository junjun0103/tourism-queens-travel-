import React from "react"
import ContactUsForm from "../components/ui/contactUsForm"
import Layout from "../components/ui/layout"
import "../css/pages/contactUs.css"
import Title from "../components/ui/title"

import { Map, TileLayer, Marker, Popup } from "react-leaflet"
import L from "leaflet"

const DEFAULT_LAN = 174.7364
const DEFAULT_LAT = -36.8102
const DEFAULT_ZOOM = 17

// const markerIcon = () => {
//   if (typeof window !== "undefined") {
//     return new L.Icon({
//       iconUrl: require("../images/map_pin.png"),
//       iconRetinaUrl: require("../images/map_pin.png"),
//       iconAnchor: null,
//       popupAnchor: null,
//       shadowUrl: null,
//       shadowSize: null,
//       shadowAnchor: null,
//       iconSize: new L.Point(220, 90),
//       className: "leaflet-div-icon",
//     })
//   }
//   return null
// }

const ContactUs = () => {
  return (
    <>
      <Layout>
        <section className="contactUs-page section section-center">
          <Title titleEn="contact detail" titleCn="在线咨询"></Title>
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
              <Map
                center={[DEFAULT_LAT, DEFAULT_LAN]}
                zoom={DEFAULT_ZOOM}
                className="indexOrder"
              >
                <TileLayer
                  attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                ></TileLayer>

                <Marker
                  position={[DEFAULT_LAT, DEFAULT_LAN]}
                  // icon={!!markerIcon ? markerIcon : null}
                >
                  <Popup>Queen's Travel</Popup>
                </Marker>
              </Map>
            </div>
          </div>

          <ContactUsForm></ContactUsForm>
        </section>
      </Layout>
    </>
  )
}

export default ContactUs
