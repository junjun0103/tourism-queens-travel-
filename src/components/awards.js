import React from "react"
import img1 from "../images/Qualmark_Quality_Assured.png"
import img2 from "../images/new_zealand_tourism.png"
import img3 from "../images/tourism_export_council.png"
import img4 from "../images/TIA-Logo-Colour-Full.png"

const awards = () => {
  return (
    <div className="aboutUs-awards_imgs">
      <img src={img1} alt="img1" className="aboutUs-awards_img"></img>
      <img src={img2} alt="img2" className="aboutUs-awards_img"></img>
      <img src={img3} alt="img3" className="aboutUs-awards_img"></img>
      <img src={img4} alt="img4" className="aboutUs-awards_img"></img>
    </div>
  )
}

export default awards
