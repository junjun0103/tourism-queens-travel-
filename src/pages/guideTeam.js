import React from "react"
import Layout from "../components/layout"
import ListGuide from "../components/guideEn/listGuide"

const GuideTeam = () => {
  return (
    <>
      <Layout
        lenguage="EN"
      >
        <section className="guideTeam-page">
          <ListGuide />
        </section>
      </Layout>
    </>
  )
}

export default GuideTeam
