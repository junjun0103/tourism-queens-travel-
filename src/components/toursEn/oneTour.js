import React from "react"
import Layaout from "../layout"
import { graphql } from "gatsby"

export const query = graphql`
  query($slug: String!) {
    allStrapiThemeTour(filter: { slug: { eq: $slug } }) {
      nodes {
        excluded_cn
        excluded_en
        highlight_cn
        highlight_en
        slug
        included_cn
        included_en
        policy_cn
        policy_en
        priceDetail_cn
        priceDetail_en
        subTitle_cn
        subTitle_en
        title_cn
        title_en
      }
    }
  }
`

const OneFeedBack = ({
  data: {
    allStrapiThemeTour: { nodes },
  },
}) => {
  //restructure
  const { subTitle_en, title_en } = nodes[0]

  return (
    <Layaout>
      <article className="themeTour-container__header">
        <div className="themeTour-container__header__title">
          <div className="themeTour-container__header__title_back"></div>
          <div className="themeTour-container__header__title_front">
            <h3>{title_en} dsadsad dsadsad</h3>
          </div>
        </div>
        <br />
        <div className="themeTour-container__header__subtitle">
          <h1>
            {subTitle_en}dsadsad sadassdadsad sdsadsad dsadsad sadassda
            sadassdadsad sdsadsad adassdadsad sdsadsad dsadsad sadassda
            sadassdadsad sdsadsad
          </h1>
        </div>
        <div className="themeTour-container__header__highlightBox">
          <div className="themeTour-container__header__highlightBox__content">
            <h4>
              highlight sadsad sadassdadsad sdsadsad dsadsad sadassda
              sadassdadsad sdsadsad adassdadsad sdsadsad dsadsad sadassda
              sadassdadsad sdsadsad sadassdadsad sdsadsad dsadsad sadassda
              sadassdadsad sdsadsad adassdadsad sdsadsad dsadsad sadassda
              sadassdadsad sdsadsad sadassdadsad sdsadsad dsadsad sadassda
            </h4>
          </div>
          <div className="themeTour-container__header__highlightBox__map">
            map
          </div>
        </div>
      </article>

      <section>
        <article></article>
        <article></article>
      </section>
    </Layaout>
  )
}

export default OneFeedBack
