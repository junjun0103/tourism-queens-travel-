import React from "react"
import Layout from "../components/layout"
import ListTour from "../components/toursEn/listTour"

const ThemeTour = () => {
  return (
    <>
      <Layout>
        <section className="themeTour-page">
          <h1>From Theme Tour</h1>
          <ListTour />
        </section>
      </Layout>
    </>
  )
}

export default ThemeTour
