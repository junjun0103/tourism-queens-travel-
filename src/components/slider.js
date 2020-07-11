import React, { useContext } from "react"
import Carousel from "react-elastic-carousel"
import { Link } from "gatsby"
import img from "../images/sample.jpg"
import { GlobalStateContext } from '../context/GlobalContextProvider';

const Slider = ({ contents, title, sliderStyle }) => {
  const state = useContext(GlobalStateContext);
  
  return ( 
    <div>
      
      <h2 className="title-style slider-title_mb">{title}</h2>
      <Carousel
        breakPoints={[
          { width: 1, itemsToShow: 1 },
          { width: 480, itemsToShow: 2, itemsToScroll: 2 },
          { width: 770, itemsToShow: 3, itemsToScroll: 3 },
        ]}
      >
        {contents.map(content => {

          //Declare variable
          var contentTitle = '';
          var contentSubTitle = '';
          var contentName = '';
          var contentShortDesc = '';

          //Set up varables depending of the lenguage
          if(state.lenguage === 'EN'){
            contentTitle = content.title_en;
            contentSubTitle = content.subTitle_en;
            contentName = content.name_en;
            contentShortDesc = content.shortDescription_en;
          }
          else{
            contentTitle = content.title_cn;
            contentSubTitle = content.subTitle_cn;
            contentName = content.name_cn;
            contentShortDesc = content.shortDescription_cn;
          }

          //Carrousel for reviews
          if (sliderStyle === "reviews") {            
            return (
              <Link to={"/" + sliderStyle + "/" + content.slug}>
                <div className="preview-container_review slider-height">
                  <img src={img} alt="img" className="preview-img"></img>
                  <h4 className="preview-departureDay">{contentTitle}</h4>
                  <h4 className="preview-subtitle">{contentName}</h4>
                  <h4 className="preview-shortDescription">
                    {}
                  </h4>
                  <h4 className="preview-price">{content.date}</h4>
                </div>
              </Link>
            )
          } 
          //Carrousel for ThemeTour
          else {
            return (
              <Link to={"/" + sliderStyle + "/" + content.slug}>
                <div className="preview-container_themeTour  slider-height__slider preview-container_themeTour__slider">                
                  <img src={content.background_img.sharp.fluid.src} alt="img" className="preview-img"></img>
                  <h3 className="preview-title">{contentTitle}</h3>
                  <h4 className="preview-subTitle">{contentSubTitle}</h4>
                </div>                
              </Link>              
            )
          }
        })}
      </Carousel>
    </div>
   );
}
 
export default Slider;
