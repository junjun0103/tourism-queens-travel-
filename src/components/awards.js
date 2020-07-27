import React from "react"
import img1 from "../images/Qualmark_Quality_Assured.png"
import img2 from "../images/new_zealand_tourism.jpg"
import img3 from "../images/tourism_export_council.png"
import img4 from "../images/TIA-Logo-Colour-Full.png"
import "../css/components/awards.css"

const awards = ({ styleFor }) => {
  return (
    <div className="aboutUs-awards__imgs">
      <img
        src={img1}
        alt="img1"
        className={`${
          styleFor === "footer"
            ? "aboutUs-awards__img__small"
            : "aboutUs-awards__img"
        }`}
      ></img>
      <img
        src={img2}
        alt="img2"
        className={`${
          styleFor === "footer"
            ? "aboutUs-awards__img__small"
            : "aboutUs-awards__img"
        }`}
      ></img>
      <img
        src={img3}
        alt="img3"
        className={`${
          styleFor === "footer"
            ? "aboutUs-awards__img__small"
            : "aboutUs-awards__img"
        }`}
      ></img>
      <img
        src={img4}
        alt="img4"
        className={`${
          styleFor === "footer"
            ? "aboutUs-awards__img__small"
            : "aboutUs-awards__img"
        }`}
      ></img>
    </div>
  )
}

export default awards
