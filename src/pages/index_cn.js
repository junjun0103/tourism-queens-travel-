import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Link } from "gatsby"

import {
  FaEye,
  FaUserTie,
  FaHotjar,
  FaStar,
  FaSeedling,
  FaSmile,
} from "react-icons/fa"
import img from "../images/new-zealand.jpg"
import logo_white from "../images/logo_big_white.png"
import logo from "../images/logo_bottom.png"

import Slider from "../components/chinese/slider"
import Customized_5steps from "../components/customized/customized_5steps"

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
          childImageSharp {
            fluid {
              src
            }
          }
        }
      }
    }
  }
`

const IndexCn = ({
  data: {
    allStrapiThemeTour: { nodes: themeTourData },
    allStrapiFeedbacks: { nodes: feedbackData },
  },
}) => {
  console.log()

  return (
    <Layout
        lenguage={'CN'}
    >
      <article className="main-header__container">
        <img src={img} className="main-header__background"></img>
        <img src={logo_white} className="main-header__logo"></img>
      </article>
      {/**Slogan */}
      <article className="main-header__bottom__bar">
        <h1 className="main-header__bottom__text">
        独一无二的新西兰，与众不同的群星假期
        </h1>
      </article>

      {/*Theme Tour Carrousel*/}
      <section className="section section-center">
        <article className="main-slider__containder">
          <Slider
            contents={themeTourData}
            title="theme tours"
            sliderStyle="themeTour"
          ></Slider>
        </article>

        <article className="main-steps__container">
          <h2 className="title-style">群星定制</h2>
          <h3 className="subtitle-style">Iterinary subtitle</h3>
          <h3 className="subtitle-style">Iterinary subtitle</h3>
          <h3 className="subtitle-style">Iterinary subtitle</h3>
          <h3 className="subtitle-style">Iterinary subtitle</h3>

          {/*5 Steps Information*/}
          <div className="custimizedProcess-container">
            <Customized_5steps></Customized_5steps>
          </div>
          <Link to={"/customized/"} className="btn btn-center">
            go to customized tour page
          </Link>
        </article>
      </section>

      {/*AboutUs Information*/}
      <article className="main-aboutUs__containder">
        <div className="main-aboutUs__box">
          <div>
            <h2 className="title-style__white">关于群星假期</h2>
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
        <div className="btn-aboutUs">
          <Link to={"/aboutUs/"} className="btn btn-center ">
            go to aboutUs page
          </Link>
        </div>
      </article>

      {/*Why Us Information*/}
      <section className="section section-center">
        <article className="main-whyUs__containder">
          <h2 className="title-style">为什么选择群星假期</h2>
          <div className="main-whyUs__box">
            <div className="main-whyUs__contents">
              <FaEye className="main-whyUs__contents__icon" />
              <h3>专注</h3>
              <div className="main-whyUs__contents__text">
                群星专注于新西兰本土旅游,十七年积累和研发出群星特有的旅游行程以及预定操作系统
              </div>
            </div>
            <div className="main-whyUs__contents">
              <FaUserTie className="main-whyUs__contents__icon" />
              <h3>专业</h3>
              <div className="main-whyUs__contents__text">
                群星有着丰富的本地知识,及专业的操作团队
              </div>
            </div>
            <div className="main-whyUs__contents">
              <FaHotjar className="main-whyUs__contents__icon" />
              <h3>热情</h3>
              <div className="main-whyUs__contents__text">
                群星的团队都是跟您一样热爱旅游,群星始终相信只有热爱旅游才可以做好旅游
              </div>
            </div>
            <div className="main-whyUs__contents">
              <FaStar className="main-whyUs__contents__icon" />
              <h3>独特</h3>
              <div className="main-whyUs__contents__text">
                群星不光有着独特的旅游行程,最重要的是群星对于"旅行”本身,有着独特理解与认识
              </div>
            </div>
            <div className="main-whyUs__contents">
              <FaSeedling className="main-whyUs__contents__icon" />
              <h3>纯粹</h3>
              <div className="main-whyUs__contents__text">
                群星纯粹于旅游,让您可以感受到旅游真正的意义及乐趣
              </div>
            </div>
            <div className="main-whyUs__contents">
              <FaSmile className="main-whyUs__contents__icon" />
              <h3>服务</h3>
              <div className="main-whyUs__contents__text">
                群星拥有完善的服务系统,让您在旅行的过程中能够高枕无忧
              </div>
            </div>
          </div>
        </article>

        {/*Reviews Carrousel*/}
        <article className="main-slider__containder">
          <Slider
            contents={feedbackData}
            title="reviews"
            sliderStyle="reviews"
          ></Slider>
        </article>
      </section>
    </Layout>
  )
}

export default IndexCn
