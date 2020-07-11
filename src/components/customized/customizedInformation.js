import React from "react"
import img from "../../images/fern.jpg"

const CustomizedInformation = () => {
  return (
    <article className="custimized-introduction__container">
      <div>
        {/**Left Side Customized Information*/}
        <h2 className="title-style">customized tour</h2>

        <div className="custimized-introduction__content">
          <br />
          <h4 className="text-align-justify">
            Whether you want to go fishing, go hiking in the national park, or
            ride a horse in a middle-earth like valley, or visit a historic
            winery to taste some fine wines, visit the prestigious art gallery,
            enjoy a steak or seafood feast... As long as it is what you want, we
            can customize the itinerary for you personally! You don’t have to
            worry about language barriers, inconvenient self-driving and so on,
            just hand everything over to us!
          </h4>
          <br />
          <br />
          <h3> Private customization mode:</h3>
          <br />
          <h4 className="text-align-justify">
            Family, partner, friends, business, etc., starting from a group of 2
            people. The whole trip is equipped with a private driver guide. We
            can tailor-make itinerary according to your requirements and the
            length of your journey. The attractions will be chosen according to
            your personal interests and preferences. We will give you the most
            professional advice along the journey and make sure you have an
            unforgettable trip!
          </h4>
        </div>
      </div>
      {/**Finished Left Side Customized Information*/}
      <div className="custimized-introduction__imgWithText">
        {/*Right Side Image div with text*/}
        <img src={img} alt="img" className="custimized-introduction__img"></img>
        <h2 className="custimized-introduction__text">
          Let us help you plan <br />
          <br /> your perfect holiday
        </h2>
      </div>
      {/*Finished Image div with text*/}
    </article>
  )
}

export default CustomizedInformation
