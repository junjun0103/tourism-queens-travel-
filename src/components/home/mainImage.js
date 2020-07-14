import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import styled from "@emotion/styled"
import logo_white from "../../images/logo_big_white.png"
const ImageBackground = styled(BackgroundImage)`
  width: 100vw;
  height: 100vh;
  top: 0;
  right: 0;
`

const IndexMain = () => {
  const { imagebg, imagelogo } = useStaticQuery(graphql`
    query {
      imagebg: file(relativePath: { eq: "new-zealand.jpg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  console.log(imagebg)
  return (
    <ImageBackground tag="section" fluid={imagebg.sharp.fluid}>
      <img src={logo_white} className="main-header__logo"></img>
    </ImageBackground>
  )
}

export default IndexMain