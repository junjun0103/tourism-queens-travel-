import React from "react"
import { Link } from "gatsby"
const data = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "BestSale",
    url: "/bestSale/",
  },
  {
    id: 3,
    text: "ThemeTour",
    url: "/themeTour/",
  },
  {
    id: 4,
    text: "Customized",
    url: "/customized/",
  },
  {
    id: 5,
    text: "GuideTeam",
    url: "/guideTeam/",
  },
  {
    id: 6,
    text: "Information",
    url: "/touristInformation/",
  },
  {
    id: 7,
    text: "Reviews",
    url: "/reviews/",
  },
  {
    id: 8,
    text: "ContactUs",
    url: "/contactUs/",
  },
  {
    id: 9,
    text: "AboutUs",
    url: "/aboutUs/",
  },
]

const tempLinks = data.map(link => {
  return (
    <li key={link.id}>
      <Link to={link.url}>{link.text}</Link>
    </li>
  )
})
// I KNOW WE CAN COMBINE IT !!!!!

export default ({ styleClass }) => {
  return (
    <ul className={`page-links ${styleClass ? styleClass : ""}`}>
      {tempLinks}
    </ul>
  )
}
