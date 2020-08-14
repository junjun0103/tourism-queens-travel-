import React, { useState, useEffect, useContext } from "react"
import UseItinerary from "../../hooks/useItinerary"
import PreviewIterinary from "./previewIterinary"
import Title from "../ui/title"
import { GlobalStateContext } from "../../context/GlobalContextProvider"
const ListIterinary = () => {
  // language state
  const state = useContext(GlobalStateContext) || { lenguage: "CN" }

  //bring data from hook
  const result = UseItinerary()

  //use state for keep the data
  const [iterinaries] = useState(result)

  return (
    <>
      <Title titleEn="best sale" titleCn="群星热卖"></Title>

      <Title
        subTitle={true}
        titleEn="Have your own departure date for below tours if there are over 8 people in your group"
        titleCn="如果您的參團人數有8人以上，以下行程均可按照您定的日期包團出發"
      ></Title>
      <div className="preview-center">
        {state.lenguage === "EN"
          ? iterinaries.map(iterinary => {
              if (iterinary.englishTour) {
                {
                  /* show enlgish tour */
                }
                return (
                  <PreviewIterinary key={iterinary.id} iterinary={iterinary} />
                )
              }
            })
          : iterinaries.map(iterinary => {
              if (!iterinary.englishGuide) {
                {
                  /* show chinese tour */
                }
                return (
                  <PreviewIterinary key={iterinary.id} iterinary={iterinary} />
                )
              }
            })}
      </div>
    </>
  )
}

export default ListIterinary
