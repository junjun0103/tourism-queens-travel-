import React from "react"
import Links from "../../constants/links"
import { FaTimes } from "react-icons/fa"

const headerNavegationSideber = ({ isOpen, toggleSidebar }) => {
  return (
    <aside className={`sidebar ${isOpen ? "show-sidebar" : ""}`}>
      <button className="close-btn" onClick={toggleSidebar}>
        <FaTimes></FaTimes>
      </button>
      <div className="side-container">
        <Links styleClass={`${isOpen ? "sidebar-links" : ""}`}></Links>
      </div>
    </aside>
  )
}

export default headerNavegationSideber
