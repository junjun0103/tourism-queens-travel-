import React from "react"
import Layout from "../components/ui/layout"
import logo from "../images/logo_bottom.png"
import { FaMedal } from "react-icons/fa"
import Awards from "../components/awards"

const AboutUs = () => {
  return (
    <>
      <Layout>
        <section className="aboutUs-page section section-center">
          <div className="aboutUs-container">
            <div className="aboutUs-content">
              <h2 className="title-style">introduction</h2>
              <h4 className="aboutUs-content__introduction text-align-justify">
                Queens Travel is a registered inbound operator that is based in
                Auckland, New Zealand. We aim to provide a diversified
                experience to customers, the pursuit for perfection is a spirit
                for the company. Queens Travel has been providing quality
                service to ADS tour groups, Incentive groups and FITs for more
                than 18 years in New Zealand.
                <br />
                <br />
                The company is specialized in designing and planning itineraries
                for customers, especially for a number of leading wholesale
                clients in Asian market. Additionally, Queens Travel owns
                several professional qualifications including Approved
                Destination Status and Qualmark, the company is also a member of
                Premier Kiwi Partnership Program of Tourism New Zealand, Tourism
                Export Council and Tourism Industry Association.
                <br />
                <br />
                Most importantly, Queens Travel maintains excellent cooperative
                relationships with local suppliers including hotels,
                attractions, coach companies, professional tour guides and etc.
                The long-term relationship not only allows our company to own a
                highly recognized reputations among suppliers but also supports
                the company to create more value beyond other competitors.
              </h4>
            </div>
            <img src={logo} alt="logo" className="aboutUs-logo"></img>
          </div>

          <div className="aboutUs-awards">
            <h3>Our Awards</h3>
            <ul className="aboutUs-awards__ul">
              <li className="aboutUs-awards__li">
                <FaMedal className="aboutUs-awards__icon" />
                <a
                  href="https://www.tourismnewzealand.com/tools-for-your-business/china-market-development/approved-destination-status/ads-approved-operators/"
                  target="blank"
                >
                  <h3>Approved Destination Status</h3>
                </a>
              </li>
              <li className="aboutUs-awards__li">
                <FaMedal className="aboutUs-awards__icon" />
                <a
                  href="https://www.tourismnewzealand.com/tools-for-your-business/china-market-development/premier-kiwi-partnership/pkp-partners/"
                  target="blank"
                >
                  <h3>Premier Kiwi Partnership</h3>
                </a>
              </li>
              <li className="aboutUs-awards__li">
                <FaMedal className="aboutUs-awards__icon" />
                <a
                  href="https://www.tourismexportcouncil.org.nz/member_listing/queens-travel/"
                  target="blank"
                >
                  <h3>Tourism Export Council</h3>
                </a>
              </li>
              <li className="aboutUs-awards__li">
                <FaMedal className="aboutUs-awards__icon" />
                <a
                  href="https://tia.org.nz/about-the-industry/member-search/"
                  target="blank"
                >
                  <h3>Tourism Industry Association in New Zealand</h3>
                </a>
              </li>
              <li className="aboutUs-awards__li">
                <FaMedal className="aboutUs-awards__icon" />
                <a
                  href="https://www.qualmark.co.nz/en/find-qualmark-businesses/"
                  target="blank"
                >
                  <h3>Qualmark</h3>
                </a>
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
