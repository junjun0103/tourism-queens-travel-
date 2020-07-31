import React from "react"
// import { Link } from "gatsby"
// import styled from "@emotion/styled"
import { FaAlignRight } from "react-icons/fa"
import logo from "../../images/top_logo_v_word.png"
import PageLinks from "../../constants/links"
import "../../css/components/navbar.css"

// const Nav = styled(Link)`
//   margin-left: 20px;
// `

const HeaderNavegation = ({ toggleSidebar }) => {
  // auto-hiding navbar function
  const navbarAnimation = () => {
    if (typeof window !== "undefined") {
      let prevScrollpos = window.pageYOffset
      window.onscroll = function () {
        const maxScroll = document.body.clientHeight - window.innerHeight
        let currentScrollPos = window.pageYOffset
        if (
          (maxScroll > 0 &&
            prevScrollpos > currentScrollPos &&
            prevScrollpos <= maxScroll) ||
          (maxScroll <= 0 && prevScrollpos > currentScrollPos) ||
          (prevScrollpos <= 0 && currentScrollPos <= 0)
        ) {
          document.getElementById("navbar").style.top = "0"
        } else {
          document.getElementById("navbar").style.top = "-5.0rem" // adjustable based your need
        }
        prevScrollpos = currentScrollPos
      }
    }
  }
  // auto-hiding navbar function call
  navbarAnimation()

  return (
    <nav className="navbar" id="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo"></img>
          <button type="button" className="toggle-btn" onClick={toggleSidebar}>
            <FaAlignRight></FaAlignRight>
          </button>
        </div>
        <PageLinks styleClass="nav-links"></PageLinks>
      </div>
    </nav>
  )
}

export default HeaderNavegation
