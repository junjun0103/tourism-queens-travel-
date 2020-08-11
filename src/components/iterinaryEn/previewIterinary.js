import React, { useContext } from "react"
import { GlobalStateContext } from "../../context/GlobalContextProvider"
import { Link } from "gatsby"

const PreviewIterinary = ({ iterinary }) => {
  // language state
  const state = useContext(GlobalStateContext) || { lenguage: "EN" }
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

  //declare lenguage variables
  let title = "",
    slogan = "",
    price = "",
    departureDay = ""

  if (state.lenguage === "EN") {
    title = title_en
    slogan = slogan_en
    price = price_en
    departureDay = departureDay_en
  } else {
    title = title_cn
    slogan = slogan_cn
    price = price_cn
    departureDay = departureDay_cn
  }

  return (
    <>
      <Link to={"/bestSale/" + slug}>
        <div className="preview-container_bestSale preview-boxShadow">
          <img
            src={background_img.sharp.fluid.src}
            alt="img"
            className="preview-img"
          ></img>
          <h3
            className={`preview-title ${
              state.lenguage === "CN" ? "cn-font__noto_bold" : ""
            }`}
          >
            {title}
          </h3>
          <h4
            className={`preview-departureDay ${
              state.lenguage === "CN" ? "cn-font__noto_medium" : ""
            }`}
          >
            {departureDay}
          </h4>
          <h4
            className={`preview-shortDescription ${
              state.lenguage === "CN" ? "cn-font__noto_medium" : ""
            }`}
          >
            {slogan}
          </h4>
          <h4
            className={`preview-price ${
              state.lenguage === "CN" ? "cn-font__noto_medium" : ""
            }`}
          >
            {price}
          </h4>
        </div>
      </Link>
    </>
  )
}

export default PreviewIterinary
