import React, { useContext } from "react"
import { GlobalStateContext } from "../../context/GlobalContextProvider"

const Title = ({ titleEn, titleCn, subTitle, style = "subtitle-style" }) => {
  const state = useContext(GlobalStateContext) || { lenguage: "EN" }
  console.log(state.lenguage + ":::::")
  if (subTitle) {
    return (
      <div>
        {/* style = "subtitle-style" <= default style has margin top 1.2rem */}
        {/* "CN" has a different font style */}
        <h4
          className={`${style} ${
            state.lenguage === "CN" ? "cn-font__noto_bold" : ""
          }`}
        >
          {state.lenguage === "EN" ? titleEn : titleCn}
        </h4>
      </div>
    )
  } else {
    return (
      <div>
        {/* "CN" has a different font style */}
        <h2
          className={`title-style ${
            state.lenguage === "CN" ? "cn-font__noto_bold" : ""
          }`}
        >
          {state.lenguage === "EN" ? titleEn : titleCn}
        </h2>
      </div>
    )
  }
}

export default Title
