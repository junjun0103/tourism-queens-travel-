import React from "react"
import { Link } from "gatsby"
import img from "../../images/sample.jpg"

const PreviewFeedback = ({ feedback }) => {
  const {
    id,
    title_en,
    title_cn,
    name_cn,
    name_en,
    content_cn,
    content_en,
    shortDescription_cn,
    shortDescription_en,
    date,
  } = feedback

  console.log(feedback)
  return (
    <>
      <Link to={"/" + id}>
        <div className="preview-container_review">
          <img src={img} alt="img" className="preview-img"></img>
          <h4 className="preview-departureDay">{title_en}</h4>
          <h4 className="preview-subtitle">{name_en}</h4>
          <h4 className="preview-shortDescription">{shortDescription_en}</h4>
          <h4 className="preview-price">{date}</h4>
        </div>
      </Link>
    </>
  )
}

export default PreviewFeedback
