import { graphql, useStaticQuery } from "gatsby"

const UseTour = () => {
  const result = useStaticQuery(graphql`
    query {
      allStrapiTourGuides {
        nodes {
          name
          profile
          englishGuide
          active
          slug
          photo {
            sharp: childImageSharp {
              fluid {
                src
              }
            }
          }
        }
      }
    }
  `)

  return result.allStrapiTourGuides.nodes.map(guide => ({
    name: guide.name,
    profile: guide.profile,
    englishGuide: guide.englishGuide,
    active: guide.active,
    slug: guide.slug,
    photo: guide.photo,
  }))
}

export default UseTour
