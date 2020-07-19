import React, { useState } from "react"
import Image from "gatsby-image"
import styled from "@emotion/styled"
import { FaMapMarkerAlt, FaPlus } from "react-icons/fa"

const Img = styled(Image)`
  width: 200px;
  height: 200px;

  @media (min-width: 768px) {
    width: 300px;
    height: 300px;
  }
`

const TourPlans = ({ plans, countPlans }) => {
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
              <button className="themeTour-plan__dot"></button>
              {/* if the plan is the last item,the line wont show up. */}
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
                <div className="themeTour-plan__stayAndMeals text-align-justify">
                  <h4>{plan.stayAndMeals}</h4>
                </div>
                <div className="themeTour-plan__itinerary text-align-justify">
                  <h4>{plan.itinerary}</h4>
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
