import React from "react"
import ContactUsForm from "../components/ui/contactUsForm"
import Layout from "../components/ui/layout"
import "../css/pages/contactUs.css"
import Title from "../components/ui/title"
import LanguageConverter from "../components/ui/languageConverter"
import SEO from "../components/SEO"

import { Map, TileLayer, Marker, Popup } from "react-leaflet"

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
        <SEO title_en="Contact Us" title_cn="在线咨询" desc_en="Contact:+64 9 4800 118, Email:inbound@queenstravel.com Address:129A Onewa Road, Northcote, Auckland 0627, New Zealand" desc_cn="联系电话:+64 9 4800 118, 联系邮件:inbound@queenstravel.com 联系QQ:2725799562, 联系微信:Queens-NZ, 联系地址:129A Onewa Road, Northcote, Auckland 0627, New Zealand" />
        <section className="contactUs-page section section-center">
          <Title titleEn="contact detail" titleCn="在线咨询"></Title>
          <div className="contactUs-container">
            <div className="contactUs-info">
              <LanguageConverter
                tag="h4"
                valueEn="Contact :"
                valueCn="联系电话 :"
                styleCn="cn-font__noto_light"
              />
              <h4>+64 9 4800 118</h4>
              <LanguageConverter
                tag="h4"
                valueEn="Fax :"
                valueCn="联系传真 :"
                styleCn="cn-font__noto_light"
              />
              <h4>+64 9 4800 228</h4>
              <LanguageConverter
                tag="h4"
                valueEn="Email :"
                valueCn="联系邮件 :"
                styleCn="cn-font__noto_light"
              />
              <h4>inbound@queenstravel.com</h4>
              <LanguageConverter
                tag="h4"
                valueEn="QQ :"
                valueCn="联系QQ :"
                styleCn="cn-font__noto_light"
              />
              <h4>2725799562</h4>
              <LanguageConverter
                tag="h4"
                valueEn="WeChat :"
                valueCn="联系微信 :"
                styleCn="cn-font__noto_light"
              />
              <h4>Queens-NZ</h4>
              <LanguageConverter
                tag="h4"
                valueEn="Address :"
                valueCn="联系地址 :"
                styleCn="cn-font__noto_light"
              />
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
                />

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
