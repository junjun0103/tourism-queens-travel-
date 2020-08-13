import React, { useContext } from "react"
import { GlobalStateContext } from "../../context/GlobalContextProvider"
import styled from "@emotion/styled"
import BackgroundImage from "gatsby-background-image"
import { Link } from "gatsby"

const Item = styled.div`
  min-width: 30%;
  height: 350px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 2.5px 5px;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 90%;
    height: 300px;
  }

  &:hover {
    cursor: pointer;

    & .background-image {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    & .content {
      opacity: 0.9;
    }
  }

  &.large {
    height: 480px;
  }

  &:first-child {
    margin-right: 2.5px;
  }

  &:last-child {
    margin-left: 2.5px;
  }

  .background-image {
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: cover;
    transition: all 2s ease-in-out;
  }

  .content {
    height: 90px;
    padding: 0 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgba(90, 93, 102, 1);
    opacity: 0.7;
    position: absolute;
    transition: all 0.5s ease-in-out;

    .title {
      font-weight: bold;
      margin-bottom: 6px;
      color: white;
    }

    .subtitle {
      font-weight: lighter;
      font-size: 16px;
    }
  }
`

const ThemeTour = ({ title_en, title_cn, background_img, slug }) => {
  // language state
  const state = useContext(GlobalStateContext) || { lenguage: "EN" }
  return (
    <Item>
      <Link
        to={"/themeTour/" + slug}
        className="background-image"
        style={{
          backgroundImage: `url(${background_img.sharp.fluid.src})`,
        }}
      />

      <Link to={"/themeTour/" + slug} className="content">
        <h3
          className={`title ${
            state.lenguage === "CN" ? "cn-font__noto_bold" : ""
          }`}
        >
          {state.lenguage === "EN" ? title_en : title_cn}
        </h3>
      </Link>
    </Item>
  )
}

export default ThemeTour
