import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import { FaAlignRight } from "react-icons/fa"
import logo from "../images/top_logo_v_word.png"
import PageLinks from "../constants/links"

const Nav = styled(Link)`
  margin-left: 20px;
`

const HeaderNavegation = ({ toggleSidebar }) => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo"></img>
          <button type="button" className="toggle-btn" onClick={toggleSidebar}>
            <FaAlignRight></FaAlignRight>
          </button>
        </div>
        <PageLinks styleClass="nav-links"
        ></PageLinks>
      </div>
    </nav>
  )
}

export default HeaderNavegation
