import React from "react"
import Title from "../ui/title"
import LanguageConverter from "../../components/ui/languageConverter"

import {
  FaEye,
  FaUserTie,
  FaHotjar,
  FaStar,
  FaSeedling,
  FaSmile,
} from "react-icons/fa"

const WhyUs = () => {
  return (
    <article className="main-whyUs__containder">
      <Title titleEn="why us" titleCn="为什么选择群星假期"></Title>
      <div className="main-whyUs__box">
        <div className="main-whyUs__contents">
          <FaEye className="main-whyUs__contents__icon" />
          <LanguageConverter
            tag="h3"
            styleCn="cn-font__noto_bold"
            valueEn="Concentrated"
            valueCn="专注"
          />
          <div className="main-whyUs__contents__text">
            <LanguageConverter
              tag="h4"
              style="clr-white text-shadow-grery text-align-center"
              styleCn="cn-font__noto_light"
              valueEn="Over 17 years experiences with own operating system"
              valueCn="群星专注于新西兰本土旅游,十七年积累和研发出群星特有的旅游行程以及预定操作系统"
            />
          </div>
        </div>
        <div className="main-whyUs__contents">
          <FaUserTie className="main-whyUs__contents__icon" />
          <LanguageConverter
            tag="h3"
            styleCn="cn-font__noto_bold"
            valueEn="Professional"
            valueCn="专业"
          />
          <div className="main-whyUs__contents__text">
            <LanguageConverter
              tag="h4"
              style="clr-white text-shadow-grery text-align-center"
              styleCn="cn-font__noto_light"
              valueEn="Fund of knowledge with our professional team"
              valueCn="群星有着丰富的本地知识, 及专业的操作团队"
            />
          </div>
        </div>
        <div className="main-whyUs__contents">
          <FaHotjar className="main-whyUs__contents__icon" />
          <LanguageConverter
            tag="h3"
            styleCn="cn-font__noto_bold"
            valueEn="Passionate"
            valueCn="热情"
          />
          <div className="main-whyUs__contents__text">
            <LanguageConverter
              tag="h4"
              style="clr-white text-shadow-grery text-align-center"
              styleCn="cn-font__noto_light"
              valueEn="We believe only passion can lead you to success"
              valueCn="群星的团队都是跟您一样热爱旅游, 群星始终相信只有热爱旅游才可以做好旅游"
            />
          </div>
        </div>
        <div className="main-whyUs__contents">
          <FaStar className="main-whyUs__contents__icon" />
          <LanguageConverter
            tag="h3"
            styleCn="cn-font__noto_bold"
            valueEn="Unique"
            valueCn="独特"
          />
          <div className="main-whyUs__contents__text">
            <LanguageConverter
              tag="h4"
              style="clr-white text-shadow-grery text-align-center"
              styleCn="cn-font__noto_light"
              valueEn="We see 'TRAVEL' in different way"
              valueCn="群星不光有着独特的旅游行程, 最重要的是群星对于 '旅行' 本身, 有着独特理解与认识"
            />
          </div>
        </div>
        <div className="main-whyUs__contents">
          <FaSeedling className="main-whyUs__contents__icon" />
          <LanguageConverter
            tag="h3"
            styleCn="cn-font__noto_bold"
            valueEn="Pure"
            valueCn="纯粹"
          />
          <div className="main-whyUs__contents__text">
            <LanguageConverter
              tag="h4"
              style="clr-white text-shadow-grery text-align-center"
              styleCn="cn-font__noto_light"
              valueEn="Fulfill the meaning and fun of travel"
              valueCn="群星纯粹于旅游, 让您可以感受到旅游真正的意义及乐趣"
            />
          </div>
        </div>
        <div className="main-whyUs__contents">
          <FaSmile className="main-whyUs__contents__icon" />
          <LanguageConverter
            tag="h3"
            styleCn="cn-font__noto_bold"
            valueEn="Service"
            valueCn="服务"
          />
          <div className="main-whyUs__contents__text">
            <LanguageConverter
              tag="h4"
              style="clr-white text-shadow-grery text-align-center"
              styleCn="cn-font__noto_light"
              valueEn="Anxiety free with our perfect service"
              valueCn="群星拥有完善的服务系统, 让您在旅行的过程中能够高枕无忧"
            />
          </div>
        </div>
      </div>
    </article>
  )
}

export default WhyUs
