import React, { useContext } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Link } from "gatsby"
import MainImage from "../components/images/indexMain"
import { GlobalStateContext } from "../context/GlobalContextProvider"

import {
  FaEye,
  FaUserTie,
  FaHotjar,
  FaStar,
  FaSeedling,
  FaSmile,
} from "react-icons/fa"
import logo from "../images/logo_bottom.png"

import Slider from "../components/slider"
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

const IndexPage = ({
  data: {
    allStrapiThemeTour: { nodes: themeTourData },
    allStrapiFeedbacks: { nodes: feedbackData },
  },
}) => {
  const state = useContext(GlobalStateContext)
  return (
    <Layout>
      {/**Bring the main image from image components */}
      <MainImage />

      {/**Slogan */}
      <article className="main-header__bottom__bar">
        <h1 className="main-header__bottom__text">
          {state.lenguage === "EN"
            ? `Choose Queen's Travel , explore your dream`
            : "独一无二的新西兰，与众不同的群星假期"}
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
          <h2 className="title-style">
            {state.lenguage === "EN" ? `customized tour` : "群星定制"}
          </h2>
          <h4 className="subtitle-style">
            Whether you want to go fishing, go hiking in the national park, or
            ride a horse in a middle-earth like valley, or visit a historic
            winery to taste some fine wines, visit the prestigious art gallery,
            enjoy a steak or seafood feast...
            <br></br>
            <br></br> As long as it is what you want, we can customize the
            itinerary for you personally!
            <br></br>
            You don’t have to worry about language barriers, inconvenient
            self-driving and so on, just hand everything over to us!
          </h4>
          {/*5 Steps Information*/}
          <div className="custimizedProcess-container">
            <Customized_5steps></Customized_5steps>
          </div>
        </article>
        <div className="main-btn__customized">
          <Link to={"/customized/"} className="btn btn-center">
            customize your tour
          </Link>
        </div>
      </section>

      {/*AboutUs Information*/}
      <article className="main-aboutUs__containder">
        <div className="main-aboutUs__box">
          <div>
            <h2 className="title-style__white">about us</h2>
            <br />
            <br />
            <h4 className="clr-primary-4 text-align-justify text-shadow-dark">
              Queens Travel is a registered inbound operator that is based in
              Auckland, New Zealand. We aim to provide a diversified experience
              to customers, the pursuit for perfection is a spirit for the
              company.
              <br></br>
              <br></br>
              Queens Travel has been providing quality service to ADS tour
              groups, Incentive groups and FITs for more than 18 years in New
              Zealand. The company is specialized in designing and planning
              itineraries for customers, especially for a number of leading
              wholesale clients in Asian market.
              <br></br>
              <br></br>
              Additionally, Queens Travel owns several professional
              qualifications including Approved Destination Status and Qualmark,
              the company is also a member of Premier Kiwi Partnership Program
              of Tourism New Zealand, Tourism Export Council and Tourism
              Industry Association.
              <br></br>
              <br></br>
              Most importantly, Queens Travel maintains excellent cooperative
              relationships with local suppliers including hotels, attractions,
              coach companies, professional tour guides and etc. The long-term
              relationship not only allows our company to own a highly
              recognized reputations among suppliers but also supports the
              company to create more value beyond other competitors.
            </h4>
          </div>
          <img src={logo} alt="logo" className="aboutUs-logo"></img>
        </div>
        <div className="btn-aboutUs">
          <Link to={"/aboutUs/"} className="btn btn-center ">
            more
          </Link>
        </div>
      </article>

      {/*Why Us Information*/}
      <section className="section section-center">
        <article className="main-whyUs__containder">
          <h2 className="title-style">why us</h2>
          <div className="main-whyUs__box">
            <div className="main-whyUs__contents">
              <FaEye className="main-whyUs__contents__icon" />
              <h3>Concentrated</h3>
              <div className="main-whyUs__contents__text">
                <h4 className="clr-white text-shadow-grery">
                  Over 17 years experiences with own operating system
                </h4>
              </div>
            </div>
            <div className="main-whyUs__contents">
              <FaUserTie className="main-whyUs__contents__icon" />
              <h3>Professional</h3>
              <div className="main-whyUs__contents__text">
                <h4 className="clr-white text-shadow-grery">
                  Fund of knowledge <br></br> with our professional team
                </h4>
              </div>
            </div>
            <div className="main-whyUs__contents">
              <FaHotjar className="main-whyUs__contents__icon" />
              <h3>Passionate</h3>
              <div className="main-whyUs__contents__text">
                <h4 className="clr-white text-shadow-grery">
                  We believe <br></br> only passion can lead you to success
                </h4>
              </div>
            </div>
            <div className="main-whyUs__contents">
              <FaStar className="main-whyUs__contents__icon" />
              <h3>Unique</h3>
              <div className="main-whyUs__contents__text">
                <h4 className="clr-white text-shadow-grery">
                  We see <br></br>"TRAVEL" in different way
                </h4>
              </div>
            </div>
            <div className="main-whyUs__contents">
              <FaSeedling className="main-whyUs__contents__icon" />
              <h3>Pure</h3>
              <div className="main-whyUs__contents__text">
                <h4 className="clr-white text-shadow-grery">
                  Fulfill the meaning and fun of travel
                </h4>
              </div>
            </div>
            <div className="main-whyUs__contents">
              <FaSmile className="main-whyUs__contents__icon" />
              <h3>Service</h3>
              <div className="main-whyUs__contents__text">
                <h4 className="clr-white text-shadow-grery">
                  Anxiety free with our perfect service
                </h4>
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

export default IndexPage
