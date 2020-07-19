import { graphql, useStaticQuery } from "gatsby"

const UseItinerary = () => {
  const result = useStaticQuery(graphql`
    query {
      allStrapiItinerary(
        filter: { active: { eq: true } }
        sort: { fields: id, order: DESC }
      ) {
        nodes {
          slug
          id
          slug
          included_cn
          included_en
          highlight_cn
          highlight_en
          excluded_cn
          excluded_en
          policy_cn
          policy_en
          title_cn
          title_en
          slogan_cn
          slogan_en
          price_cn
          price_en
          priceDetail_cn
          priceDetail_en
          departureDay_cn
          departureDay_en
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

  return result.allStrapiItinerary.nodes.map(itinerary => ({
    id: itinerary.id,
    slug: itinerary.slug,
    included_cn: itinerary.included_cn,
    included_en: itinerary.included_en,
    highlight_cn: itinerary.highlight_cn,
    highlight_en: itinerary.highlight_en,
    excluded_cn: itinerary.excluded_cn,
    excluded_en: itinerary.excluded_en,
    policy_cn: itinerary.policy_cn,
    policy_en: itinerary.policy_en,
    title_cn: itinerary.title_cn,
    title_en: itinerary.title_en,
    slogan_cn: itinerary.slogan_cn,
    slogan_en: itinerary.slogan_en,
    price_cn: itinerary.price_cn,
    price_en: itinerary.price_en,
    priceDetail_cn: itinerary.priceDetail_cn,
    priceDetail_en: itinerary.priceDetail_en,
    departureDay_cn: itinerary.departureDay_cn,
    departureDay_en: itinerary.departureDay_en,
    plans_cn: itinerary.plans_cn,
    background_img: itinerary.background_img,
  }))
}

export default UseItinerary
