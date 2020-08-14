import React, { useContext } from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import { GlobalStateContext } from "../context/GlobalContextProvider"
export const query = graphql`
  {
    site {
      siteMetadata {
        author
        siteTitle_en: title_en
        siteTitle_cn: title_cn
        defaultImage: image
        siteUrl: url
        siteDesc_en: description_en
        siteDesc_cn: description_cn
      }
    }
  }
`
const SEO = ({ title_en, title_cn, desc_en, desc_cn }) => {
  // language status
  const state = useContext(GlobalStateContext) || { lenguage: "CN" }
  const { site } = useStaticQuery(query)
  const {
    author,
    siteTitle_en,
    siteTitle_cn,
    defaultImage,
    siteUrl,
    siteDesc_en,
    siteDesc_cn,
  } = site.siteMetadata

  //   declear
  let siteTitle = "",
    siteDesc = "",
    lang = ""
  // set the vailables into different languages
  if (state.lenguage === "CN") {
    lang = "cn"
    siteTitle = siteTitle_cn
    siteDesc = siteDesc_cn
  } else {
    lang = "en"
    siteTitle = siteTitle_en
    siteDesc = siteDesc_en
  }

  //   declear
  let title = "",
    desc = ""
  // set the vailables into different languages
  if (state.lenguage === "CN") {
    title = title_cn
    desc = desc_cn
  } else {
    title = title_en
    desc = desc_en
  }

  return (
    <Helmet htmlAttributes={{ lang: lang }} title={`${title} | ${siteTitle}`}>
      <meta name="description" content={desc || siteDesc}></meta>
      <meta name="image" content={`${image || defaultImage}`} />
      <meta name="url" content={siteUrl}></meta>
    </Helmet>
  )
}

export default SEO
