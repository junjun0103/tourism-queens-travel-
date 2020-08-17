import React, { useContext } from "react"
import { GlobalStateContext } from "../../context/GlobalContextProvider"
import img from "../../images/fern.jpg"
import Title from "../ui/title"

const CustomizedInformation = () => {
  const state = useContext(GlobalStateContext) || { lenguage: "CN" }

  return (
    <article className="custimized-introduction__container">
      <div>
        {/**Left Side Customized Information*/}
        <Title titleEn="customized tour" titleCn="群星定制"></Title>
        <div className="custimized-introduction__content">
          <br />
          <h4
            className={`text-align-justify ${
              state.lenguage === "CN" ? "cn-font__noto_sans_light cn_h4" : ""
            }`}
          >
            {state.lenguage === "EN"
              ? "Whether you want to go fishing, go hiking in the national park, or ride a horse in a middle-earth like valley, or visit a historic winery to taste some fine wines, visit the prestigious art gallery, enjoy a steak or seafood feast... As long as it is what you want, we can customize the itinerary for you personally! You don’t have to worry about language barriers, inconvenient self-driving and so on, just hand everything over to us!"
              : "不管您是想来一场海钓，或者去国家公园里徒步旅行，还是在中土世界取景的山谷骑马体验，又或是逛一下历史悠久的葡萄酒庄品味上等好酒，参观享有盛名的艺术馆，吃个牛扒海鲜大餐... 只要是您想要的，我们都能为您私人订制 不用担心语言不通，自驾不方便，人生地不熟等等问题"}
          </h4>
          <br />
          <br />
          <h3
            className={`${
              state.lenguage === "CN" ? "cn-font__noto_bold cn_h3" : ""
            }`}
          >
            {state.lenguage === "EN"
              ? "Private customization mode:"
              : "订制模式:"}
          </h3>
          <br />
          <h4
            className={`text-align-justify ${
              state.lenguage === "CN" ? "cn-font__noto_sans_light cn_h4" : ""
            }`}
          >
            {state.lenguage === "EN"
              ? "Family, partner, friends, business, etc., starting from a group of 2 people. The whole trip is equipped with a private driver guide. We can tailor-make itinerary according to your requirements and the length of your journey. The attractions will be chosen according to your personal interests and preferences. We will give you the most professional advice along the journey and make sure you have an unforgettable trip!"
              : "家庭、伴侣、朋友、商务等小团队出行，2人起成团全程配备群星私人导游兼司机。按照您的需求、爱好，量身定制行程并提供最专业建议，开着车带着您完成一次难忘之旅！"}
          </h4>
        </div>
      </div>
      {/**Finished Left Side Customized Information*/}
      <div className="custimized-introduction__imgWithText ">
        {/*Right Side Image div with text*/}
        <img
          src={img}
          alt="img"
          className="custimized-introduction__img "
        ></img>
        <div className="custimized-introduction__text">
          <h2
            className={`${state.lenguage === "CN" ? "cn-font__noto_bold" : ""}`}
          >
            {state.lenguage === "EN"
              ? "Let us help you plan"
              : "我们负责计划和定制,"}
          </h2>
          <br />
          <br />
          <h2
            className={`${state.lenguage === "CN" ? "cn-font__noto_bold" : ""}`}
          >
            {state.lenguage === "EN"
              ? "your perfect holiday"
              : "您只需要负责享受假期"}
          </h2>
        </div>
      </div>
      {/*Finished Image div with text*/}
    </article>
  )
}
export default CustomizedInformation
