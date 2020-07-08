import React from 'react';
import img from "../../../images/fern.jpg"

const CustomizedInformation = () => {
    return ( 
        <article className="custimized-introduction__container">          
          <div>{/**Left Side Customized Information*/}
            <h2 className="title-style">customized tour</h2>
            <div className="custimized-introduction__content">
              <br />
              <h4>
                不管您是想来一场海钓，或者去国家公园里徒步旅行，还是在中土世界取景的山谷骑马体验，
                又或是逛一下历史悠久的葡萄酒庄品味上等好酒，参观享有盛名的艺术馆，吃个牛扒海鲜大餐...
              </h4>
              <br />
              <h4>
                只要是您想要的，我们都能为您私人订制
                不用担心语言不通，自驾不方便，人生地不熟等等问题
              </h4>
              <br />
              <br />
              <h3>text of the printing and typesetting industry.</h3>
              <br />
              <h4>
                家庭、伴侣、朋友、商务等小团队出行，2人起成团全程配备群星私人导游兼司机
              </h4>
              <br />
              <h4>
                按照您的需求、爱好，量身定制行程并提供最专业建议，开着车带着您完成一次难忘之旅！
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
            我们负责计划和定制 <br />
              <br /> 您只需要负责享受假期
            </h2>
          </div>{/*Finished Image div with text*/}           
        </article>
     );
}
 
export default CustomizedInformation;