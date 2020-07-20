import { graphql, useStaticQuery } from "gatsby"

const UseFeedback = () => {
  const result = useStaticQuery(graphql`
    query {
      allStrapiFeedbacks(
        filter: { customTourFeedback: { eq: true } }
        sort: { fields: date, order: DESC }
      ) {
        nodes {
          id
          slug
          customTourFeedback
          title_en
          title_cn
          name_cn
          name_en
          content_cn
          content_en
          shortDescription_cn
          shortDescription_en
          date
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

  return result.allStrapiFeedbacks.nodes.map(feedback => ({
    id: feedback.id,
    slug: feedback.slug,
    customTourFeedback: feedback.customTourFeedback,
    title_en: feedback.title_en,
    title_cn: feedback.title_cn,
    name_cn: feedback.name_cn,
    name_en: feedback.name_en,
    content_cn: feedback.content_cn,
    content_en: feedback.content_en,
    shortDescription_cn: feedback.shortDescription_cn,
    shortDescription_en: feedback.shortDescription_en,
    date: feedback.date,
    photo: feedback.photo,
  }))
}

export default UseFeedback
