import React from "react"
import Layout from "../components/ui/layout"
import ListTour from "../components/toursEn/listTour"
import "../css/pages/themeTour.css"
import SEO from "../components/SEO"

const ThemeTour = () => {
  return (
    <>
      <Layout>
        <SEO title_en="Theme Tour" title_cn="独家主题行程" desc_en="Explore your travel dream with our unique tour" desc_cn="以我们独特的行程来完成您的旅游梦" />
        <section className="themeTour-page section section-center">
          <ListTour />
        </section>
      </Layout>
    </>
  )
}

export default ThemeTour
