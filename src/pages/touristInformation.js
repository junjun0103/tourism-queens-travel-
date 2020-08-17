import React from "react"
import Layout from "../components/ui/layout"
import ListToursInfo from "../components/touristInfo/listTouristInfo"
import "../css/pages/touristInformation.css"
import SEO from "../components/SEO"

const TouristInformation = () => {
  return (
    <>
      <Layout>
        <SEO title_en="Tourist Information" title_cn="旅游资讯" desc_en="Information about Equipment, Time Difference, Plan, Medicine, Arrivals, Insurance, Language, Culture, Outfits, Currency, Traffic Rules, Safety" desc_cn="设备, 时差, 计划, 药品, 入境, 保险, 语言, 习俗, 衣服, 换汇, 交通规则, 安全"/>
        <section className="touristInformation-page section ">
          <ListToursInfo />
        </section>
      </Layout>
    </>
  )
}

export default TouristInformation
