import React from "react"
import Layout from "../components/ui/layout"
import ListIterinary from "../components/iterinaryEn/listIterinary"
import "../css/pages/bestSale.css"
import SEO from "../components/SEO"

const BestSale = () => {
  return (
    <>
      <Layout>
        <SEO
          title_en="Best Sale"
          title_cn="群星热卖"
          desc_en="Have your own departure date for below tours if there are over 8 people in your group"
          desc_cn="如果您的參團人數有8人以上，以下行程均可按照您定的日期包團出發"
        />
        <section className="bestSale-page section section-center">
          <ListIterinary />
        </section>
      </Layout>
    </>
  )
}

export default BestSale
