import React, { useContext } from "react"
import LanguageConverter from "../ui/languageConverter"
import { GlobalStateContext } from "../../context/GlobalContextProvider"
import ReactMarkdown from "react-markdown"

const TourInformation = ({
  priceDetails,
  included,
  excluded,
  notice,
  policy,
}) => {
  //language state
  const state = useContext(GlobalStateContext) || { lenguage: "EN" }
  return (
    <article className="themeTour-notice__article">
      <div className="themeTour-notice__price__box">
        <div className="themeTour-notice__title">
          <div className="themeTour-notice__title__lines">
            <div className="themeTour-notice__title__lines__top"></div>
            <div className="themeTour-notice__title__lines__bottom"></div>
          </div>
          <LanguageConverter
            tag="h3"
            styleCn="cn-font__noto_medium"
            valueEn="Price"
            valueCn="费用说明"
          />
          <div className="themeTour-notice__title__lines">
            <div className="themeTour-notice__title__lines__top"></div>
            <div className="themeTour-notice__title__lines__bottom"></div>
          </div>
        </div>
        <div className="themeTour-notice__content ">
          <article
            className={`richText-content text-align-justify ${
              state.lenguage === "CN" ? "cn-font__noto_sans_light" : ""
            }`}
          >
            <ReactMarkdown source={priceDetails}></ReactMarkdown>
          </article>
        </div>
      </div>
      <div className="themeTour-notice__included__box">
        <div className="themeTour-notice__title">
          <div className="themeTour-notice__title__lines">
            <div className="themeTour-notice__title__lines__top"></div>
            <div className="themeTour-notice__title__lines__bottom"></div>
          </div>
          <LanguageConverter
            tag="h3"
            styleCn="cn-font__noto_medium"
            valueEn="Included"
            valueCn="费用包含"
          />
          <div className="themeTour-notice__title__lines">
            <div className="themeTour-notice__title__lines__top"></div>
            <div className="themeTour-notice__title__lines__bottom"></div>
          </div>
        </div>
        <div className="themeTour-notice__content">
          <article
            className={`richText-content text-align-justify ${
              state.lenguage === "CN" ? "cn-font__noto_sans_light" : ""
            }`}
          >
            <ReactMarkdown source={included}></ReactMarkdown>
          </article>
        </div>
      </div>
      <div className="themeTour-notice__excluded__box">
        <div className="themeTour-notice__title">
          <div className="themeTour-notice__title__lines">
            <div className="themeTour-notice__title__lines__top"></div>
            <div className="themeTour-notice__title__lines__bottom"></div>
          </div>
          <LanguageConverter
            tag="h3"
            styleCn="cn-font__noto_medium"
            valueEn="Excluded"
            valueCn="费用不包含"
          />
          <div className="themeTour-notice__title__lines">
            <div className="themeTour-notice__title__lines__top"></div>
            <div className="themeTour-notice__title__lines__bottom"></div>
          </div>
        </div>
        <div className="themeTour-notice__content">
          <article
            className={`richText-content text-align-justify ${
              state.lenguage === "CN" ? "cn-font__noto_sans_light" : ""
            }`}
          >
            <ReactMarkdown source={excluded}></ReactMarkdown>
          </article>
        </div>
      </div>
      <div className="themeTour-notice__important__box">
        <div className="themeTour-notice__title">
          <div className="themeTour-notice__title__lines">
            <div className="themeTour-notice__title__lines__top"></div>
            <div className="themeTour-notice__title__lines__bottom"></div>
          </div>
          <LanguageConverter
            tag="h3"
            styleCn="cn-font__noto_medium"
            valueEn="Notice"
            valueCn="重要事项"
          />
          <div className="themeTour-notice__title__lines">
            <div className="themeTour-notice__title__lines__top"></div>
            <div className="themeTour-notice__title__lines__bottom"></div>
          </div>
        </div>
        <div className="themeTour-notice__content">
          <article
            className={`richText-content text-align-justify ${
              state.lenguage === "CN" ? "cn-font__noto_sans_light" : ""
            }`}
          >
            <ReactMarkdown source={notice}></ReactMarkdown>
          </article>
        </div>
      </div>
      <div className="themeTour-notice__policy__box">
        <div className="themeTour-notice__title">
          <div className="themeTour-notice__title__lines">
            <div className="themeTour-notice__title__lines__top"></div>
            <div className="themeTour-notice__title__lines__bottom"></div>
          </div>
          <LanguageConverter
            tag="h3"
            styleCn="cn-font__noto_medium"
            valueEn="Policy"
            valueCn="权益说明"
          />
          <div className="themeTour-notice__title__lines">
            <div className="themeTour-notice__title__lines__top"></div>
            <div className="themeTour-notice__title__lines__bottom"></div>
          </div>
        </div>
        <div className="themeTour-notice__content">
          <article
            className={`richText-content text-align-justify ${
              state.lenguage === "CN" ? "cn-font__noto_sans_light" : ""
            }`}
          >
            <ReactMarkdown source={policy}></ReactMarkdown>
          </article>
        </div>
      </div>
    </article>
  )
}

export default TourInformation
