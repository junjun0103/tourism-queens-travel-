import React from "react"
import Carousel from "react-elastic-carousel"
import { Link } from "gatsby"
import img from "../../images/sample.jpg"

const slider = ({ contents, title, sliderStyle }) => {
  return (
    <div>
      <h2 className="title-style slider-title_mb">{title}</h2>
      <Carousel
        breakPoints={[
          { width: 1, itemsToShow: 1 },
          { width: 480, itemsToShow: 2, itemsToScroll: 2 },
          { width: 770, itemsToShow: 3, itemsToScroll: 3 },
        ]}
      >
        {contents.map(content => {
          if (sliderStyle === "reviews") {
            return (
              <Link to={"/" + sliderStyle + "/" + content.slug}>
                <div className="preview-container_review slider-height">
                  <img src={img} alt="img" className="preview-img"></img>
                  <h4 className="preview-departureDay">{content.title_cn}</h4>
                  <h4 className="preview-subtitle">{content.name_cn}</h4>
                  <h4 className="preview-shortDescription">
                    {content.shortDescription_cn}
                  </h4>
                  <h4 className="preview-price">{content.date}</h4>
                </div>
              </Link>
            )
          } else {
            return (
              <Link to={"/" + sliderStyle + "/" + content.slug}>
                <div className="preview-container_themeTour  slider-height__slider preview-container_themeTour__slider">
                  <img src={img} alt="img" className="preview-img"></img>
                  <h3 className="preview-title">{content.title_cn}</h3>
                  <h4 className="preview-subTitle">{content.subTitle_cn}</h4>
                </div>
              </Link>
            )
          }
        })}
      </Carousel>
    </div>
  )
}

export default slider
