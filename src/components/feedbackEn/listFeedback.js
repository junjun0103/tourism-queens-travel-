import React, { useState } from "react"
import Previewfeedback from "./previewFeedback"
import useFeedfback from "../../hooks/usefeedback"
import Title from "../ui/title"

const ListFeedBack = ({ contents, title }) => {
  //import feedback hook datas
  const result = useFeedfback()

  //keep data en usestate
  const [feedbacks] = useState(result)

  return (
    <>
      <Title titleEn="reviews" titleCn="客户分享"></Title>
      <Title
        subTitle={true}
        titleEn="Travelers' Stories"
        titleCn="旅行者的故事"
      ></Title>
      <div className=" preview-center">
        {/**Map for the datas */}
        {feedbacks.map(feedback => (
          <Previewfeedback key={feedbacks.id} feedback={feedback} />
        ))}
      </div>
    </>
  )
}

export default ListFeedBack
