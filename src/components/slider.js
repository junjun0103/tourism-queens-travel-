import React, { useContext } from "react"
import Carousel from "react-elastic-carousel"
import { Link } from "gatsby"
import { GlobalStateContext } from "../context/GlobalContextProvider"
import Title from "../components/ui/title"
import "../css/components/slider.css"

const Slider = ({ contents, titleEn, titleCn, subTitleEn, subTitleCn }) => {
  const state = useContext(GlobalStateContext) || { lenguage: "EN" }

  return (
    <div>
      <Title titleEn={titleEn} titleCn={titleCn}></Title>
      <br />
      <Title
        subTitle={true}
        style="slider-title_mb"
        titleEn={subTitleEn}
        titleCn={subTitleCn}
      ></Title>
      <Carousel
        enableMouseSwipe={true}
        enableSwipe={true}
        showArrows={false}
        breakPoints={[
          { width: 1, itemsToShow: 1 },
          { width: 500, itemsToShow: 2, itemsToScroll: 2 },
          { width: 860, itemsToShow: 3, itemsToScroll: 3 },
        ]}
      >
        {contents.map(content => {
          //Declare variable
          var contentTitle = ""
          var contentName = ""
          var contentShortDesc = ""

          //Set up varables depending of the lenguage
          if (state.lenguage === "EN") {
            contentTitle = content.title_en
            contentName = content.name_en
            contentShortDesc = content.shortDescription_en
          } else {
            contentTitle = content.title_cn
            contentName = content.name_cn
            contentShortDesc = content.shortDescription_cn
          }

          //Carrousel for reviews
          return (
            <div className="preview-container_review slider-height">
              <img
                src={content.photo.sharp.fluid.src}
                alt="img"
                className="preview-img"
              ></img>

              <h4 className="preview-departureDay">{contentTitle}</h4>

              <h4
                className={`preview-subtitle ${
                  state.lenguage === "CN"
                    ? "cn-font__noto_sans_medium"
                    : "en-font__overpass_bold"
                }`}
              >
                {contentName}
              </h4>
              <h4 className="preview-shortDescription">{contentShortDesc}</h4>

              <Link className="preview-price" to={"/reviews/" + content.slug}>
                <h5>
                  {state.lenguage === "EN" ? "Read More" : "更多"}
                  <span
                    className={`preview-date ${
                      state.lenguage === "CN"
                        ? "cn-font__noto_sans_medium"
                        : "en-font__overpass_bold"
                    }`}
                  >
                    {content.date}
                  </span>
                </h5>
              </Link>
            </div>
          )
        })}
      </Carousel>
    </div>
  )
}

export default Slider
