import React from "react"
import { Link } from "gatsby"
import img from "../../images/new-zealand.jpg"

const PreviewIterinary = ({ iterinary }) => {
  const {
    slug,
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
    slogan_cn,
    slogan_en,
    price_cn,
    price_en,
    priceDetail_cn,
    priceDetail_en,
    departureDay_cn,
    departureDay_en,
    plans_cn,
    background_img,
  } = iterinary

  console.log(iterinary)
  return (
    <>
      <Link to={"/bestSale/" + slug}>
        <div className="preview-container_bestSale preview-boxShadow">
          <img
            src={background_img.sharp.fluid.src}
            alt="img"
            className="preview-img"
          ></img>
          <h3 className="preview-title">{title_en}</h3>
          <h4 className="preview-departureDay">{departureDay_en}</h4>
          <h4 className="preview-shortDescription">{slogan_en}</h4>
          <h4 className="preview-price">{price_en}</h4>
        </div>
      </Link>
    </>
  )
}

export default PreviewIterinary
