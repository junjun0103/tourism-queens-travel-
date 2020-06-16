import React from "react"
import { Link } from "gatsby"
import img from "../../images/sample.jpg"

const PreviewTour = ({ tour }) => {
  const {
    excluded_cn,
    excluded_en,
    highlight_cn,
    highlight_en,
    slug,
    included_cn,
    included_en,
    policy_cn,
    policy_en,
    priceDetail_cn,
    priceDetail_en,
    subTitle_cn,
    subTitle_en,
    title_cn,
    title_en,
  } = tour

  return (
    <>
      <Link to={"/themeTour/" + slug}>
        <div className="preview-container_themeTour preview-boxShadow">
          <img src={img} alt="img" className="preview-img"></img>
          <h3 className="preview-title">{title_en}</h3>
          <h4 className="preview-subTitle">{subTitle_en}</h4>
        </div>
      </Link>
    </>
  )
}

export default PreviewTour
