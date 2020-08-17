import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/ui/layout"
import Slider from "../components/slider"
import Customized_5steps from "../components/customized/customized_5steps"
import CustomizedInformation from "../components/customized/customizedInformation"
import CustomizedPlan from "../components/customized/customizedPlan"
import "../css/pages/customized.css"
import SEO from "../components/SEO"

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
      <SEO title_en="Customized Tour" title_cn="群星定制" desc_en="Family, partner, friends, business, etc., starting from a group of 2 people. The whole trip is equipped with a private driver guide. We can tailor-make itinerary according to your requirements and the length of your journey. The attractions will be chosen according to your personal interests and preferences." desc_cn="家庭、伴侣、朋友、商务等小团队出行，2人起成团全程配备群星私人导游兼司机。按照您的需求、爱好，量身定制行程并提供最专业建议，开着车带着您完成一次难忘之旅！"/>
      <section className="custimized-page section section-center">
        {/*Top and Image Information*/}
        <CustomizedInformation />

        {/*5 Steps Information*/}

        <Customized_5steps />

        {/*Customized Reviews Carrousel*/}
        <article className="customizedSlider-containder">
          <Slider
            contents={nodes}
            titleEn="customized tour reviews"
            titleCn="定制行程 客户分享"
            subTitleEn="Travelers' Stories"
            subTitleCn="旅行者的故事"
          ></Slider>
        </article>

        {/**Customized Form Plan*/}
        <CustomizedPlan />
      </section>
    </Layout>
  )
}

export default Customized
