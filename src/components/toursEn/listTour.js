import React, { useState } from "react"
import PreviewTour from "./previewTour"
import useTour from "../../hooks/useTour"
import Title from "../ui/title"

const ListTour = () => {
  //import tour hook datas
  const result = useTour()

  //keep data en usestate
  const [tours] = useState(result)
  return (
    <>
      <Title titleEn="Theme Tours" titleCn="独家主题行程"></Title>
      <Title
        subTitle={true}
        titleEn="Chinese & English Guides are available for the below tours"
        titleCn="以下行程为中文或英语导游带团"
      />
      <Title
        subTitle={true}
        styleGlobal="subtitle-style__noMT"
        titleEn="For more information, please see the itinerary details"
        titleCn="详情请查看各行程细节"
      />
      <div className="preview-center">
        {/**Map for the datas */}
        {tours.map(tour => (
          <PreviewTour key={tour.slug} tour={tour} />
        ))}
      </div>
    </>
  )
}

export default ListTour
