import React from "react"
import { Link } from "gatsby"

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
    slogan_cn,
    slogan_en,
    title_cn,
    title_en,
    background_img,
  } = tour

  return (
    <>
      <Link to={"/themeTour/" + slug}>
        <div className="preview-container_themeTour preview-boxShadow">
          <img
            src={background_img.sharp.fluid.src}
            alt="img"
            className="preview-img"
          ></img>
          <h3 className="preview-title">{title_en}</h3>
          <h4 className="preview-subTitle">{slogan_en}</h4>
        </div>
      </Link>
    </>
  )
}

export default PreviewTour
