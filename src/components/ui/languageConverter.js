import React, { useContext } from "react"
import { GlobalStateContext } from "../../context/GlobalContextProvider"

// tag : h3 or h4
// valueEn/valueCn : value for english or chinese
// styleGlobal : syle for english and chinese
// styleEn/styleCn : style for english or chinese
const LanguageConverter = ({
  tag,
  valueEn,
  valueCn,
  styleEn,
  styleCn,
  styleGlobal,
}) => {
  const state = useContext(GlobalStateContext) || { lenguage: "CN" }

  // return h4 tag
  if (tag === "h4") {
    return (
      <div>
        <h4
          className={`${styleGlobal} ${
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
          className={`${styleGlobal} ${
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
