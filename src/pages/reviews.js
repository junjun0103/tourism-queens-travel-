import React from "react"
import Layout from "../components/ui/layout"
import ListFeedBack from "../components/feedbackEn/listFeedback"
import "../css/pages/reviews.css"
import SEO from "../components/SEO"

const Review = () => {
  return (
    <>
      <Layout>
        <SEO
          title_en="Reviews"
          title_cn="客户分享"
          desc_en="Travelers' Stories"
          desc_cn="旅行者的故事"
        />
        <section className="reviews-page section section-center">
          <ListFeedBack />
        </section>
      </Layout>
    </>
  )
}

export default Review
