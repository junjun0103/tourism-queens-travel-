import React, { useContext } from "react"
import { graphql } from "gatsby"
import Layout from "../components/ui/layout"
import MainImage from "../components/home/mainImage"
import ThemeTour from '../components/home/PreviewThemetour'
import Slider from "../components/slider"
import CustomizeTour from "../components/home/customizeTour"
import AboutUs from "../components/home/aboutUs"
import WhyUs from "../components/home/whyUs"
import { GlobalStateContext } from "../context/GlobalContextProvider"
import "../css/pages/index.css"

export const query = graphql`
  {
    allStrapiThemeTour(
      limit: 9
      filter: { active: { eq: true } }
      sort: { fields: id, order: DESC }
    ) {
      nodes {
        id
        slug
        slogan_en
        slogan_cn
        title_en
        title_cn
        background_img {
          sharp: childImageSharp {
            fluid {
              src
            }
          }
        }
      }
    }
    allStrapiFeedbacks(limit: 9, sort: { fields: date, order: DESC }) {
      nodes {
        id
        slug
        title_cn
        title_en
        shortDescription_en
        shortDescription_cn
        date
        name_en
        name_cn
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
const IndexPage = ({
  data: {
    allStrapiThemeTour: { nodes: themeTourData },
    allStrapiFeedbacks: { nodes: feedbackData },
  },
}) => {
  const state = useContext(GlobalStateContext) || { lenguage: "EN" };
  return (
    <Layout>
      {/**main image */}
      <MainImage />
 
      {/**Slogan */}
      <article className="main-header__bottom__bar">
        <h1 className="main-header__bottom__text">
          {state.lenguage === "EN"
            ? `Choose Queen's Travel , explore your dream`
            : "独一无二的新西兰，与众不同的群星假期"}
        </h1>
      </article>
    
      <ThemeTour         
        contents={themeTourData}
      />
      <section className="section section-center">
        {/*Theme Tour Carrousel*/}
        <article className="main-slider__containder">
          <Slider
            contents={themeTourData}
            title="theme tours"
            sliderStyle="themeTour"
          />
        </article>
        {/*Customize Tour*/}
        <CustomizeTour />
      </section>

      {/*AboutUs Information*/}
      <AboutUs />

      <section className="section section-center">
        {/*Why Us Information*/}
        <WhyUs />
        {/*Reviews Carrousel*/}
        <article className="main-slider__containder">
          <Slider
            contents={feedbackData}
            title="reviews"
            sliderStyle="reviews"
          />
        </article>
      </section>
    </Layout>
  )
}

export default IndexPage
