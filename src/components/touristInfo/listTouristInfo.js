import React, { useState } from "react"
import PreviewToursInfo from "./previewTouristInfo"
import useToursInfo from "../../hooks/useToursInfo"
import Title from "../ui/title"

const ListToursInfo = () => {
  //import tour hook datas
  const result = useToursInfo()

  //keep data en usestate
  const [toursinfo] = useState(result)
  return (
    <>
      <div className="listTourInfo-container section-center">
        <Title titleEn="tourist information" titleCn="旅游资讯"></Title>
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
