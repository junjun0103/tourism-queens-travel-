import React, { useState, useContext } from "react"
import axios from "axios"
import Swal from "sweetalert2"
import LanguageConverter from "../ui/languageConverter"
import { GlobalStateContext } from "../../context/GlobalContextProvider"

const CustomizedPlan = () => {
  //language state
  const state = useContext(GlobalStateContext) || { lenguage: "EN" }

  //State of Flight Schedule
  const [isChecked, setIsChecked] = React.useState(false)

  //state of form
  const [holiday, setHoliday] = useState({
    people: null,
    departureDate: null,
    duration: null,
    request: null,
    budget: null,
    name: null,
    email: null,
    phone: null,
    other: null,
  })

  //extract values
  const {
    people,
    departureDate,
    duration,
    request,
    budget,
    name,
    email,
    phone,
    other,
  } = holiday

  //////////////////Funtions/////////

  //Change State of Flight Schedule//
  const toggleChecked = () => {
    setIsChecked(!isChecked)
  }

  //change input values onchange
  const onChange = e => {
    setHoliday({
      ...holiday,
      [e.target.name]: e.target.value,
    })
  }

  //function to send an email
  const sendemail = async holiday => {
    Swal.fire({
      title: "Thank Yoy",
      text: "We will contact you ASP",
      icon: "success",
      confirmButtonText: "Ok",
    })

    //call axios
    await axios.post("http://emails.ariza.ml/api/customized-email", holiday)

    //clean holiday
    setHoliday({
      people: "",
      departureDate: "",
      duration: "",
      request: "",
      budget: "",
      name: "",
      email: "",
      phone: "",
      other: "",
    })
  }

  //function to submit the form
  const formSubmit = e => {
    e.preventDefault()

    //call axios function
    sendemail(holiday)
  }

  return (
    <article className="customizedForm-containder">
      <LanguageConverter
        tag="h3"
        style="customizedForm-title"
        styleCn="cn-font__noto_bold"
        valueEn="Plan your holiday by 5 Simple Filters"
        valueCn="开始规划您的假期"
      />
      <div className="customizedForm-outside">
        <form onSubmit={formSubmit}>
          <div className="customizedForm-inside">
            {/**Left Form Side */}
            <div className="customizedForm-left">
              <div className="customizedForm-titleBox">
                <hr className="customizedForm-titleHr" />
                <LanguageConverter
                  tag="h3"
                  style="customizedForm-title__inside"
                  styleCn="cn-font__noto_bold"
                  valueEn="Requirement"
                  valueCn="需求"
                />
                <hr className="customizedForm-titleHr" />
              </div>
              <div className="customizedForm-formBox">
                {/**Number of People */}
                <label className="customizedForm-formBox__label">
                  <LanguageConverter
                    tag="h4"
                    styleCn="cn-font__noto_light"
                    valueEn="Number of people"
                    valueCn="人数"
                  />
                </label>
                <input
                  className="customizedForm-input"
                  type="number"
                  placeholder={
                    state.lenguage === "EN" ? "Number of people" : "人数"
                  }
                  name="people"
                  value={people}
                  onChange={onChange}
                  required
                ></input>
                {/**DateTime of Tickets */}
                <label className="customizedForm-formBox__label">
                  <LanguageConverter
                    tag="h4"
                    styleCn="cn-font__noto_light"
                    valueEn="Departure Date"
                    valueCn="出团日期"
                  />
                </label>
                <input
                  className="customizedForm-input"
                  type="date"
                  placeholder="Departure Date"
                  name="departureDate"
                  value={departureDate}
                  onChange={onChange}
                  required
                ></input>
                <label className="customizedForm-containder_formBox__label"></label>
                {/**CheckBox of Tickets bought */}
                <div className="customizedForm-checkbox__container">
                  <input
                    type="checkbox"
                    value={isChecked}
                    onClick={toggleChecked}
                    id="customizedForm-checkbox"
                  ></input>
                  <label
                    className="customizedForm-checkbox__label"
                    htmlFor="customizedForm-checkbox"
                  >
                    {state.lenguage === "EN"
                      ? "I have flight tickets"
                      : "我已预订旅游机票"}
                  </label>
                  <textarea
                    className={`customizedForm-input textarea-flightSchedule ${
                      isChecked ? "active" : "inactive"
                    }`}
                    type="text"
                    placeholder={
                      state.lenguage === "EN" ? "Flight Schedule" : "航班信息"
                    }
                  ></textarea>
                </div>
                {/**number of durations days */}
                <label className="customizedForm-formBox__label">
                  <LanguageConverter
                    tag="h4"
                    styleCn="cn-font__noto_light"
                    valueEn="Duration (Days)"
                    valueCn="出团行程天数日期"
                  />
                </label>
                <input
                  className="customizedForm-input"
                  type="text"
                  placeholder={
                    state.lenguage === "EN" ? "Duration" : "行程天数"
                  }
                  name="duration"
                  onChange={onChange}
                  value={duration}
                  required
                ></input>
                {/**TextArea of Request */}
                <label className="customizedForm-formBox__label">
                  <LanguageConverter
                    tag="h4"
                    styleCn="cn-font__noto_light"
                    valueEn="Special Request"
                    valueCn="特殊要求 例如"
                  />
                </label>
                <textarea
                  className="customizedForm-input"
                  type="text"
                  name="request"
                  value={request}
                  onChange={onChange}
                  rows="3"
                  placeholder={
                    state.lenguage === "EN"
                      ? "Special Request(Activity,Meal etc)"
                      : "特殊要求 例如 : 景点 餐食等"
                  }
                ></textarea>
                {/**Budget */}
                <label className="customizedForm-formBox__label">
                  <LanguageConverter
                    tag="h4"
                    styleCn="cn-font__noto_light"
                    valueEn="Budget"
                    valueCn="預算"
                  />
                </label>
                <input
                  className="customizedForm-input"
                  type="text"
                  name="budget"
                  value={budget}
                  onChange={onChange}
                  placeholder={state.lenguage === "EN" ? "Budget" : "預算"}
                  required
                ></input>
              </div>
            </div>

            {/**Right Form Side */}
            <div className="customizedForm-right">
              <div className="customizedForm-titleBox">
                <hr className="customizedForm-titleHr" />
                <LanguageConverter
                  tag="h3"
                  style="customizedForm-title__inside"
                  styleCn="cn-font__noto_bold"
                  valueEn="Contact"
                  valueCn="联络"
                />
                <hr className="customizedForm-titleHr" />
              </div>
              <div className="customizedForm-formBox">
                {/**Name */}
                <label className="customizedForm-formBox__label">
                  <LanguageConverter
                    tag="h4"
                    styleCn="cn-font__noto_light"
                    valueEn="Name"
                    valueCn="姓名"
                  />
                </label>
                <input
                  className="customizedForm-input"
                  type="text"
                  placeholder={state.lenguage === "EN" ? "Name" : "姓名"}
                  name="name"
                  value={name}
                  onChange={onChange}
                  required
                ></input>
                {/**Email */}
                <label className="customizedForm-formBox__label">
                  <LanguageConverter
                    tag="h4"
                    styleCn="cn-font__noto_light"
                    valueEn="Email"
                    valueCn="电子信箱"
                  />
                </label>
                <input
                  className="customizedForm-input"
                  type="text"
                  name="email"
                  value={email}
                  onChange={onChange}
                  placeholder={state.lenguage === "EN" ? "Email" : "电子信箱"}
                  required
                ></input>
                {/**Phone */}
                <label className="customizedForm-formBox__label">
                  <LanguageConverter
                    tag="h4"
                    styleCn="cn-font__noto_light"
                    valueEn="Phone"
                    valueCn="连络电话"
                  />
                </label>
                <input
                  className="customizedForm-input"
                  type="text"
                  name="phone"
                  value={phone}
                  onChange={onChange}
                  placeholder={state.lenguage === "EN" ? "Phone" : "连络电话"}
                  required
                ></input>
                {/**Other */}
                <label className="customizedForm-formBox__label">
                  <LanguageConverter
                    tag="h4"
                    styleCn="cn-font__noto_light"
                    valueEn="Other"
                    valueCn="其他"
                  />
                </label>
                <textarea
                  className="customizedForm-input"
                  type="text"
                  rows="3"
                  name="other"
                  value={other}
                  onChange={onChange}
                  placeholder={state.lenguage === "EN" ? "Other" : "其他"}
                ></textarea>
                <button
                  className={`contact-form__btn btn btn_mt2 ${
                    state.lenguage === "CN" ? "cn-font__noto_medium" : ""
                  }`}
                  type="submit"
                >
                  {state.lenguage === "EN" ? "send" : "送出"}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </article>
  )
}

export default CustomizedPlan
