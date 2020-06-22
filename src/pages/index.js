import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Link } from "gatsby"
import img from "../images/new-zealand.jpg"
import logo_white from "../images/logo_big_white.png"
import Slider from "../components/slider"
import Customized_5steps from "../components/customized_5steps"
import logo from "../images/logo_bottom.png"

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
        subTitle_en
        subTitle_cn
        title_en
        title_cn
      }
    }
  }
`

const IndexPage = ({
  data: {
    allStrapiThemeTour: { nodes: themeTourData },
  },
}) => {
  return (
    <Layout>
      <article className="main-header__container">
        <img src={img} className="main-header__background"></img>
        <img src={logo_white} className="main-header__logo"></img>
      </article>
      <article className="main-header__bottom__bar">
        <h1 className="main-header__bottom__text">
          Choose Queen's Travel , explore you'r dream
        </h1>
      </article>

      <section className="section-center mt2">
        <article className="main-slider__containder">
          <Slider
            contents={themeTourData}
            title="theme tours"
            sliderStyle="themeTour"
          ></Slider>
        </article>

        <article className="main-steps__container">
          <h2 className="title-style">customized tour</h2>
          <h3 className="subtitle-style">Iterinary subtitle</h3>
          <h3 className="subtitle-style">Iterinary subtitle</h3>
          <h3 className="subtitle-style">Iterinary subtitle</h3>
          <h3 className="subtitle-style">Iterinary subtitle</h3>
          <div className="custimizedProcess_container">
            <Customized_5steps></Customized_5steps>
          </div>
          <Link to={"/custimized/"} className="btn btn-center">
            go to customized tour page
          </Link>
        </article>
      </section>

      <article className="main-aboutUs__containder">
        <div className="main-aboutUs__box">
          <div>
            <h2 className="title-style__white">about us</h2>
            <br />
            <br />
            <h3 className="clr-primary-4">
              about usabout usabout usabout usabout usabout usabout us
            </h3>
            <h3 className="clr-primary-4">
              about usabout usabout usabout usabout usabout usabout ususabout
              usabout usabout usabout usabout usabout
            </h3>
            <h3 className="clr-primary-4">
              about usabout usabout usabout usabusabout usabout usabout out
              usabout usabout
            </h3>
            <h3 className="clr-primary-4">
              about usabout usabout usabout usabout usabout usabout us
            </h3>
          </div>
          <img src={logo} alt="logo" className="aboutUs-logo"></img>
        </div>
        <Link to={"/aboutUs/"} className="btn btn-center">
          go to aboutUs page
        </Link>
      </article>

      <section>
        <article></article>
        <article></article>
      </section>
    </Layout>
  )
}

export default IndexPage
