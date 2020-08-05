import React from "react"
import Title from "../ui/title"
import {
  FaEye,
  FaUserTie,
  FaHotjar,
  FaStar,
  FaSeedling,
  FaSmile,
} from "react-icons/fa"

const WhyUs = () => {
  return (
    <article className="main-whyUs__containder">
      <Title titleEn="why us" titleCn="为什么选择群星假期"></Title>
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
  )
}

export default WhyUs
