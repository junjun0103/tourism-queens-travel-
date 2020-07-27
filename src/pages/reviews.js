import React from "react"
import Layout from "../components/ui/layout"
import ListFeedBack from "../components/feedbackEn/listFeedback"
import "../css/pages/reviews.css"

const Review = () => {
  return (
    <>
      <Layout>
        <section className="reviews-page">
          <ListFeedBack />
        </section>
      </Layout>
    </>
  )
}

export default Review
