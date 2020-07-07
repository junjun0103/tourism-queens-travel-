import React, { useState } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import img from "../images/fern.jpg"
import Slider from "../components/slider"
import Customized_5steps from "../components/customized_5steps"

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
      }
    }
  }
`

const Customized = ({
  data: {
    allStrapiFeedbacks: { nodes },
  },
}) => {
  const [isChecked, setIsChecked] = React.useState(false)
  const toggleChecked = () => {
    setIsChecked(!isChecked)
  }
  return (
    <Layout
      lenguage="EN"
    >
      <section className="custimized-page section section-center">
        <article className="custimized-introduction__container">
          <div>
            <h2 className="title-style">customized tour</h2>
            <div className="custimized-introduction__content">
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
          <div className="custimized-introduction__imgWithText">
            <img
              src={img}
              alt="img"
              className="custimized-introduction__img"
            ></img>
            <h2 className="custimized-introduction__text">
              Let us help you plan <br />
              <br /> your perfect holiday
            </h2>
          </div>
        </article>

        <article className="custimizedProcess-container">
          <Customized_5steps></Customized_5steps>
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
          <div className="customizedForm-outside">
            <form>
              <div className="customizedForm-inside">
                <div className="customizedForm-left">
                  <div className="customizedForm-titleBox">
                    <hr className="customizedForm-titleHr" />
                    <h3 className="customizedForm-title__inside">title</h3>
                    <hr className="customizedForm-titleHr" />
                  </div>
                  <div className="customizedForm-formBox">
                    <label className="customizedForm-formBox__label">
                      <h4>Number of people</h4>
                    </label>
                    <input
                      className="customizedForm-input"
                      type="text"
                      placeholder="Number of people"
                      required
                    ></input>
                    <label className="customizedForm-formBox__label">
                      <h4>Departure Date</h4>
                    </label>
                    <input
                      className="customizedForm-input"
                      type="text"
                      placeholder="Departure Date"
                      required
                    ></input>
                    <label className="customizedForm-containder_formBox__label"></label>
                    <div className="customizedForm-checkbox__container">
                      <input
                        type="checkbox"
                        value={isChecked}
                        onClick={toggleChecked}
                        id="customizedForm-checkbox"
                      ></input>
                      <label
                        className="customizedForm-checkbox__label"
                        htmlFor="customizedForm-checkbox"
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
                    <label className="customizedForm-formBox__label">
                      <h4>Duration</h4>
                    </label>
                    <input
                      className="customizedForm-input"
                      type="text"
                      placeholder="Duration"
                      required
                    ></input>
                    <label className="customizedForm-formBox__label">
                      <h4>Special Request</h4>
                    </label>
                    <input
                      className="customizedForm-input"
                      type="text"
                      placeholder="Special Request(Activity,Meal etc)"
                    ></input>
                    <label className="customizedForm-formBox__label">
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
                <div className="customizedForm-right">
                  <div className="customizedForm-titleBox">
                    <hr className="customizedForm-titleHr" />
                    <h3 className="customizedForm-title__inside">title</h3>
                    <hr className="customizedForm-titleHr" />
                  </div>
                  <div className="customizedForm-formBox">
                    <label className="customizedForm-formBox__label">
                      <h4>Name</h4>
                    </label>
                    <input
                      className="customizedForm-input"
                      type="text"
                      placeholder="Name"
                      required
                    ></input>
                    <label className="customizedForm-formBox__label">
                      <h4>Email</h4>
                    </label>
                    <input
                      className="customizedForm-input"
                      type="text"
                      placeholder="Email"
                      required
                    ></input>
                    <label className="customizedForm-formBox__label">
                      <h4>Phone</h4>
                    </label>
                    <input
                      className="customizedForm-input"
                      type="text"
                      placeholder="Phone"
                      required
                    ></input>
                    <label className="customizedForm-formBox__label">
                      <h4>Other</h4>
                    </label>
                    <textarea
                      className="customizedForm-input"
                      type="text"
                      rows="3"
                      placeholder="Other"
                    ></textarea>
                    <button className="contact-form__btn btn mt2" type="submit">
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

export default Customized
