import React, { useState } from "react"
import Previewfeedback from "./previewFeedback"
import useFeefback from "../../hooks/usefeedback"
import Title from "../title"
import SubTitle from "../subtitle"

const ListFeedBack = () => {
  //import feedback hook datas
  const result = useFeefback()

  //keep data en usestate
  const [feedbacks] = useState(result)

  return (
    <>
      <section className="section section-center">
        <Title title="reviews"></Title>
        <SubTitle subtitle="reviews subtitle"></SubTitle>
        <SubTitle subtitle="reviews subtitle"></SubTitle>
        <div className=" preview-center">
          {/**Map for the datas */}
          {feedbacks.map(feedback => (
            <Previewfeedback key={feedbacks.id} feedback={feedback} />
          ))}
        </div>
      </section>
    </>
  )
}

export default ListFeedBack
