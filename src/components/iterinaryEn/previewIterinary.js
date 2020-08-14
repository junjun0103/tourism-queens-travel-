import React, { useContext } from "react"
import { GlobalStateContext } from "../../context/GlobalContextProvider"
import { Link } from "gatsby"

const PreviewIterinary = ({ iterinary }) => {
  // language state
  const state = useContext(GlobalStateContext) || { lenguage: "CN" }
  const {
    slug,
    title_cn,
    slogan,
    price,
    departureDay,
    background_img,
  } = iterinary

  return (
    <>
      <Link to={"/bestSale/" + slug}>
        <div className="preview-container_bestSale preview-boxShadow">
          <img
            src={background_img.sharp.fluid.src}
            alt="img"
            className="preview-img"
          />
          <h3
            className={`preview-title ${
              state.lenguage === "CN" ? "cn-font__noto_bold" : ""
            }`}
          >
            {title_cn}
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
