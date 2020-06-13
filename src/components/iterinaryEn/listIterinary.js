import React, { useState, useEffect } from "react"
import UseItinerary from "../../hooks/useItinerary"
import PreviewIterinary from "./previewIterinary"

const ListIterinary = () => {
  //bring data from hook
  const result = UseItinerary()

  //use state for keep the data
  const [iterinaries] = useState(result)

  return (
    <>
      <section className="section section-center">
        <h2 className="title-style">best sale</h2>
        <h3 className="subtitle-style">Iterinary subtitle</h3>
        <h3 className="subtitle-style">Iterinary subtitle</h3>
        <div className="preview-center">
          {/**Map for the datas */}
          {iterinaries.map(iterinary => (
            <PreviewIterinary key={iterinary.id} iterinary={iterinary} />
          ))}
        </div>
      </section>
    </>
  )
}

export default ListIterinary
