import React from "react"
import styled from "@emotion/styled"
import ThemeTour from "./ThemeTour"
import { Link } from "gatsby"
import { func } from "prop-types"

const TourTheme = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 0px;

  .test {
    align-self: flex-start;
  }
  
`
const Directory = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`


const PreviewThemeTour = ({ contents }) => {

  return (
    <TourTheme>
      <Directory>
        {contents
          .filter((content, idx) => idx < 5)
          .map(({ id, ...otherProps }) => (
            <ThemeTour key={id} {...otherProps} />
          ))}
      </Directory>
    </TourTheme>
  )
}

export default PreviewThemeTour
