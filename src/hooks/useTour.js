import { graphql, useStaticQuery } from "gatsby"

const UseTour = () => {
  const result = useStaticQuery(graphql`
    query {
      allStrapiThemeTour {
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
          plans_en {
            id
            route
            stayAndMeals
            itinerary
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

  return result.allStrapiThemeTour.nodes.map(tour => ({
    excluded_cn: tour.excluded_cn,
    excluded_en: tour.excluded_en,
    highlight_cn: tour.highlight_cn,
    highlight_en: tour.highlight_en,
    slug: tour.slug,
    included_cn: tour.included_cn,
    included_en: tour.included_en,
    policy_cn: tour.policy_cn,
    policy_en: tour.policy_en,
    priceDetail_cn: tour.priceDetail_cn,
    priceDetail_en: tour.priceDetail_en,
    subTitle_cn: tour.subTitle_cn,
    subTitle_en: tour.subTitle_en,
    title_cn: tour.title_cn,
    title_en: tour.title_en,
    plans_en: tour.plans_en,
  }))
}

export default UseTour
