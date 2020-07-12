import React, { useState } from "react"
import Previewfeedback from "./previewFeedback"
import useFeedfback from "../../hooks/usefeedback"

const ListFeedBack = ({ contents, title }) => {
  //import feedback hook datas
  const result = useFeedfback()

  //keep data en usestate
  const [feedbacks] = useState(result)

  return (
    <>
      <section className="section section-center">
        <h2 className="title-style">reviews</h2>
        <h4 className="subtitle-style">Stroies from our clients</h4>
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
