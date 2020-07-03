import React from "react"
import { Link } from "gatsby"
import img from "../../images/sample.jpg"

const PreviewTour = ({ tourinfo }) => {
  const { slug } = tourinfo

  return (
    <>
      {
        <Link to={"/touristInformation/" + slug}>
          <div className="preview-tourInfo__container">
            <img src={img} alt="img" className="preview-tourInfo__img"></img>
            <h3 className="preview-tourInfo__title">{slug}</h3>
          </div>
        </Link>
      }
    </>
  )
}

export default PreviewTour
