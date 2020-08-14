import React, { useContext } from "react"
import Layaout from "../ui/layout"
import { graphql } from "gatsby"
import { GlobalStateContext } from "../../context/GlobalContextProvider"
import LanguageConverter from "../../components/ui/languageConverter"
import ReactMarkdown from "react-markdown"

export const query = graphql`
  query($slug: String!) {
    allStrapiTouristInformation(filter: { slug: { eq: $slug } }) {
      nodes {
        slug
        title_cn
        title_en
        notice_cn
        notice_en
        information_cn {
          content
          id
          subject
        }
        information_en {
          content
          id
          subject
        }
      }
    }
  }
`

const OneFeedBack = ({
  data: {
    allStrapiTouristInformation: { nodes },
  },
}) => {
  const state = useContext(GlobalStateContext) || { lenguage: "CN" }

  //restructure
  const {
    title_en,
    information_en,
    notice_en,
    title_cn,
    information_cn,
    notice_cn,
  } = nodes[0]

  //declare lenguage variables
  var title = "",
    information = "",
    notice = ""

  if (state.lenguage === "EN") {
    title = title_en
    information = information_en
    notice = notice_en
  } else {
    title = title_cn
    information = information_cn
    notice = notice_cn
  }

  return (
    <Layaout>
      <section className="section section-center">
        <div className="tourInfo-one__container">
          <h2
            className={`title-style ${
              state.lenguage === "CN" ? "cn-font__noto_bold" : ""
            }`}
          >
            {title}
          </h2>
          <div className="tourInfo-one__box">
            {information.map(item => {
              return (
                <div className="tourInfo-one__items">
                  <h3
                    className={`${
                      state.lenguage === "CN" ? "cn-font__noto_bold" : ""
                    }`}
                  >
                    {item.subject}
                  </h3>
                  <div
                    className={`richText-template ${
                      state.lenguage === "CN" ? "cn-font__noto_sans_light" : ""
                    }`}
                  >
                    <article className="richText-content text-align-justify">
                      <ReactMarkdown source={item.content}></ReactMarkdown>
                    </article>
                  </div>
                </div>
              )
            })}
            <div className="tourInfo-one__items tourInfo-one_items__notice">
              <LanguageConverter
                tag="h3"
                styleCn="cn-font__noto_medium"
                valueEn="notice from queen's"
                valueCn="群星温馨提示"
              ></LanguageConverter>
              <div
                className={`richText-template tourInfo-one__content ${
                  state.lenguage === "CN" ? "cn-font__noto_sans_light" : ""
                }`}
              >
                <article className="richText-content text-align-justify">
                  <ReactMarkdown source={notice}></ReactMarkdown>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layaout>
  )
}

export default OneFeedBack
