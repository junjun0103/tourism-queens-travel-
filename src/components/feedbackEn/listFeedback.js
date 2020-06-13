import React, { useState } from "react"
import Previewfeedback from "./previewFeedback"
import useFeefback from "../../hooks/usefeedback"

const ListFeedBack = () => {
  //import feedback hook datas
  const result = useFeefback()

  //keep data en usestate
  const [feedbacks] = useState(result)

  return (
    <>
      <section className="section section-center">
        <h2 className="title-style">reviews</h2>
        <h3 className="subtitle-style">Iterinary subtitle</h3>
        <h3 className="subtitle-style">Iterinary subtitle</h3>
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
