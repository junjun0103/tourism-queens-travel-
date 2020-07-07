import React from "react"
import Layout from "../components/layout"
import ListTour from "../components/toursEn/listTour"

const ThemeTour = () => {
  return (
    <>
      <Layout
        lenguage="EN"
      >
        <section className="themeTour-page">
          <ListTour />
        </section>
      </Layout>
    </>
  )
}

export default ThemeTour
