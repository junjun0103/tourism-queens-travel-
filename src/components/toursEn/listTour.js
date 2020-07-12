import React, { useState } from "react"
import PreviewTour from "./previewTour"
import useTour from "../../hooks/useTour"

const ListTour = () => {
  //import tour hook datas
  const result = useTour()

  //keep data en usestate
  const [tours] = useState(result)
  return (
    <>
      <section className="section section-center">
        <h2 className="title-style">Theme Tours</h2>
        <h4 className="subtitle-style">
          Explore your travel dream with our unique tour
        </h4>
        <div className="preview-center">
          {/**Map for the datas */}
          {tours.map(tour => (
            <PreviewTour key={tour.slug} tour={tour} />
          ))}
        </div>
      </section>
    </>
  )
}

export default ListTour
