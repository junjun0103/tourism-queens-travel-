import React, { useState, useContext } from "react"
import { GlobalStateContext } from "../../context/GlobalContextProvider"
import styled from "@emotion/styled"
import BackgroundImage from "gatsby-background-image"
import { Link } from "gatsby"

const ImageBackground = styled(BackgroundImage)`
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`

const Item = styled.div`
  min-width: 45%;
  height: 380px;
  flex: 1 1 auto;
  margin: 0 2px 4px;
  overflow: hidden;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 90%;
    height: 300px;
  }

  .content {
    height: 45%;
    width: 100%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: rgba(90, 93, 102, 0.7);
    opacity: 0.7;
    position: absolute;
    transition: all 0.5s ease-in-out;

    @media (max-width: 768px) {
      width: 100%;
      height: 300px;
    }

    .title {
      font-weight: bold;
      margin-bottom: 15px;
      font-size: 28px;
      color: white;
    }

    .subtitle {
      margin-top: 10px;
      font-weight: lighter;
      font-size: 16px;
      color: white;
    }
    .description {
      font-weight: lighter;
      font-size: 14px;
      color: white;
    }
    .contentDate {
      text-align: right;
      color: white;
      font-weight: bold;
    }
  }
  .hoverOut {
    @media (min-width: 768px) {
      margin-bottom: -100px !important;
    }
  }
`

const ThemeTour = ({
  photo,
  title_en,
  title_cn,
  slug,
  name_en,
  name_cn,
  shortDescription_en,
  shortDescription_cn,
  date,
  idx,
}) => {
  // language state
  const state = useContext(GlobalStateContext) || { lenguage: "CN" }
  //declare lenguage variables
  let title = "",
    name = "",
    shortDescription = ""

  if (state.lenguage === "EN") {
    title = title_en
    name = name_en
    shortDescription = shortDescription_en
  } else {
    title = title_cn
    name = name_cn
    shortDescription = shortDescription_cn
  }

  const [reviewHover, setReviewHover] = useState(false)

  const contentHover = () => {
    setReviewHover(!reviewHover)
  }

  return (
    <>
      <Item>
        <ImageBackground
          onMouseEnter={() => contentHover()}
          onMouseLeave={() => contentHover()}
          tag="section"
          fluid={photo.sharp.fluid}
        >
          <Link
            to={"/reviews/" + slug}
            className={`content ${reviewHover ? "" : "hoverOut"}`}
          >
            <h3
              className={`title ${
                state.lenguage === "CN" ? "cn-font__noto_bold" : ""
              }`}
            >
              {title}
            </h3>
            <h4
              className={`subtitle ${
                state.lenguage === "CN"
                  ? "cn-font__noto_sans_medium"
                  : "en-font__overpass_bold"
              }`}
            >
              {name}
            </h4>
            <h5
              className={`description ${
                state.lenguage === "CN" ? "cn-font__noto_medium" : ""
              }`}
            >
              {shortDescription}
            </h5>
            <h4
              className={`contentDate ${
                state.lenguage === "CN"
                  ? "cn-font__noto_sans_medium"
                  : "en-font__overpass_bold"
              }`}
            >
              {date}
            </h4>
          </Link>
        </ImageBackground>
      </Item>
    </>
  )
}

export default ThemeTour
