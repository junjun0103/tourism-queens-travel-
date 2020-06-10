import React, { useState } from "react"
import PreviewToursInfo from "./previewTouristInfo"
import useToursInfo from "../../hooks/useToursInfo"
import Title from "../title"

const ListToursInfo = () => {
  //import tour hook datas
  const result = useToursInfo()

  //keep data en usestate
  const [toursinfo] = useState(result)
  return (
    <>
      <section className="section section-center section-tourInfo">
        <div className="listTourInfo-container">
          <Title title="tourist information"></Title>
          <div className="preview-center_listTourInfo">
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
