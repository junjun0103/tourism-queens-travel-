import React, { useEffect, useRef, useState, useContext } from "react"
import { GlobalStateContext } from "../../context/GlobalContextProvider"

function useOnScreen(options) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setVisible(entry.isIntersecting)
    }, options)

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [ref, options])

  return [ref, visible]
}

const Customized_5steps = () => {
  const [ref, visible] = useOnScreen({ rootMargin: "-50px" })
  const state = useContext(GlobalStateContext) || { lenguage: "EN" }
  
  return (
    <>
      <div
        ref={ref}
        className={`custimizedProcess-container ${
          visible ? "nuevo" : "siempre"
        }`}
      >
        <div className="custimizedProcess-steps">
          <div className="custimizedProcess-steps__circle">
            <div className="custimizedProcess-steps__circleInside"></div>
          </div>
          <div className="custimizedProcess-steps__text">
            <h3>1</h3>
            <h4
              className={`break-word ${
                state.lenguage === "CN" ? "cn-font__noto_sans_light" : ""
              }`}
            >
              {state.lenguage === "EN"
                ? "Confirm Number, Date, Duration, Special Request"
                : "确认人数 出团日期 行程天数 特殊要求"}
            </h4>
          </div>
        </div>
        <div className="custimizedProcess-steps">
          <div className="custimizedProcess-steps__circle">
            <div className="custimizedProcess-steps__circleInside"></div>
          </div>
          <div className="custimizedProcess-steps__text">
            <h3>2</h3>
            <h4
              className={`break-word ${
                state.lenguage === "CN" ? "cn-font__noto_sans_light" : ""
              }`}
            >
              {state.lenguage === "EN"
                ? "Initial Itinerary and Quotation"
                : "初定行程及报价"}
            </h4>
          </div>
        </div>
        <div className="custimizedProcess-steps">
          <div className="custimizedProcess-steps__circle">
            <div className="custimizedProcess-steps__circleInside"></div>
          </div>
          <div className="custimizedProcess-steps__text">
            <h3>3</h3>
            <h4
              className={`break-word ${
                state.lenguage === "CN" ? "cn-font__noto_sans_light" : ""
              }`}
            >
              {state.lenguage === "EN" ? "•Confirm Itinerary " : "确认行程,"}
              <br />
              {state.lenguage === "EN" ? "•Sign Contract" : "签订协议,"}
              <br />
              {state.lenguage === "EN" ? "•Pay 30% fee" : "支付30%团费,"}
              <br />
              {state.lenguage === "EN" ? "•Book Stays" : "开始预定景点门票,"}
              <br />
              {state.lenguage === "EN"
                ? "•Activities •Transportation"
                : "住宿地点和旅游交通"}
            </h4>
          </div>
        </div>
        <div className="custimizedProcess-steps">
          <div className="custimizedProcess-steps__circle">
            <div className="custimizedProcess-steps__circleInside"></div>
          </div>
          <div className="custimizedProcess-steps__text">
            <h3>4</h3>
            <h4
              className={`break-word ${
                state.lenguage === "CN" ? "cn-font__noto_sans_light" : ""
              }`}
            >
              {state.lenguage === "EN"
                ? "•Complete the banlance a month before departure"
                : "出团前一个月，支付尾款"}
              <br />
              {state.lenguage === "EN"
                ? "•Receive a travel details"
                : "之後您會收到詳細 出团须知"}
            </h4>
          </div>
        </div>
        <div className="custimizedProcess-steps">
          <div className="custimizedProcess-steps__circle">
            <div className="custimizedProcess-steps__circleInside"></div>
          </div>
          <div className="custimizedProcess-steps__text">
            <h3>5</h3>
            <h4
              className={`break-word ${
                state.lenguage === "CN" ? "cn-font__noto_sans_light" : ""
              }`}
            >
              {state.lenguage === "EN"
                ? "Explore your holiday with Queen's Travel"
                : "跟着群星导游，玩转新西兰"}
            </h4>
          </div>
        </div>
      </div>
    </>
  )
}

export default Customized_5steps
