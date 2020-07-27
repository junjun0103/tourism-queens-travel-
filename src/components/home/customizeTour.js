import React, { useContext } from "react"
import Customized_5steps from "../customized/customized_5steps"
import { Link } from "gatsby"
import { GlobalStateContext } from "../../context/GlobalContextProvider"

const CustomizeTour = () => {
  const state = useContext(GlobalStateContext) || { lenguage: "EN" }
  return (
    <>
      {/**Customize tour of Home */}
      <article className="main-steps__container">
        <h2 className="title-style">
          {state.lenguage === "EN" ? `customized tour` : "群星定制"}
        </h2>
        <h4 className="subtitle-style">
          Whether you want to go fishing, go hiking in the national park, or
          ride a horse in a middle-earth like valley, or visit a historic winery
          to taste some fine wines, visit the prestigious art gallery, enjoy a
          steak or seafood feast...
          <br></br>
          <br></br> As long as it is what you want, we can customize the
          itinerary for you personally!
          <br></br>
          You don’t have to worry about language barriers, inconvenient
          self-driving and so on, just hand everything over to us!
        </h4>
        {/*5 Steps Information*/}

        <Customized_5steps />
      </article>
      {/**Button to Customize Page */}
      <div className="main-btn__customized">
        <Link to={"/customized/"} className="btn btn-center">
          customize your tour
        </Link>
      </div>
    </>
  )
}

export default CustomizeTour
