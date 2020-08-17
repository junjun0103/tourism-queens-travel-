import React, { useState, useContext } from "react"
import PreviewGuide from "./previewGuide"
import useGuide from "../../hooks/useGuide"
import Title from "../ui/title"
import { GlobalStateContext } from "../../context/GlobalContextProvider"
const ListGuide = ({}) => {
  //language state
  const state = useContext(GlobalStateContext) || { lenguage: "CN" }

  // "isChineseGuide = false" means show english speaking tour guides
  const [isChineseGuide, setIsChineseGuide] = React.useState(false)
  const toggleGuide = () => {
    setIsChineseGuide(!isChineseGuide)
  }
  //import tour hook datas
  const result = useGuide()

  //keep data en usestate
  const [guides] = useState(result)

  return (
    <>
      <Title titleEn="Guide Team" titleCn="群星导游"></Title>

      <Title
        subTitle={true}
        titleEn="Let our professional team shows you how amazing New Zealand is"
        titleCn="群星导游精英团队带您从南到北玩转独特魅力的新西兰"
      ></Title>
      <Title
        subTitle={true}
        styleGlobal="subtitle-style__noMT"
        titleEn="Find our guides below and see how they become travel experts"
        titleCn="观看下方了解他们如何成为新西兰旅游达人的故事"
      ></Title>

      {/* english/chinese guide change button */}
      <button onClick={toggleGuide} className="btn btn-right mt-1 mr-2">
        {isChineseGuide
          ? state.lenguage === "EN"
            ? "Find English Speaking guides"
            : "查看英文导游"
          : state.lenguage === "EN"
          ? "Find Chinese Speaking guides"
          : "查看中文导游"}
      </button>
      <div className="listGuide-container">
        {isChineseGuide
          ? guides.map(guide => {
              if (!guide.englishGuide) {
                {
                  /* show chinese guides */
                }
                return (
                  <PreviewGuide key={guide.slug} guide={guide} language="CN" />
                )
              }
            })
          : guides.map(guide => {
              if (guide.englishGuide) {
                {
                  /* show english guides */
                }
                return <PreviewGuide key={guide.slug} guide={guide} />
              }
            })}
      </div>
    </>
  )
}

export default ListGuide
