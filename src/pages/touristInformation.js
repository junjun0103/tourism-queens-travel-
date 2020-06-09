import React from "react"
import Layout from "../components/layout"
import ListToursInfo from "../components/touristInfo/listTouristInfo"

const TouristInformation = () => {
  return (
    <>
      <Layout>
        <section className="touristInformation-page">
          <h1>From Touris Information</h1>
          <ListToursInfo />
        </section>
      </Layout>
    </>
  )
}

export default TouristInformation
