import React from "react"
import Layaout from "../layout"
import { graphql } from "gatsby"

export const query = graphql`
  query($slug: String!) {
    allStrapiTouristInformation(filter: { slug: { eq: $slug } }) {
      nodes {
        slug
        title_cn
        title_en
        notice_cn
        notice_en
        information_cn {
          content
          id
          subject
        }
        information_en {
          content
          id
          subject
        }
      }
    }
  }
`

const OneFeedBack = ({
  data: {
    allStrapiTouristInformation: { nodes },
  },
}) => {
  //restructure
  const { title_en, information_en, notice_en } = nodes[0]

  return (
    <Layaout>
      <section className="section">
        <div className="section-center ">
          <h2 className="title-style">{title_en}</h2>
          <div className="tourInfo-container">
            {information_en.map(item => {
              return (
                <div className="tourInfo-container_items">
                  <p>
                    <h3>{item.subject}</h3>
                  </p>
                  <p className="tourInfo-container_content">
                    <h4>{item.content}</h4>
                  </p>
                </div>
              )
            })}
            <div className="tourInfo-container_items tourInfo-container_items_notice">
              <p>
                <h3>notice from queen's</h3>
              </p>
              <p className="tourInfo-container_content">
                <h4>{notice_en}</h4>
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layaout>
  )
}

export default OneFeedBack
