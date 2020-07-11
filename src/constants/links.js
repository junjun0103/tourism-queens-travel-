import React, { useContext } from "react"
import { Link } from "gatsby"
import {
  GlobalDispatchContext,
  GlobalStateContext,
} from "../context/GlobalContextProvider"

//English Header Links//
const dataEN = [
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

//Chinese Header Links//
const dataCN = [
  {
    id: 1,
    text: "主页",
    url: "/index_cn",
  },
  {
    id: 2,
    text: "群星热卖",
    url: "/bestSale_cn/",
  },
  {
    id: 3,
    text: "独家主题行程",
    url: "/themeTour_cn/",
  },
  {
    id: 4,
    text: "群星定制",
    url: "/customized_cn/",
  },
  {
    id: 5,
    text: "群星导游",
    url: "/guideTeam_cn/",
  },
  {
    id: 6,
    text: "旅游资讯",
    url: "/touristInformation_cn/",
  },
  {
    id: 7,
    text: "客户分享",
    url: "/reviews_cn/",
  },
  {
    id: 8,
    text: "在线咨询",
    url: "/contactUs_cn/",
  },
  {
    id: 9,
    text: "关于群星",
    url: "/aboutUs_cn/",
  },
]
//english mapping
const tempLinksEn = dataEN.map(link => {
  return (
    <li key={link.id}>
      <Link to={link.url}>{link.text}</Link>
    </li>
  )
})
//chinese mapping
const tempLinksCn = dataCN.map(link => {
  return (
    <li key={link.id}>
      <Link to={link.url}>{link.text}</Link>
    </li>
  )
})

export default ({ styleClass }) => {
  const dispatch = useContext(GlobalDispatchContext)
  const state = useContext(GlobalStateContext)
  return (
    <ul className={`page-links ${styleClass ? styleClass : ""}`}>
      {state.lenguage === "EN" ? tempLinksEn : tempLinksCn}
      <li
        type="button"
        onClick={() => {
          dispatch({ type: "TOGGLE_LENGUAGE" })
        }}
      >
        Lenguage
      </li>
    </ul>
  )
}
