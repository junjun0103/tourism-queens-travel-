import React from "react"
import styled from "@emotion/styled"
import Review from "./Review"
import Title from "../ui/title"

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
        <Title titleEn="Reviews" titleCn="客户分享"></Title>
        <Title
          subTitle={true}
          titleEn="Travelers' Stories"
          titleCn="旅行者的故事"
        ></Title>
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
