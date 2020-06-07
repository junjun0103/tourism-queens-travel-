/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import Header from './header';
import {Helmet} from 'react-helmet';


const Layout = ({ children }) => {
  

  return (
    <>
      <Helmet>
        <title>Queen Tourism</title>
        <meta name="description" content="Queen Tourism Description" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Roboto:wght@400;700&display=swap" rel="stylesheet"/>
      </Helmet>
      <Header />
      {children}
    </>
  )
}


export default Layout
