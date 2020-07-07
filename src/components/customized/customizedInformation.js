import React from 'react';
import img from "../../images/fern.jpg"

const CustomizedInformation = () => {
    return ( 
        <article className="custimized-introduction__container">          
          <div>{/**Left Side Customized Information*/}
            <h2 className="title-style">customized tour</h2>
            <div className="custimized-introduction__content">
              <br />
              <h4>
                s simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it s simply dummy text of the printing and
                typesetting industry. Lorem Ipsum
              </h4>
              <br />
              <h4>
                s simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has
              </h4>
              <br />
              <br />
              <h3>text of the printing and typesetting industry.</h3>
              <br />
              <h4>
                psum has been the industry's standard dummy text ever since the
                1500s, when an unknown printer took a galley of type and
              </h4>
              <br />
              <h4>
                scrambled it s simply dummy text of the printing and typesetting
                industry. Lorem Ipsum
              </h4>
            </div>
          </div>{/**Finished Left Side Customized Information*/}           
          <div className="custimized-introduction__imgWithText">{/*Right Side Image div with text*/}
            <img
              src={img}
              alt="img"
              className="custimized-introduction__img"
            ></img>
            <h2 className="custimized-introduction__text">
              Let us help you plan <br />
              <br /> your perfect holiday
            </h2>
          </div>{/*Finished Image div with text*/}           
        </article>
     );
}
 
export default CustomizedInformation;