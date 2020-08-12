import React, { useContext } from "react"
import { GlobalStateContext } from "../../context/GlobalContextProvider"

// tag : h3 or h4
// valueEn/valueCn : english and chinese
// style : syle for english and chinese
// styleEn/styleCn : style for english and chinese
const LanguageConverter = ({
  tag,
  valueEn,
  valueCn,
  styleEn,
  styleCn,
  style,
}) => {
  const state = useContext(GlobalStateContext) || { lenguage: "EN" }

  // return h4 tag
  if (tag === "h4") {
    return (
      <div>
        <h4
          className={`${style} ${
            state.lenguage === "EN" ? styleEn : `cn_h4 ${styleCn}`
          }`}
        >
          {state.lenguage === "EN" ? valueEn : valueCn}
        </h4>
      </div>
    )
  }
  // return h3 tag
  else if (tag === "h3") {
    return (
      <div>
        <h3
          className={`${style} ${
            state.lenguage === "EN" ? styleEn : `cn_h3 ${styleCn}`
          }`}
        >
          {state.lenguage === "EN" ? valueEn : valueCn}
        </h3>
      </div>
    )
  } else {
    return null
  }
}

export default LanguageConverter
