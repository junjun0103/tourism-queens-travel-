import React from "react"
import Layout from "../components/ui/layout"
import ListIterinary from "../components/iterinaryEn/listIterinary"
import "../css/pages/bestSale.css"
import SEO from "../components/SEO"

const BestSale = () => {
  return (
    <>
      <Layout>
        <SEO title_en="Best Sale" title_cn="群星热卖" />
        <section className="bestSale-page section section-center">
          <ListIterinary />
        </section>
      </Layout>
    </>
  )
}

export default BestSale
