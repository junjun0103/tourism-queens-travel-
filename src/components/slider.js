import React from "react"
import Carousel from "react-elastic-carousel"
import { Link } from "gatsby"
import img from "../images/sample.jpg"

const slider = ({ contents, title }) => {
  return (
    <div>
      <div className="slider-containder_title">
        <h2 className="title-style">{title}</h2>
      </div>
      <Carousel
        breakPoints={[
          { width: 1, itemsToShow: 1 },
          { width: 480, itemsToShow: 2, itemsToScroll: 2 },
          { width: 770, itemsToShow: 3, itemsToScroll: 3 },
        ]}
      >
        {contents.map(content => (
          <Link to={"/" + content.id}>
            <div className="preview-container_review slider-height">
              <img src={img} alt="img" className="preview-img"></img>
              <h4 className="preview-departureDay">{content.title_en}</h4>
              <h4 className="preview-subtitle">{content.name_en}</h4>
              <h4 className="preview-shortDescription">
                {content.shortDescription_en}
              </h4>
              <h4 className="preview-price">{content.date}</h4>
            </div>
          </Link>
        ))}
      </Carousel>
    </div>
  )
}

export default slider
