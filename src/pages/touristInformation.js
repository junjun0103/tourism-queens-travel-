import React from "react"
import Layout from "../components/ui/layout"
import ListToursInfo from "../components/touristInfo/listTouristInfo"
import "../css/pages/touristInformation.css"

const TouristInformation = () => {
  return (
    <>
      <Layout>
        <section className="touristInformation-page section ">
          <ListToursInfo />
        </section>
      </Layout>
    </>
  )
}

export default TouristInformation
