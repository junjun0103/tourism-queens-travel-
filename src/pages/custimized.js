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
  const [isChecked, setIsChecked] = React.useState(false)
  const toggleChecked = () => {
    setIsChecked(!isChecked)
  }
  return (
    <Layout>
      <section className="custimized-page section section-center">
        <article className="custimized-introduction_container">
          <div>
            <h2 className="title-style">customized tour</h2>
            <div className="custimized-introduction_content">
              <br />
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

        <article className="custimizedProcess_container">
          <div className="custimizedProcess_steps">
            <div className="custimizedProcess_circle">
              <div className="custimizedProcess_circleInside"></div>
            </div>
            <div className="custimizedProcess_text">
              <h3>1</h3>
              <h4 className="break-word">
                Confirm Number, Date, Duration, Special Request
              </h4>
            </div>
          </div>
          <div className="custimizedProcess_steps">
            <div className="custimizedProcess_circle">
              <div className="custimizedProcess_circleInside"></div>
            </div>
            <div className="custimizedProcess_text">
              <h3>2</h3>
              <h4 className="break-word">Initial Itinerary and Quotation</h4>
            </div>
          </div>
          <div className="custimizedProcess_steps">
            <div className="custimizedProcess_circle">
              <div className="custimizedProcess_circleInside"></div>
            </div>
            <div className="custimizedProcess_text">
              <h3>3</h3>
              <h4 className="break-word">
                Confirm Itinerary Sign Contract Pay 30% group fee Book Stays
                Activities Transportation
              </h4>
            </div>
          </div>
          <div className="custimizedProcess_steps">
            <div className="custimizedProcess_circle">
              <div className="custimizedProcess_circleInside"></div>
            </div>
            <div className="custimizedProcess_text">
              <h3>4</h3>
              <h4 className="break-word">
                Complete the banlance a month before departure. Receive a Group
                Notification
              </h4>
            </div>
          </div>
          <div className="custimizedProcess_steps">
            <div className="custimizedProcess_circle">
              <div className="custimizedProcess_circleInside"></div>
            </div>
            <div className="custimizedProcess_text">
              <h3>5</h3>
              <h4 className="break-word">
                Explore your holiday with Queen's Travel
              </h4>
            </div>
          </div>
        </article>

        <article className="customizedSlider-containder">
          <Slider
            contents={nodes}
            title="customized tour reviews"
            sliderStyle="reviews"
          ></Slider>
        </article>

        <article className="customizedForm-containder">
          <h3 className="customizedForm-title">
            Plan your holiday by 5 Simple Filters
          </h3>
          <div className="customizedForm-containder_outside">
            <form>
              <div className="customizedForm-containder_inside">
                <div className="customizedForm-containder_left">
                  <div className="customizedForm-containder_titleBox">
                    <hr className="customizedForm-containder_titleHr" />
                    <h3 className="customizedForm-containder_title">title</h3>
                    <hr className="customizedForm-containder_titleHr" />
                  </div>
                  <div className="customizedForm-containder_formBox">
                    <label className="customizedForm-containder_formBox_label">
                      <h4>Number of people</h4>
                    </label>
                    <input
                      className="customizedForm-input"
                      type="text"
                      placeholder="Number of people"
                      required
                    ></input>
                    <label className="customizedForm-containder_formBox_label">
                      <h4>Departure Date</h4>
                    </label>
                    <input
                      className="customizedForm-input"
                      type="text"
                      placeholder="Departure Date"
                      required
                    ></input>
                    <label className="customizedForm-containder_formBox_label"></label>
                    <div className="customizedForm-checkbox_container">
                      <input
                        type="checkbox"
                        value={isChecked}
                        onClick={toggleChecked}
                        id="customizedForm-checkbox"
                      ></input>
                      <label
                        className="customizedForm-checkbox_label"
                        for="customizedForm-checkbox"
                      >
                        I have flight tickets
                      </label>
                      <textarea
                        className={`customizedForm-input textarea-flightSchedule ${
                          isChecked ? "active" : "inactive"
                        }`}
                        type="text"
                        placeholder="Flight Schedule"
                      ></textarea>
                    </div>
                    <label className="customizedForm-containder_formBox_label">
                      <h4>Duration</h4>
                    </label>
                    <input
                      className="customizedForm-input"
                      type="text"
                      placeholder="Duration"
                      required
                    ></input>
                    <label className="customizedForm-containder_formBox_label">
                      <h4>Special Request</h4>
                    </label>
                    <input
                      className="customizedForm-input"
                      type="text"
                      placeholder="Special Request(Activity,Meal etc)"
                    ></input>
                    <label className="customizedForm-containder_formBox_label">
                      <h4>Budget</h4>
                    </label>
                    <input
                      className="customizedForm-input"
                      type="text"
                      placeholder="Budget"
                      required
                    ></input>
                  </div>
                </div>
                <div className="customizedForm-containder_right">
                  <div className="customizedForm-containder_titleBox">
                    <hr className="customizedForm-containder_titleHr" />
                    <h3 className="customizedForm-containder_title">title</h3>
                    <hr className="customizedForm-containder_titleHr" />
                  </div>
                  <div className="customizedForm-containder_formBox">
                    <label className="customizedForm-containder_formBox_label">
                      <h4>Name</h4>
                    </label>
                    <input
                      className="customizedForm-input"
                      type="text"
                      placeholder="Name"
                      required
                    ></input>
                    <label className="customizedForm-containder_formBox_label">
                      <h4>Email</h4>
                    </label>
                    <input
                      className="customizedForm-input"
                      type="text"
                      placeholder="Email"
                      required
                    ></input>
                    <label className="customizedForm-containder_formBox_label">
                      <h4>Phone</h4>
                    </label>
                    <input
                      className="customizedForm-input"
                      type="text"
                      placeholder="Phone"
                      required
                    ></input>
                    <label className="customizedForm-containder_formBox_label">
                      <h4>Other</h4>
                    </label>
                    <textarea
                      className="customizedForm-input"
                      type="text"
                      rows="3"
                      placeholder="Other"
                    ></textarea>
                    <button className="contact-form_btn btn mt2" type="submit">
                      submit
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </article>
      </section>
    </Layout>
  )
}

export default Custimized
