import React from "react"
import Layout from "../components/layout"
import ListFeedback from "../components/feedbackEn/listFeedback"

const Review = () => {
  return (
    <>
      <Layout>
        <section className="reviews-page">
          <ListFeedback />
        </section>
      </Layout>
    </>
  )
}

export default Review
