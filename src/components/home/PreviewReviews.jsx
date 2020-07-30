import React from "react"
import styled from "@emotion/styled"
import Review from "./Review"

const DivReview = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 0px;

  .test {
    align-self: flex-start;
  }
`
const Directory = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const PreviewReview = ({ contents }) => {
  return (
    <>
      <section className="section section-center">
        <h2 className="title-style test">Reviews</h2>
        <h4 className="subtitle-style ">Stroies from our clients</h4>
      </section>
      <DivReview>
        <Directory>
          {contents
            .filter((content, idx) => idx < 4)
            .map(({ id, ...otherProps }) => (
              <Review key={id} {...otherProps} />
            ))}
        </Directory>
      </DivReview>
    </>
  )
}

export default PreviewReview
