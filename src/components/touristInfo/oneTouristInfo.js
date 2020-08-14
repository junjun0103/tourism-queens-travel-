import React, { useContext } from "react"
import Layaout from "../ui/layout"
import { graphql } from "gatsby"
import { GlobalStateContext } from "../../context/GlobalContextProvider"
import ReactMarkdown from "react-markdown"
import SEO from "../SEO"

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

const OneTouristInfo = ({
  data: {
    allStrapiTouristInformation: { nodes },
  },
}) => {
  //language state
  const state = useContext(GlobalStateContext) || { lenguage: "CN" }

  //restructure
  const {
    title_en,
    title_cn,
    information_en,
    information_cn,
    notice_en,
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
      <SEO title_en={title_en} title_cn={title_cn} />
      <section className="section section-center">
        <div className="tourInfo-one__container">
          <h2 className="title-style">{title}</h2>
          <div className="tourInfo-one__box">
            {information.map(item => {
              return (
                <div className="tourInfo-one__items">
                  <h3>{item.subject}</h3>
                  <div
                    className={`richText-template tourInfo-one__content ${
                      state.lenguage === "CN" ? "cn-font__noto_light" : ""
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
              <h3>notice from queen's</h3>
              <div className="tourInfo-one__content">
                <h4>{notice}</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layaout>
  )
}

export default OneTouristInfo
