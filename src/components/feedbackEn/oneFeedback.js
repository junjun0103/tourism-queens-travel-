import React from "react"
import Layaout from "../ui/layout"
import { graphql } from "gatsby"

export const query = graphql`
  query($slug: String!) {
    allStrapiFeedbacks(filter: { slug: { eq: $slug } }) {
      nodes {
        content_cn
        content_en
        name_cn
        name_en
        shortDescription_cn
        shortDescription_en
        title_cn
        title_en
        date
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
`

const OneFeedBack = ({
  data: {
    allStrapiFeedbacks: { nodes },
  },
}) => {
  //restructure
  const {
    slug,
    content_cn,
    content_en,
    name_cn,
    name_en,
    shortDescription_cn,
    shortDescription_en,
    title_cn,
    title_en,
    date,
    photo,
  } = nodes[0]

  return (
    <Layaout>
      <section className="section section-center">
        <div className=" review-container">
          <div className="review-container_items">
            <img
              src={photo.sharp.fluid.src}
              alt="img"
              className="review-img"
            ></img>
            <div className="review-contents">
              <h2>{title_en}</h2>
              <h3 className="review-contents_nameDate">
                {name_en}&nbsp;
                {date}
              </h3>
              <p className="review-contents_content">{content_en}</p>
            </div>
          </div>
        </div>
      </section>
    </Layaout>
  )
}

export default OneFeedBack
