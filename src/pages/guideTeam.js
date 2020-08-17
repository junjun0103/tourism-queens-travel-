import React from "react"
import Layout from "../components/ui/layout"
import ListGuide from "../components/guideEn/listGuide"
import "../css/pages/guideTeam.css"
import SEO from "../components/SEO"

const GuideTeam = () => {
  return (
    <>
      <Layout lenguage="EN">
        <SEO
          title_en="Guide Team"
          title_cn="群星导游"
          desc_en="Let our professional team shows you how amazing New Zealand is. Find our guides below and see how they become travel experts"
          desc_cn="群星导游精英团队带您从南到北玩转独特魅力的新西兰. 观看下方了解他们如何成为新西兰旅游达人的故事
"
        />
        <section className="guideTeam-page section section-center">
          <ListGuide />
        </section>
      </Layout>
    </>
  )
}

export default GuideTeam
