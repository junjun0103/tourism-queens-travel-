import React from "react"
import Layout from "../components/ui/layout"
import ListToursInfo from "../components/touristInfo/listTouristInfo"
import "../css/pages/touristInformation.css"
import SEO from "../components/SEO"

const TouristInformation = () => {
  return (
    <>
      <Layout>
        <SEO title_en="Tourist Information" title_cn="旅游资讯" />
        <section className="touristInformation-page section ">
          <ListToursInfo />
        </section>
      </Layout>
    </>
  )
}

export default TouristInformation
