import React from "react"
import urlSlug from "url-slug"
import { Link } from "gatsby"
import img from "../../images/sample.jpg"

const PreviewIterinary = ({ iterinary }) => {
  const {
    included_cn,
    included_en,
    highlight_cn,
    highlight_en,
    excluded_cn,
    excluded_en,
    policy_cn,
    policy_en,
    title_cn,
    title_en,
    subTitle_cn,
    subTitle_en,
    price_cn,
    price_en,
    priceDetail_cn,
    priceDetail_en,
    departureDay_cn,
    departureDay_en,
    plans_cn,
  } = iterinary

  console.log(iterinary)
  return (
    <>
      <Link to={"/" + urlSlug(title_en)}>
        <div className="preview-container_bestSale">
          <img src={img} alt="img" className="preview-img"></img>
          <h3 className="preview-title">{title_en}</h3>
          <h4 className="preview-departureDay">{departureDay_cn}</h4>
          <h4 className="preview-shortDescription">{subTitle_en}</h4>
          <h4 className="preview-price">{price_en}</h4>
        </div>
      </Link>
    </>
  )
}

export default PreviewIterinary
