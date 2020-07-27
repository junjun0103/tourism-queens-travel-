import React from "react"
import Layout from "../components/ui/layout"
import ListIterinary from "../components/iterinaryEn/listIterinary"
import "../css/pages/bestSale.css"

const BestSale = () => {
  return (
    <>
      <Layout>
        <section className="bestSale-page section section-center">
          <ListIterinary />
        </section>
      </Layout>
    </>
  )
}

export default BestSale
