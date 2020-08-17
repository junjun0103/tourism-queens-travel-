import React, { useContext } from "react"
import Customized_5steps from "../customized/customized_5steps"
import { Link } from "gatsby"
import { GlobalStateContext } from "../../context/GlobalContextProvider"
import Title from "../ui/title"

const CustomizeTour = () => {
  const state = useContext(GlobalStateContext) || { lenguage: "CN" }
  return (
    <>
      {/**Customize tour of Home */}
      <article className="main-steps__container">
        <Title titleEn="customized tour" titleCn="群星定制"></Title>

        <Title
          subTitle={true}
          titleEn="Whether you want to go fishing, go hiking in the national park, or
        ride a horse in a middle-earth like valley, or visit a historic winery
        to taste some fine wines, visit the prestigious art gallery, enjoy a
        steak or seafood feast..."
          titleCn="不管您是想来一场海钓，或者去国家公园里徒步旅行，还是在中土世界取景的山谷骑马体验，又或是逛一下历史悠久的葡萄酒庄品味上等好酒，参观享有盛名的艺术馆，吃个牛扒海鲜大餐..."
        ></Title>
        <Title
          subTitle={true}
          titleEn="As long as it is what you want, we can customize the
        itinerary for you personally!"
          titleCn="只要是您想要的，我们都能为您私人订制"
        ></Title>
        <Title
          subTitle={true}
          titleEn="You don’t have to worry about language barriers, inconvenient
        self-driving and so on, just hand everything over to us!"
          titleCn="不用担心语言不通，自驾不方便，人生地不熟等等问题"
        ></Title>

        {/*5 Steps Information*/}

        <Customized_5steps />
        {/**Button to Customize Page */}
        <div className="main-btn__customized">
          <Link
            to={"/customized/"}
            className={`btn btn-center ${
              state.lenguage === "CN" ? "cn-font__noto_light cn_h4" : ""
            }`}
          >
            {state.lenguage === "CN"
              ? "开始订制您的行程"
              : "customize your tour"}
          </Link>
        </div>
      </article>
    </>
  )
}

export default CustomizeTour
