import React from "react"
import { graphql } from "gatsby"
import Layaout from "../layout"

export const query = graphql`
  query($slug: String!) {
    allStrapiItinerary(filter: { slug: { eq: $slug } }) {
      nodes {
        title_en
        excluded_en
        highlight_en
        included_en
        policy_en
        priceDetail_en
        price_en
        subTitle_en
      }
    }
  }
`

const OneIterinary = ({data:{allStrapiItinerary: { nodes }}}) => {
  //restructure
  const {
    title_en,
    excluded_en,
    highlight_en,
    included_en,
    policy_en,
    priceDetail_en,
    price_en,
    subTitle_en,
  } = nodes[0]
  return (
    <Layaout>
      <h1>one OneIterinary</h1>
    </Layaout>
  )
}

export default OneIterinary
