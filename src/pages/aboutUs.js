import React from "react"
import Layout from "../components/layout"
import logo from "../images/logo_bottom.png"
import { FaMedal } from "react-icons/fa"
import Awards from "../components/awards"

const AboutUs = () => {
  return (
    <>
      <Layout
        lenguage="EN"
      >
        <section className="aboutUs-page section section-center">
          <div className="aboutUs-container">
            <div className="aboutUs-content">
              <h2 className="title-style">introduction</h2>
              <h4 className="aboutUs-content__introduction">
                Queens Travel is a registered inbound operator that is based in
                Auckland, New Zealand. We aim to provide a diversified
                experience to customers, the pursuit for perfection is a spirit
                for the company. Queens Travel has been providing quality
                service to ADS tour groups, Incentive groups and FITs for more
                than 18 years in New Zealand. The company is specialized in
                designing and planning itineraries for customers, especially for
                a number of leading wholesale clients in Asian market.
                Additionally, Queens Travel owns several professional
                qualifications including Approved Destination Status and
                Qualmark, the company is also a member of Premier Kiwi
                Partnership Program of Tourism New Zealand, Tourism Export
                Council and Tourism Industry Association. Most importantly,
                Queens Travel maintains excellent cooperative relationships with
                local suppliers including hotels, attractions, coach companies,
                professional tour guides and etc. The long-term relationship not
                only allows our company to own a highly recognized reputations
                among suppliers but also supports the company to create more
                value beyond other competitors.
              </h4>
            </div>
            <img src={logo} alt="logo" className="aboutUs-logo"></img>
          </div>

          <div className="aboutUs-awards">
            <h4>Our Awards</h4>
            <ul className="aboutUs-awards__ul">
              <li className="aboutUs-awards__li">
                <FaMedal className="aboutUs-awards__icon" />
                <h3>Approved Destination Status</h3>
              </li>
              <li className="aboutUs-awards__li">
                <FaMedal className="aboutUs-awards__icon" />
                <h3>Premier Kiwi Partnership</h3>
              </li>
              <li className="aboutUs-awards__li">
                <FaMedal className="aboutUs-awards__icon" />
                <h3>Tourism Export Council</h3>
              </li>
              <li className="aboutUs-awards__li">
                <FaMedal className="aboutUs-awards__icon" />
                <h3>Tourism Industry Association in New Zealand</h3>
              </li>
              <li className="aboutUs-awards__li">
                <FaMedal className="aboutUs-awards__icon" />
                <h3>Qualmark</h3>
              </li>
            </ul>
          </div>

          <Awards></Awards>
        </section>
      </Layout>
    </>
  )
}

export default AboutUs
