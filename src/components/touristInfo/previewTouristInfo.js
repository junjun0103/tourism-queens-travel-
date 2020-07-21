import React from "react"
import { Link } from "gatsby"

const PreviewTour = ({ tourinfo }) => {
  const { slug } = tourinfo

  return (
    <>
      {
        <Link to={"/touristInformation/" + slug}>
          <div className="preview-tourInfo__container">
            <img
              src={tourinfo.icon.sharp.fluid.src}
              alt="img"
              className="preview-tourInfo__img"
            ></img>
            <h3 className="preview-tourInfo__title">{slug}</h3>
          </div>
        </Link>
      }
    </>
  )
}

export default PreviewTour
