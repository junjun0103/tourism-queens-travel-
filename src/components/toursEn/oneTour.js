import React, { useState } from "react"
import Layaout from "../layout"
import { graphql } from "gatsby"
import img from "../../images/new-zealand.jpg"
import { FaMapMarkerAlt, FaPlus } from "react-icons/fa"

export const query = graphql`
  query($slug: String!) {
    allStrapiThemeTour(filter: { slug: { eq: $slug } }) {
      nodes {
        excluded_cn
        excluded_en
        highlight_cn
        highlight_en
        slug
        included_cn
        included_en
        policy_cn
        policy_en
        priceDetail_cn
        priceDetail_en
        subTitle_cn
        subTitle_en
        title_cn
        title_en
        plans_en {
          id
          route
          stayAndMeals
          itinerary
          photo1 {
            childImageSharp {
              fluid {
                src
              }
            }
          }
          photo2 {
            childImageSharp {
              fluid {
                src
              }
            }
          }
        }
      }
    }
  }
`

const OneFeedBack = ({
  data: {
    allStrapiThemeTour: { nodes },
  },
}) => {
  //restructure
  const {
    subTitle_en,
    title_en,
    plans_en,
    excluded_en,
    included_en,
    policy_en,
    priceDetail_en,
  } = nodes[0]
  // number of the plans
  const countPlans = plans_en.length
  const [openManager, setOpenManager] = React.useState(false)
  return (
    <Layaout>
      <article className="themeTour-header__container">
        <img className="themeTour-header__background" src={img} alt="img"></img>
        <div className="themeTour-header__title">
          <div className="themeTour-header__title_back"></div>
          <div className="themeTour-header__title_front">
            <h3>{title_en} dsadsad dsadsad</h3>
          </div>
        </div>
        <br />
        <div className="themeTour-header__subtitle">
          <h1>
            {subTitle_en}dsadsad sadassdadsad sdsadsad dsadsad sadassda
            sadassdadsad sdsadsad adassdadsad sdsadsad dsadsad sadassda
            sadassdadsad sdsadsad
          </h1>
        </div>
        <div className="themeTour-header__highlightBox">
          <div className="themeTour-header__highlightBox__content">
            <h4>
              highlight sadsad sadassdadsad sdsadsad dsadsad sadassda
              sadassdadsad sdsadsad adassdadsad sdsadsad dsadsad sadassda
              sadassdadsad sdsadsad sadassdadsad sdsadsad dsadsad sadassda
              sadassdadsad sdsadsad adassdadsad sdsadsad dsadsad sadassda
              sadassdadsad sdsadsad sadassdadsad sdsadsad dsadsad sadassda
            </h4>
          </div>
          <div className="themeTour-header__highlightBox__map">map</div>
        </div>
      </article>

      <section className="section section-center">
        <article className="themeTour-plan__article">
          {plans_en.map((plan, i) => {
            const onClick = () => {
              setOpenManager(prev => ({ ...prev, [plan.id]: !prev[plan.id] }))
            }
            return (
              <div className="themeTour-plan__container" key={i}>
                <h3 className="themeTour-plan__days">day{i + 1}</h3>
                <div className="themeTour-plan__lineAndDot">
                  <button className="themeTour-plan__dot"></button>
                  {/* if the plan is the last item,the line wont show up. */}
                  <div
                    className={`${
                      countPlans === i + 1 ? "" : "themeTour-plan__line"
                    }`}
                  ></div>
                </div>
                <div>
                  <button
                    className="themeTour-plan__route__btn"
                    onClick={onClick}
                  >
                    <div className="themeTour-plan__route__box">
                      <div className="themeTour-plan__routeAndIcon">
                        <FaMapMarkerAlt className="themeTour-plan__icon" />
                        <h4 className="themeTour-plan__route">{plan.route}</h4>
                      </div>
                      <FaPlus
                        className={`themeTour-plan__icon ${
                          openManager[plan.id] ? "xIcon" : "plusIcon"
                        }`}
                      />
                    </div>
                  </button>
                  <div
                    className={`${
                      openManager[plan.id] ? "themeTour-plan__box" : "inactive"
                    }`}
                  >
                    <div className="themeTour-plan__stayAndMeals">
                      <h4>{plan.stayAndMeals}</h4>
                    </div>
                    <div className="themeTour-plan__itinerary">
                      <h4>{plan.itinerary}</h4>
                    </div>
                    <img src={img} alt="photo1" className="photo1"></img>
                    <img src={img} alt="photo2" className="photo2"></img>
                  </div>
                </div>
              </div>
            )
          })}
        </article>

        <article className="themeTour-notice__article">
          <div className="themeTour-notice__price__box">
            <div className="themeTour-notice__title">
              <div className="themeTour-notice__title__lines">
                <div className="themeTour-notice__title__lines__top"></div>
                <div className="themeTour-notice__title__lines__bottom"></div>
              </div>
              <h3>Price</h3>
              <div className="themeTour-notice__title__lines">
                <div className="themeTour-notice__title__lines__top"></div>
                <div className="themeTour-notice__title__lines__bottom"></div>
              </div>
            </div>
            <div className="themeTour-notice__content">
              <h4>{priceDetail_en}</h4>
            </div>
          </div>
          <div className="themeTour-notice__included__box">
            <div className="themeTour-notice__title">
              <div className="themeTour-notice__title__lines">
                <div className="themeTour-notice__title__lines__top"></div>
                <div className="themeTour-notice__title__lines__bottom"></div>
              </div>
              <h3>Included</h3>
              <div className="themeTour-notice__title__lines">
                <div className="themeTour-notice__title__lines__top"></div>
                <div className="themeTour-notice__title__lines__bottom"></div>
              </div>
            </div>
            <div className="themeTour-notice__content">
              <h4>{included_en}</h4>
            </div>
          </div>
          <div className="themeTour-notice__excluded__box">
            <div className="themeTour-notice__title">
              <div className="themeTour-notice__title__lines">
                <div className="themeTour-notice__title__lines__top"></div>
                <div className="themeTour-notice__title__lines__bottom"></div>
              </div>
              <h3>Excluded</h3>
              <div className="themeTour-notice__title__lines">
                <div className="themeTour-notice__title__lines__top"></div>
                <div className="themeTour-notice__title__lines__bottom"></div>
              </div>
            </div>
            <div className="themeTour-notice__content">
              <h4>{excluded_en}</h4>
            </div>
          </div>
          <div className="themeTour-notice__important__box">
            <div className="themeTour-notice__title">
              <div className="themeTour-notice__title__lines">
                <div className="themeTour-notice__title__lines__top"></div>
                <div className="themeTour-notice__title__lines__bottom"></div>
              </div>
              <h3>Notice</h3>
              <div className="themeTour-notice__title__lines">
                <div className="themeTour-notice__title__lines__top"></div>
                <div className="themeTour-notice__title__lines__bottom"></div>
              </div>
            </div>
            <div className="themeTour-notice__content">
              <h4>content</h4>
            </div>
          </div>
          <div className="themeTour-notice__policy__box">
            <div className="themeTour-notice__title">
              <div className="themeTour-notice__title__lines">
                <div className="themeTour-notice__title__lines__top"></div>
                <div className="themeTour-notice__title__lines__bottom"></div>
              </div>
              <h3>Policy</h3>
              <div className="themeTour-notice__title__lines">
                <div className="themeTour-notice__title__lines__top"></div>
                <div className="themeTour-notice__title__lines__bottom"></div>
              </div>
            </div>
            <div className="themeTour-notice__content">
              <h4>{policy_en}</h4>
            </div>
          </div>
        </article>
      </section>
    </Layaout>
  )
}

export default OneFeedBack
