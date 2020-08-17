import React, { useContext } from "react"
import { GlobalStateContext } from "../../context/GlobalContextProvider"
import LanguageConverter from "../ui/languageConverter"
import { Link } from "gatsby"
import logo from "../../images/logo_bottom.png"

const AboutUs = () => {
  const state = useContext(GlobalStateContext) || { lenguage: "CN" }
  return (
    <article className="main-aboutUs__containder">
      <div className="main-aboutUs__box">
        <div className="main-aboutUs__contents">
          <h2
            className={`title-style__white ${
              state.lenguage === "CN"
                ? "cn-font__noto_bold"
                : "title-style__white__en"
            }`}
          >
            {state.lenguage === "EN" ? "about us" : "关于群星"}
          </h2>
          <LanguageConverter
            tag="h4"
            styleGlobal="clr-primary-4 text-align-justify clr__white mt-2"
            styleCn="cn-font__noto_sans_light"
            valueEn="Queens Travel is a registered inbound operator that is based in Auckland, New Zealand. We aim to provide a diversified experience to customers, the pursuit for perfection is a spirit for the company. Queens Travel has been providing quality service to ADS tour groups, Incentive groups and FITs for more than 18 years in New Zealand."
            valueCn="位于南半球美丽的'千帆之都'——新西兰最大城市奥克兰的——群星旅游公司（Queens Travel）是一家在新西兰注册的旅行社。"
          />
          <br />
          <LanguageConverter
            tag="h4"
            styleGlobal="clr-primary-4 text-align-justify clr__white"
            styleCn="cn-font__noto_sans_light"
            valueEn="The company is specialized in designing and planning itineraries for customers, especially for a number of leading wholesale clients in Asian market. Additionally, Queens Travel owns several professional qualifications including Approved Destination Status and Qualmark, the company is also a member of Premier Kiwi Partnership Program of Tourism New Zealand, Tourism Export Council and Tourism Industry Association."
            valueCn="群星旅游公司以设计新西兰南北岛旅游线路和提供专业旅游地接服务为主，拥有十七年丰富的旅游地接操作和服务经验，并与当地旅游供应商保持着密切的合作关系，以迖到为客人提供多元化的旅游服务,群星旅游公司本著專业和诚信的營運模式,在本地旅游行业拥有高品质的信誉和卓越口碑。"
          />
          <br />
          <LanguageConverter
            tag="h4"
            styleGlobal="clr-primary-4 text-align-justify clr__white"
            valueEn="Most importantly, Queens Travel maintains excellent cooperative relationships with local suppliers including hotels, attractions, coach companies, professional tour guides and etc. The long-term relationship not only allows our company to own a highly recognized reputations among suppliers but also supports the company to create more value beyond other competitors."
          />
        </div>
        <img src={logo} alt="logo" className="main-aboutUs__logo"></img>
      </div>
      <div className="btn-aboutUs">
        <Link
          to={"/aboutUs/"}
          className={`btn btn-center ${
            state.lenguage === "CN" ? "cn-font__noto_medium cn_h4" : ""
          }`}
        >
          {state.lenguage === "CN" ? "更多" : "more"}
        </Link>
      </div>
    </article>
  )
}

export default AboutUs
