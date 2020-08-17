import React, { useState, useContext } from "react"
import Image from "gatsby-image"
import styled from "@emotion/styled"
import { FaMapMarkerAlt, FaPlus } from "react-icons/fa"
import { GlobalStateContext } from "../../context/GlobalContextProvider"
import ReactMarkdown from "react-markdown"

const Img = styled(Image)`
  width: 200px;
  height: 200px;

  @media (min-width: 768px) {
    width: 300px;
    height: 300px;
  }
`

const TourPlans = ({ plans, countPlans }) => {
  //language state
  const state = useContext(GlobalStateContext) || { lenguage: "CN" }

  //state for open the plan
  const [openManager, setOpenManager] = useState(false)

  return (
    <article className="themeTour-plan__article">
      {plans.map((plan, i) => {
        const onClick = () => {
          setOpenManager(prev => ({ ...prev, [plan.id]: !prev[plan.id] }))
        }
        return (
          <div className="themeTour-plan__container" key={i}>
            <h3 className="themeTour-plan__days">day{i + 1}</h3>
            <div className="themeTour-plan__lineAndDot">
              {/* if the plan is the last item,the line wont show up. */}
              <div className="themeTour-plan__dot"></div>
              <div
                className={`${
                  countPlans === i + 1 ? "" : "themeTour-plan__line"
                }`}
              ></div>
            </div>
            <div>
              <button className="themeTour-plan__route__btn" onClick={onClick}>
                <div className="themeTour-plan__route__box">
                  <div className="themeTour-plan__routeAndIcon">
                    <FaMapMarkerAlt className="themeTour-plan__icon" />
                    <h4
                      className={`themeTour-plan__route ${
                        state.lenguage === "CN"
                          ? "cn-font__noto_medium cn_h4"
                          : ""
                      }`}
                    >
                      {plan.route}
                    </h4>
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
                <div className="richText-template themeTour-plan__itinerary">
                  <article
                    className={`richText-content text-align-justify ${
                      state.lenguage === "CN" ? "cn-font__noto_sans_light" : ""
                    }`}
                  >
                    <ReactMarkdown source={plan.stayAndMeals}></ReactMarkdown>
                  </article>
                </div>

                <div className="richText-template themeTour-plan__itinerary">
                  <article
                    className={`richText-content text-align-justify ${
                      state.lenguage === "CN" ? "cn-font__noto_sans_light" : ""
                    }`}
                  >
                    <ReactMarkdown source={plan.itinerary}></ReactMarkdown>
                  </article>
                </div>
                <Img
                  fluid={plan.photo1.sharp.fluid}
                  alt="photo1"
                  className="photo"
                ></Img>
                <Img
                  fluid={plan.photo2.sharp.fluid}
                  alt="photo2"
                  className="photo"
                ></Img>
              </div>
            </div>
          </div>
        )
      })}
    </article>
  )
}

export default TourPlans
