import React from "react"
import { Link } from "gatsby"
import img from "../../images/sample.jpg"

const PreviewTour = ({ tourinfo }) => {
  const { slug } = tourinfo

  return (
    <>
      {
        <Link to={"/touristInformation/" + slug}>
          <div className="preview-container_tourInfo">
            <img src={img} alt="img" className="preview-img_tourInfo"></img>
            <h3 className="preview-title_tourInfo">{slug}</h3>
          </div>
        </Link>
      }
    </>
  )
}

export default PreviewTour
