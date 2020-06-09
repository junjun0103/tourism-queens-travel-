import React from "react"
import Layout from "../components/layout"
import ListGuide from "../components/guideEn/listGuide";

const GuideTeam = () => {
  return (
    <>
      <Layout>
        <section className="guideTeam-page">
          <h1>From Guide Team</h1>
          <ListGuide />
        </section>
      </Layout>
    </>
  )
}

export default GuideTeam
