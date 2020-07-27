import React from "react"
import Layout from "../components/ui/layout"
import ListTour from "../components/toursEn/listTour"
import "../css/pages/themeTour.css"

const ThemeTour = () => {
  return (
    <>
      <Layout>
        <section className="themeTour-page section section-center">
          <ListTour />
        </section>
      </Layout>
    </>
  )
}

export default ThemeTour
