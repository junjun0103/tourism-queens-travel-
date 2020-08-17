import React, { useContext } from "react"
import { GlobalStateContext } from "../../context/GlobalContextProvider"

const Title = ({
  titleEn,
  titleCn,
  subTitle,
  styleGlobal = "subtitle-style",
}) => {
  const state = useContext(GlobalStateContext) || { lenguage: "CN" }
  //if it is a subtitle, then show return this
  if (subTitle) {
    return (
      <div>
        {/* style = "subtitle-style" <= default style has margin top 1.2rem */}
        {/* "CN" has a different font style */}
        <h4
          className={`${styleGlobal} ${
            state.lenguage === "CN" ? "cn-font__noto_sans_light cn_h4" : ""
          }`}
        >
          {state.lenguage === "EN" ? titleEn : titleCn}
        </h4>
      </div>
    )
  }
  //if it is a title, then show return this
  else {
    return (
      <div>
        {/* "CN" has a different font style */}
        <h1
          className={`title-style ${
            state.lenguage === "CN"
              ? "cn-font__noto_bold  cn_h2"
              : "title-style__en"
          }`}
        >
          {state.lenguage === "EN" ? titleEn : titleCn}
        </h1>
      </div>
    )
  }
}

export default Title
