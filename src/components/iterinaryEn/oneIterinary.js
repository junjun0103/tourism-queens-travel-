import React, { useContext } from "react"
import Layaout from "../ui/layout"
import { graphql } from "gatsby"
import { GlobalStateContext } from "../../context/GlobalContextProvider"
import HeaderImage from "../ui/headerImageTour"
import TourPlans from "../ui/tourPlans"
import TourInformation from "../ui/tourInformation"

export const query = graphql`
  query($slug: String!) {
    allStrapiBestSales(filter: { slug: { eq: $slug } }) {
      nodes {
        excluded
        highlight
        slug
        included
        policy
        priceDetail
        slogan
        title_cn
        title_en
        background_img {
          sharp: childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        map {
          sharp: childImageSharp {
            fixed {
              ...GatsbyImageSharpFixed
            }
          }
        }
        plans_cn {
          id
          route
          stayAndMeals
          itinerary
          photo1 {
            sharp: childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
          photo2 {
            sharp: childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`

const OneIterinary = ({
  data: {
    allStrapiBestSales: { nodes },
  },
}) => {
  //destructuring
  const {
    background_img,
    map,
    slogan,
    title_cn,
    highlight,
    plans_cn,
    excluded,
    included,
    policy,
    priceDetail,
  } = nodes[0]
  const state = useContext(GlobalStateContext) || { lenguage: "CN" }

  //declare lenguage variables
  var countPlans = 0

  //declare global image variables
  const bgImage = background_img.sharp.fluid,
    mapImage = map.sharp.fixed.src

  var title = title_cn,
    plans = plans_cn

  return (
    <Layaout>
      {/** Main Background Image*/}
      <HeaderImage
        title={title}
        slogan={slogan}
        highlight={highlight}
        bgImage={bgImage}
        mapImage={mapImage}
      >
        {" "}
      </HeaderImage>

      <section className="section section-center">
        {/**List Plans*/}
        <TourPlans plans={plans} countPlans={countPlans}></TourPlans>

        {/**Plans Information */}
        <TourInformation
          priceDetails={priceDetail}
          included={included}
          excluded={excluded}
          policy={policy}
        ></TourInformation>
      </section>
    </Layaout>
  )
}

export default OneIterinary
