import React from "react"
import Layout from "../components/ui/layout"
import logo from "../images/logo_bottom.png"
import { FaMedal } from "react-icons/fa"
import Awards from "../components/awards"
import "../css/pages/aboutUs.css"
import Title from "../components/ui/title"
import LanguageConverter from "../components/ui/languageConverter"

const AboutUs = () => {
  return (
    <>
      <Layout>
        <section className="aboutUs-page section section-center">
          <div className="aboutUs-container">
            <div className="aboutUs-content">
              <Title titleEn="introduction" titleCn="关于群星"></Title>
              <LanguageConverter
                tag={'h4'}
                styleGlobal={'aboutUs-content__introduction text-align-justify'}
                styleCn="cn-font__noto_sans_light"
                valueEn="Queens Travel is a registered inbound operator that is based in Auckland, New Zealand. We aim to provide a diversified experience to customers, the pursuit for perfection is a spirit for the company. Queens Travel has been providing quality service to ADS tour groups, Incentive groups and FITs for more than 18 years in New Zealand."
                valueCn="位于南半球美丽的'千帆之都'——新西兰最大城市奥克兰的——群星旅游公司（Queens Travel）是一家在新西兰注册的旅行社。"
              />
              <br />
              <LanguageConverter
                tag="h4"
                styleGlobal="aboutUs-content__introduction text-align-justify"
                styleCn="cn-font__noto_sans_light"
                valueEn="The company is specialized in designing and planning itineraries for customers, especially for a number of leading wholesale clients in Asian market. Additionally, Queens Travel owns several professional qualifications including Approved Destination Status and Qualmark, the company is also a member of Premier Kiwi Partnership Program of Tourism New Zealand, Tourism Export Council and Tourism Industry Association."
                valueCn="群星旅游公司以设计新西兰南北岛旅游线路和提供专业旅游地接服务为主，拥有十七年丰富的旅游地接操作和服务经验，并与当地旅游供应商保持着密切的合作关系，以迖到为客人提供多元化的旅游服务,群星旅游公司本著專业和诚信的營運模式,在本地旅游行业拥有高品质的信誉和卓越口碑。"
              />
              <br />
              <LanguageConverter
                tag="h4"
                styleGlobal="aboutUs-content__introduction text-align-justify"
                valueEn="Most importantly, Queens Travel maintains excellent cooperative relationships with local suppliers including hotels, attractions, coach companies, professional tour guides and etc. The long-term relationship not only allows our company to own a highly recognized reputations among suppliers but also supports the company to create more value beyond other competitors."
              />
            </div>
            <img src={logo} alt="logo" className="aboutUs-logo"></img>
          </div>

          <div className="aboutUs-awards">
            <LanguageConverter
              tag="h3"
              valueEn="Our Awards"
              valueCn="新西兰旅游业界多项认证"
              styleCn="cn-font__noto_bold"
            />
            <ul className="aboutUs-awards__ul">
              <li className="aboutUs-awards__li">
                <FaMedal className="aboutUs-awards__icon" />
                <a
                  href="https://www.tourismnewzealand.com/tools-for-your-business/china-market-development/approved-destination-status/ads-approved-operators/"
                  target="blank"
                >
                  <LanguageConverter
                    tag="h3"
                    valueEn="Approved Destination Status"
                    valueCn="新西兰旅游局ADS资格认证"
                    styleCn="cn-font__noto_bold"
                  />
                </a>
              </li>
              <li className="aboutUs-awards__li">
                <FaMedal className="aboutUs-awards__icon" />
                <a
                  href="https://www.tourismnewzealand.com/tools-for-your-business/china-market-development/premier-kiwi-partnership/pkp-partners/"
                  target="blank"
                >
                  <LanguageConverter
                    tag="h3"
                    valueEn="Premier Kiwi Partnership"
                    valueCn="新西兰旅游局官方旅游产品质量认证合作伙伴"
                    styleCn="cn-font__noto_bold"
                  />
                </a>
              </li>
              <li className="aboutUs-awards__li">
                <FaMedal className="aboutUs-awards__icon" />
                <a
                  href="https://www.tourismexportcouncil.org.nz/member_listing/queens-travel/"
                  target="blank"
                >
                  <LanguageConverter
                    tag="h3"
                    valueEn="Tourism Export Council"
                    valueCn="新西兰专业旅游委员会长期会员"
                    styleCn="cn-font__noto_bold"
                  />
                </a>
              </li>
              <li className="aboutUs-awards__li">
                <FaMedal className="aboutUs-awards__icon" />
                <a
                  href="https://tia.org.nz/about-the-industry/member-search/"
                  target="blank"
                >
                  <LanguageConverter
                    tag="h3"
                    valueEn="Tourism Industry Association in New Zealand"
                    valueCn="新西兰旅游业协会长期会员"
                    styleCn="cn-font__noto_bold"
                  />
                </a>
              </li>
              <li className="aboutUs-awards__li">
                <FaMedal className="aboutUs-awards__icon" />
                <a
                  href="https://www.qualmark.co.nz/en/find-qualmark-businesses/"
                  target="blank"
                >
                  <LanguageConverter
                    tag="h3"
                    valueEn="QUALMARK"
                    valueCn="新西兰权威认证机构的高品质操作公司资质认证"
                    styleCn="cn-font__noto_bold"
                  />
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
