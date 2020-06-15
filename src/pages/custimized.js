import React, { useState } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import img from "../images/fern.jpg"
import Slider from "../components/slider"
import useFeedfback from "../hooks/usefeedback"

export const query = graphql`
  {
    allStrapiFeedbacks(
      filter: { customTourFeedback: { eq: true } }
      sort: { fields: date, order: DESC }
    ) {
      nodes {
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

const Custimized = ({
  data: {
    allStrapiFeedbacks: { nodes },
  },
}) => {
  console.log(nodes)
  return (
    <Layout>
      <section className="custimized-page section section-center">
        <article className="custimized-introduction_container">
          <div>
            <h2 className="title-style">customized tour</h2>
            <div className="custimized-introduction_content">
              <h4>
                s simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it s simply dummy text of the printing and
                typesetting industry. Lorem Ipsum
              </h4>
              <br />
              <h4>
                s simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has
              </h4>
              <br />
              <br />
              <h3>text of the printing and typesetting industry.</h3>
              <br />
              <h4>
                psum has been the industry's standard dummy text ever since the
                1500s, when an unknown printer took a galley of type and
              </h4>
              <br />
              <h4>
                scrambled it s simply dummy text of the printing and typesetting
                industry. Lorem Ipsum
              </h4>
            </div>
          </div>
          <div className="custimized-introduction_imgWithText">
            <img
              src={img}
              alt="img"
              className="custimized-introduction_img"
            ></img>
            <h2 className="custimized-introduction_text">
              Let us help you plan <br />
              <br /> your perfect holiday
            </h2>
          </div>
        </article>

        <article className="custimized-process_container">
          <div className="custimized-process_steps">
            <div className="custimized-process_circle">
              <div className="custimized-process_circleInside"></div>
            </div>
            <div className="custimized-process_text">
              <h3>1</h3>
              <h4 className="break-word">
                Confirm Number, Date, Duration, Special Request
              </h4>
            </div>
          </div>
          <div className="custimized-process_steps">
            <div className="custimized-process_circle">
              <div className="custimized-process_circleInside"></div>
            </div>
            <div className="custimized-process_text">
              <h3>2</h3>
              <h4 className="break-word">Initial Itinerary and Quotation</h4>
            </div>
          </div>
          <div className="custimized-process_steps">
            <div className="custimized-process_circle">
              <div className="custimized-process_circleInside"></div>
            </div>
            <div className="custimized-process_text">
              <h3>3</h3>
              <h4 className="break-word">
                Confirm Itinerary Sign Contract Pay 30% group fee Book Stays
                Activities Transportation
              </h4>
            </div>
          </div>
          <div className="custimized-process_steps">
            <div className="custimized-process_circle">
              <div className="custimized-process_circleInside"></div>
            </div>
            <div className="custimized-process_text">
              <h3>4</h3>
              <h4 className="break-word">
                Complete the banlance a month before departure. Receive a Group
                Notification
              </h4>
            </div>
          </div>
          <div className="custimized-process_steps">
            <div className="custimized-process_circle">
              <div className="custimized-process_circleInside"></div>
            </div>
            <div className="custimized-process_text">
              <h3>5</h3>
              <h4 className="break-word">
                Explore your holiday with Queen's Travel
              </h4>
            </div>
          </div>
        </article>

        <article className="slider-containder">
          <Slider contents={nodes} title="customized tour reviews"></Slider>
        </article>
      </section>
    </Layout>
  )
}

export default Custimized
