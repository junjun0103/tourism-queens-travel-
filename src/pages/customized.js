import React, { useState } from "react"
import { graphql } from "gatsby"
import Layout from "../components/ui/layout"
import Slider from "../components/slider"
import Customized_5steps from "../components/customized/customized_5steps"
import CustomizedInformation from "../components/customized/customizedInformation"
import CustomizedPlan from "../components/customized/customizedPlan"
import "../css/pages/customized.css"

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
        photo {
          sharp: childImageSharp {
            fluid {
              src
            }
          }
        }
      }
    }
  }
`

const Customized = ({
  data: {
    allStrapiFeedbacks: { nodes },
  },
}) => {
  return (
    <Layout>
      <section className="custimized-page section section-center">
        {/*Top and Image Information*/}
        <CustomizedInformation />

        {/*5 Steps Information*/}

        <Customized_5steps />

        {/*Customized Reviews Carrousel*/}
        <article className="customizedSlider-containder">
          <Slider
            contents={nodes}
            title="customized tour reviews"
            sliderStyle="reviews"
          ></Slider>
        </article>

        {/**Customized Form Plan*/}
        <CustomizedPlan />
      </section>
    </Layout>
  )
}

export default Customized
