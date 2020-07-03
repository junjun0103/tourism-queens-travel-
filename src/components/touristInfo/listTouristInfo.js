import React, { useState } from "react"
import PreviewToursInfo from "./previewTouristInfo"
import useToursInfo from "../../hooks/useToursInfo"

const ListToursInfo = () => {
  //import tour hook datas
  const result = useToursInfo()

  //keep data en usestate
  const [toursinfo] = useState(result)
  return (
    <>
      <section className="section section-center section-tourInfo">
        <div className="listTourInfo-container">
          <h2 className="title-style">tourist information</h2>
          <div className="preview-listTourInfo__center">
            {/**Map for the datas */}
            {toursinfo.map(tourinfo => (
              <PreviewToursInfo key={tourinfo.slug} tourinfo={tourinfo} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default ListToursInfo
