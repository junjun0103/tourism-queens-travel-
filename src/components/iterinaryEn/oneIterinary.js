import React from "react"
import { graphql } from "gatsby"
import Layaout from "../layout"

export const query = graphql`
  query($id: String!) {
    allStrapiItinerary(filter: { id: { eq: $id } }) {
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

const OneIterinary = ({
  data: {
    allStrapiItinerary: { nodes },
  },
}) => {
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
    <>
      <Layaout>
        <h1>one OneIterinary</h1>
        <h1>{title_en}</h1>
        <p>{price_en}</p>
      </Layaout>
    </>
  )
}

export default OneIterinary
