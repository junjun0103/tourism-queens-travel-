import React, { useState, useEffect } from "react"
import UseItinerary from "../../hooks/useItinerary"
import PreviewIterinary from "./previewIterinary"
import Title from "../ui/title"

const ListIterinary = () => {
  //bring data from hook
  const result = UseItinerary()

  //use state for keep the data
  const [iterinaries] = useState(result)

  return (
    <>
      <Title titleEn="best sale" titleCn="群星热卖"></Title>

      <Title
        subTitle={true}
        titleEn="Have your own departure date for below tours if there are over 8 people
          in your group"
        titleCn="      如果您的參團人數有8人以上，以下行程均可按照您定的日期包團出發
          "
      ></Title>
      <div className="preview-center">
        {/**Map for the datas */}
        {iterinaries.map(iterinary => (
          <PreviewIterinary key={iterinary.id} iterinary={iterinary} />
        ))}
      </div>
    </>
  )
}

export default ListIterinary
