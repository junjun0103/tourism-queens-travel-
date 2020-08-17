/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import Header from "./header"
import { Helmet } from "react-helmet"
import Footer from "./Footer"
import posed from "react-pose"
import { TransitionState } from "gatsby-plugin-transition-link"

//incoming transition
export const Fade = posed.div({
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
})

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <title>Queen's Travel</title>
        {/* for naver webmaster verification */}
        <meta
          name="naver-site-verification"
          content="e2c8cedb7b1c0ed5bafa584ea0d2b2f6e31c9be9"
        />
        {/* for google webmaster verification */}
        <meta
          name="google-site-verification"
          content="7IGWtUlvxLHB7p-vPOJ0DDgcHXxqfkfcl9BHsQD59q0"
        />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
          rel="stylesheet"
        />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&family=Noto+Serif+SC:wght@700&family=Overpass:wght@300;700&family=Strait&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@300;500&family=Noto+Serif+SC:wght@300;500;700&family=ZCOOL+XiaoWei&display=swap"
          rel="stylesheet"
        ></link>
        <link
          rel="stylesheet"
          href="//unpkg.com/leaflet@1.6.0/dist/leaflet.css"
        />
      </Helmet>
      <Header />
      <TransitionState>
        {({ transitionStatus }) => (
          <Fade
            pose={
              ["entering", "entered"].includes(transitionStatus)
                ? "visible"
                : "hidden"
            }
          >
            {children}
          </Fade>
        )}
      </TransitionState>
      <Footer />
    </>
  )
}

export default Layout
