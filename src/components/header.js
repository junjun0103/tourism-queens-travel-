import React from "react"
import Navegation from "./headerNavegation"
import Sidebar from "./headerNavegationSideber"

const Header = ({lenguage}) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <header>
        <Navegation toggleSidebar={toggleSidebar} 
                    lenguage={lenguage}
        />
        <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar}></Sidebar>
      </header>
    </>
  )
}

export default Header
