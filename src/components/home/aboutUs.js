import React, { useContext } from "react"
import { GlobalStateContext } from "../../context/GlobalContextProvider"
import { Link } from "gatsby"
import logo from "../../images/logo_bottom.png"

const AboutUs = () => {
  const state = useContext(GlobalStateContext) || { lenguage: "EN" }
  return (
    <article className="main-aboutUs__containder">
      <div className="main-aboutUs__box">
        <div className="main-aboutUs__contents">
          <h2
            className={`title-style__white ${
              state.lenguage === "CN" ? "cn-font__noto_bold" : ""
            }`}
          >
            {state.lenguage === "EN" ? "about us" : "关于群星"}
          </h2>
          <h4 className="clr-primary-4 text-align-justify clr__white mt-2">
            Queens Travel is a registered inbound operator that is based in
            Auckland, New Zealand. We aim to provide a diversified experience to
            customers, the pursuit for perfection is a spirit for the company.
            <br />
            <br />
            Queens Travel has been providing quality service to ADS tour groups,
            Incentive groups and FITs for more than 18 years in New Zealand. The
            company is specialized in designing and planning itineraries for
            customers, especially for a number of leading wholesale clients in
            Asian market.
            <br />
            <br />
            Additionally, Queens Travel owns several professional qualifications
            including Approved Destination Status and Qualmark, the company is
            also a member of Premier Kiwi Partnership Program of Tourism New
            Zealand, Tourism Export Council and Tourism Industry Association.
            <br />
            <br />
            Most importantly, Queens Travel maintains excellent cooperative
            relationships with local suppliers including hotels, attractions,
            coach companies, professional tour guides and etc. The long-term
            relationship not only allows our company to own a highly recognized
            reputations among suppliers but also supports the company to create
            more value beyond other competitors.
          </h4>
        </div>
        <img src={logo} alt="logo" className="main-aboutUs__logo"></img>
      </div>
      <div className="btn-aboutUs">
        <Link to={"/aboutUs/"} className="btn btn-center ">
          more
        </Link>
      </div>
    </article>
  )
}

export default AboutUs
