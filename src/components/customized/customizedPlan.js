import React, { useState } from "react"

const CustomizedPlan = () => {
  ////////////////////states//////////////////

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

  return (
    <article className="customizedForm-containder">
      <h3 className="customizedForm-title">
        Plan your holiday by 5 Simple Filters
      </h3>

      <div className="customizedForm-outside">
        <form>
          <div className="customizedForm-inside">
            {/**Left Form Side */}
            <div className="customizedForm-left">
              <div className="customizedForm-titleBox">
                <hr className="customizedForm-titleHr" />
                <h3 className="customizedForm-title__inside">Requirement</h3>
                <hr className="customizedForm-titleHr" />
              </div>
              <div className="customizedForm-formBox">
                {/**Number of People */}
                <label className="customizedForm-formBox__label">
                  <h4>Number of people</h4>
                </label>
                <input
                  className="customizedForm-input"
                  type="number"
                  placeholder="Number of people"
                  name="people"
                  value={people}
                  onChange={onChange}
                  required
                ></input>
                {/**DateTime of Tickets */}
                <label className="customizedForm-formBox__label">
                  <h4>Departure Date</h4>
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
                    I have flight tickets
                  </label>
                  <textarea
                    className={`customizedForm-input textarea-flightSchedule ${
                      isChecked ? "active" : "inactive"
                    }`}
                    type="text"
                    placeholder="Flight Schedule"
                  ></textarea>
                </div>
                {/**number of durations days */}
                <label className="customizedForm-formBox__label">
                  <h4>Duration (Days)</h4>
                </label>
                <input
                  className="customizedForm-input"
                  type="text"
                  placeholder="Duration"
                  name="duration"
                  onChange={onChange}
                  value={duration}
                  required
                ></input>
                {/**TextArea of Request */}
                <label className="customizedForm-formBox__label">
                  <h4>Special Request</h4>
                </label>
                <textarea
                  className="customizedForm-input"
                  type="text"
                  name="request"
                  value={request}
                  onChange={onChange}
                  rows="3"
                  placeholder="Special Request(Activity,Meal etc)"
                ></textarea>
                {/**Budget */}
                <label className="customizedForm-formBox__label">
                  <h4>Budget</h4>
                </label>
                <input
                  className="customizedForm-input"
                  type="text"
                  name="budget"
                  value={budget}
                  onChange={onChange}
                  placeholder="Budget"
                  required
                ></input>
              </div>
            </div>

            {/**Right Form Side */}
            <div className="customizedForm-right">
              <div className="customizedForm-titleBox">
                <hr className="customizedForm-titleHr" />
                <h3 className="customizedForm-title__inside">Contact</h3>
                <hr className="customizedForm-titleHr" />
              </div>
              <div className="customizedForm-formBox">
                {/**Name */}
                <label className="customizedForm-formBox__label">
                  <h4>Name</h4>
                </label>
                <input
                  className="customizedForm-input"
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={name}
                  onChange={onChange}
                  required
                ></input>
                {/**Email */}
                <label className="customizedForm-formBox__label">
                  <h4>Email</h4>
                </label>
                <input
                  className="customizedForm-input"
                  type="text"
                  name="email"
                  value={email}
                  onChange={onChange}
                  placeholder="Email"
                  required
                ></input>
                {/**Phone */}
                <label className="customizedForm-formBox__label">
                  <h4>Phone</h4>
                </label>
                <input
                  className="customizedForm-input"
                  type="text"
                  name="phone"
                  value={phone}
                  onChange={onChange}
                  placeholder="Phone"
                  required
                ></input>
                {/**Other */}
                <label className="customizedForm-formBox__label">
                  <h4>Other</h4>
                </label>
                <textarea
                  className="customizedForm-input"
                  type="text"
                  rows="3"
                  name="other"
                  value={other}
                  onChange={onChange}
                  placeholder="Other"
                ></textarea>
                <button className="contact-form__btn btn btn_mt2" type="submit">
                  send
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
