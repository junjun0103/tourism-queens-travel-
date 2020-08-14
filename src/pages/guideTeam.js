import React from "react"
import Layout from "../components/ui/layout"
import ListGuide from "../components/guideEn/listGuide"
import "../css/pages/guideTeam.css"
import SEO from "../components/SEO"

const GuideTeam = () => {
  return (
    <>
      <Layout lenguage="EN">
        <SEO title_en="Guide Team" title_cn="群星导游" />
        <section className="guideTeam-page section section-center">
          <ListGuide />
        </section>
      </Layout>
    </>
  )
}

export default GuideTeam
