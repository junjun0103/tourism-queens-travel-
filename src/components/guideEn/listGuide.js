import React, { useState } from "react"
import PreviewGuide from "./previewGuide"
import useGuide from "../../hooks/useGuide"
import Title from "../title"
import SubTitle from "../subtitle"

const ListGuide = ({}) => {
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
    <section className="section section-center">
      <Title title="Guide Team"></Title>
      <SubTitle subtitle="guid subtitle"></SubTitle>
      <SubTitle subtitle="guid subtitle"></SubTitle>
      {/* english/chinese guide change button */}
      <button onClick={toggleGuide} className="btn btn-right">
        {isChineseGuide
          ? "find English Speaking Tour guides"
          : "find Chinese Speaking Tour guides"}
      </button>
      <div className="listGuide-container">
        {isChineseGuide
          ? guides.map(guide => {
              if (!guide.englishGuide) {
                {
                  /* show chinese guides */
                }
                return <PreviewGuide key={guide.slug} guide={guide} />
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
    </section>
  )
}

export default ListGuide
