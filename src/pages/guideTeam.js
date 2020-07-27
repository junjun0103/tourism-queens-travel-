import React from "react"
import Layout from "../components/ui/layout"
import ListGuide from "../components/guideEn/listGuide"
import "../css/pages/guideTeam.css"

const GuideTeam = () => {
  return (
    <>
      <Layout lenguage="EN">
        <section className="guideTeam-page section section-center">
          <ListGuide />
        </section>
      </Layout>
    </>
  )
}

export default GuideTeam
