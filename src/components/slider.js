import React, { useContext } from "react"
import Carousel from "react-elastic-carousel"
import { Link } from "gatsby"
import { GlobalStateContext } from "../context/GlobalContextProvider"
import "../css/components/slider.css"

const Slider = ({ contents, title, sliderStyle }) => {
  const state = useContext(GlobalStateContext) || { lenguage: "EN" }

  return (
    <div>
      <h2 className="title-style">{title}</h2>
      <h4 className="subtitle-style slider-title_mb">
        {sliderStyle === "themeTour"
          ? "Explore your travel dream with our unique tour"
          : "Stroies from our clients"}
      </h4>
      <Carousel
        breakPoints={[
          { width: 1, itemsToShow: 1 },
          { width: 480, itemsToShow: 2, itemsToScroll: 2 },
          { width: 770, itemsToShow: 3, itemsToScroll: 3 },
        ]}
      >
        {contents.map(content => {
          //Declare variable
          var contentTitle = ""
          var contentSlogan = ""
          var contentName = ""
          var contentShortDesc = ""

          //Set up varables depending of the lenguage
          if (state.lenguage === "EN") {
            contentTitle = content.title_en
            contentSlogan = content.slogan_en
            contentName = content.name_en
            contentShortDesc = content.shortDescription_en
          } else {
            contentTitle = content.title_cn
            contentSlogan = content.slogan_cn
            contentName = content.name_cn
            contentShortDesc = content.shortDescription_cn
          }

          //Carrousel for reviews
          if (sliderStyle === "reviews") {
            return (
              <Link to={"/" + sliderStyle + "/" + content.slug}>
                <div className="preview-container_review slider-height">
                  <img
                    src={content.photo.sharp.fluid.src}
                    alt="img"
                    className="preview-img"
                  ></img>
                  <h4 className="preview-departureDay">{contentTitle}</h4>
                  <h4 className="preview-subtitle">{contentName}</h4>
                  <h4 className="preview-shortDescription">
                    {contentShortDesc}
                  </h4>
                  <h4 className="preview-price">{content.date}</h4>
                </div>
              </Link>
            )
          }
          //Carrousel for ThemeTour
          else {
            return (
              <Link to={"/" + sliderStyle + "/" + content.slug}>
                <div className="preview-container_themeTour  slider-height__slider preview-container_themeTour__slider">
                  <img
                    src={content.background_img.sharp.fluid.src}
                    alt="img"
                    className="preview-img"
                  ></img>
                  <h3 className="preview-title">{contentTitle}</h3>
                  <h4 className="preview-subTitle">{contentSlogan}</h4>
                </div>
              </Link>
            )
          }
        })}
      </Carousel>
    </div>
  )
}

export default Slider
