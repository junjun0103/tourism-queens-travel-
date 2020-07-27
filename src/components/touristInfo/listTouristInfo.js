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
      <div className="listTourInfo-container section-center">
        <h2 className="title-style">tourist information</h2>
        <div className="preview-listTourInfo__center">
          {/**Map for the datas */}
          {toursinfo.map(tourinfo => (
            <PreviewToursInfo key={tourinfo.slug} tourinfo={tourinfo} />
          ))}
        </div>
      </div>
    </>
  )
}

export default ListToursInfo
