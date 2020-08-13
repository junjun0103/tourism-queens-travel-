import { graphql, useStaticQuery } from "gatsby"

const UseItinerary = () => {
  const result = useStaticQuery(graphql`
    query {
      allStrapiBestSales(
        filter: { active: { eq: true } }
        sort: { fields: id, order: DESC }
      ) {
        nodes {
          slug
          id
          included
          highlight
          excluded
          policy
          title_cn
          slogan
          priceDetail
          departureDay
          background_img {
            sharp: childImageSharp {
              fluid {
                src
              }
            }
          }
          plans_cn {
            photo1 {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
            photo2 {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
          }
        }
      }
    }
  `)

  return result.allStrapiBestSales.nodes.map(itinerary => ({
    id: itinerary.id,
    slug: itinerary.slug,
    included:itinerary.included,
    highlight:itinerary.highlight,
    excluded:itinerary.excluded,
    policy:itinerary.policy,
    title_cn: itinerary.title_cn,
    slogan:itinerary.slogan,
    price:itinerary.price,
    priceDetail:itinerary.priceDetail,
    departureDay:itinerary.departureDay,
    plans_cn: itinerary.plans_cn,
    background_img: itinerary.background_img,
  }))
}

export default UseItinerary
