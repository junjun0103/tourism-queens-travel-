import React, { useState } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Slider from "../components/slider"
import Customized_5steps from "../components/chinese/customized/customized_5steps"
import CustomizedInformation from "../components/chinese/customized/customizedInformation"
import CustomizedPlan from "../components/chinese/customized/customizedPlan"

export const query = graphql`
  {
    allStrapiFeedbacks(
      filter: { customTourFeedback: { eq: true } }
      sort: { fields: date, order: DESC }
    ) {
      nodes {
        slug
        customTourFeedback
        id
        shortDescription_en
        shortDescription_cn
        title_cn
        title_en
        name_cn
        name_en
        date
      }
    }
  }
`

const Customized = ({data: {allStrapiFeedbacks: { nodes },},}) => {
  
  return (
    <Layout
      lenguage="CN"
    >
      <section className="custimized-page section section-center">
        
        {/*Top and Image Information*/}
        <CustomizedInformation></CustomizedInformation>

        {/*5 Steps Information*/}
        <article className="custimizedProcess-container">
          <Customized_5steps></Customized_5steps>
        </article>

        {/*Customized Reviews Carrousel*/}
        <article className="customizedSlider-containder">
          <Slider
            contents={nodes}
            title="customized tour reviews"
            sliderStyle="reviews"
          ></Slider>
        </article>

        {/**Customized Form Plan*/}
        <CustomizedPlan></CustomizedPlan>

      </section>
    </Layout>
  )
}

export default Customized