/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import Header from "./header"
import { Helmet } from "react-helmet"
import Footer from "./footer"

const Layout = ({ children,lenguage }) => {
  return (
    <>
      <Helmet>
        <title>Queen Tourism</title>
        <meta name="description" content="Queen Tourism Description" />
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
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@300;500;700&family=ZCOOL+XiaoWei&display=swap"
          rel="stylesheet"
        ></link>
      </Helmet>
      <Header 
        lenguage={lenguage}
      />
      {children}
      <Footer />
    </>
  )
}

export default Layout
