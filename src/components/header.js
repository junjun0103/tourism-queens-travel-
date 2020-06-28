import React from "react"
import Navegation from "./headerNavegation"
import Sidebar from "./headerNavegationSideber"

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <header>
        <Navegation toggleSidebar={toggleSidebar} />
        <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar}></Sidebar>
      </header>
    </>
  )
}

export default Header
