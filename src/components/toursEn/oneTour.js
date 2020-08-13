import React, { useContext } from "react"
import Layaout from "../ui/layout"
import { graphql } from "gatsby"
import { GlobalStateContext } from "../../context/GlobalContextProvider"
import HeaderImage from "../ui/headerImageTour"
import TourPlans from "../ui/tourPlans"
import TourInformation from "../ui/tourInformation"

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
        slogan_cn
        slogan_en
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
        plans_en {
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

const OneFeedBack = ({
  data: {
    allStrapiThemeTour: { nodes },
  },
}) => {
  //restructure
  const {
    background_img,
    map,
    slogan_en,
    slogan_cn,
    title_en,
    title_cn,
    highlight_cn,
    highlight_en,
    plans_en,
    plans_cn,
    excluded_en,
    excluded_cn,
    included_en,
    included_cn,
    policy_en,
    policy_cn,
    priceDetail_en,
    priceDetail_cn,
  } = nodes[0]
  const state = useContext(GlobalStateContext) || { lenguage: "EN" }

  //declare lenguage variables
  var countPlans = 0,
    title = "",
    slogan = "",
    highlight = "",
    plans = [],
    priceDetails = "",
    included = "",
    excluded = "",
    policy = ""

  //declare global image variables
  const bgImage = background_img.sharp.fluid,
    mapImage = map.sharp.fixed.src

  if (state.lenguage === "EN") {
    //main Background Image
    title = title_en
    slogan = slogan_en
    highlight = highlight_en
    //plans
    plans = plans_en
    countPlans = plans_en.length
    //information
    priceDetails = priceDetail_en
    included = included_en
    excluded = excluded_en
    policy = policy_en
  } else {
    //English main Background Image
    title = title_cn
    slogan = slogan_cn
    highlight = highlight_cn
    //Chinese plans
    countPlans = plans_cn.length
    plans = plans_cn
    //Chinese information
    priceDetails = priceDetail_cn
    included = included_cn
    excluded = excluded_cn
    policy = policy_cn
  }
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

      <section className="section section-center ">
        {/**List Plans*/}
        <TourPlans plans={plans} countPlans={countPlans}></TourPlans>

        {/**Plans Information */}
        <TourInformation
          priceDetails={priceDetails}
          included={included}
          excluded={excluded}
          policy={policy}
        ></TourInformation>
      </section>
    </Layaout>
  )
}

export default OneFeedBack
