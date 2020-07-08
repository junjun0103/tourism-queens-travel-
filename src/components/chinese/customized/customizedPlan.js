import React,{ useState } from 'react';

const CustomizedPlan = () => {

    ////////////////////states//////////////////

    //State of Flight Schedule
    const [isChecked, setIsChecked] = React.useState(false);

    //state of form
    const [holiday, setHoliday] = useState({
        people:null,
        departureDate:null,
        duration:null,
        request:null,
        budget:null,
        name:null,
        email:null,
        phone:null,
        other:null
    });

    //extract values
    const {people,departureDate,duration,request,budget,name,email,phone,other} = holiday

    //////////////////Funtions/////////

    //Change State of Flight Schedule//
    const toggleChecked = () => {
        setIsChecked(!isChecked)
    };

    //change input values onchange
    const onChange = e => {
        setHoliday({
            ...holiday,
            [e.target.name] : e.target.value
        })        
    };

    return ( 
        <article className="customizedForm-containder">
          <h3 className="customizedForm-title">
          开始规划您的假期
          </h3>
          <h1></h1>
          
          <div className="customizedForm-outside">
            <form>
              <div className="customizedForm-inside">                
                {/**Left Form Side */}
                <div className="customizedForm-left">
                    <div className="customizedForm-titleBox">
                    <hr className="customizedForm-titleHr" />
                    <h3 className="customizedForm-title__inside">title</h3>
                    <hr className="customizedForm-titleHr" />
                    </div>
                    <div className="customizedForm-formBox">
                    {/**Number of People */}
                    <label className="customizedForm-formBox__label">
                        <h4>人数</h4>
                    </label>
                    <input
                        className="customizedForm-input"
                        type="number"
                        placeholder="人数"
                        name="people"
                        value={people}
                        onChange={onChange}
                        required
                    ></input>
                    {/**DateTime of Tickets */}
                    <label className="customizedForm-formBox__label">
                        <h4>出团日期</h4>
                    </label>
                    <input
                        className="customizedForm-input"
                        type="text"
                        placeholder="出团日期"
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
                        我已预订旅游机票
                        </label>
                        <textarea
                        className={`customizedForm-input textarea-flightSchedule ${
                            isChecked ? "active" : "inactive"
                        }`}
                        type="text"
                        placeholder="我已预订旅游机票"
                        ></textarea>
                    </div>
                    {/**number of durations days */}
                    <label className="customizedForm-formBox__label">
                        <h4>行程天数 (迪亚斯)</h4>
                    </label>
                    <input
                        className="customizedForm-input"
                        type="text"
                        placeholder="行程天数"
                        name="duration"
                        onChange={onChange}
                        value={duration}
                        required
                    ></input>
                    {/**TextArea of Request */}
                    <label className="customizedForm-formBox__label">
                        <h4>特殊要求 例如</h4>
                    </label>
                    <textarea
                        className="customizedForm-input"
                        type="text"
                        name="request"
                        value={request}
                        onChange={onChange}
                        rows="3"
                        placeholder="特殊要求 例如 : 景点 餐食等"
                    ></textarea>
                    {/**Budget */}
                    <label className="customizedForm-formBox__label">
                        <h4>預算</h4>
                    </label>
                    <input
                        className="customizedForm-input"
                        type="text"
                        name="budget"
                        value={budget}
                        onChange={onChange}
                        placeholder="預算"
                        required
                    ></input>
                    </div>
                </div>

                {/**Right Form Side */}
                <div className="customizedForm-right">
                    <div className="customizedForm-titleBox">
                    <hr className="customizedForm-titleHr" />
                    <h3 className="customizedForm-title__inside">title</h3>
                    <hr className="customizedForm-titleHr" />
                    </div>
                    <div className="customizedForm-formBox">
                    {/**Name */}
                    <label className="customizedForm-formBox__label">
                        <h4>姓名</h4>
                    </label>
                    <input
                        className="customizedForm-input"
                        type="text"
                        placeholder="姓名"
                        name="name"
                        value={name}
                        onChange={onChange}
                        required
                    ></input>
                    {/**Email */}
                    <label className="customizedForm-formBox__label">
                        <h4>电子信箱</h4>
                    </label>
                    <input
                        className="customizedForm-input"
                        type="text"
                        name="email"
                        value={email}
                        onChange={onChange}
                        placeholder="电子信箱"
                        required
                    ></input>
                    {/**Phone */}
                    <label className="customizedForm-formBox__label">
                        <h4>连络电话</h4>
                    </label>
                    <input
                        className="customizedForm-input"
                        type="text"
                        name="phone"
                        value={phone}
                        onChange={onChange}
                        placeholder="连络电话"
                        required
                    ></input>
                    {/**Other */}
                    <label className="customizedForm-formBox__label">
                        <h4>其他</h4>
                    </label>
                    <textarea
                        className="customizedForm-input"
                        type="text"
                        rows="3"
                        name="other"
                        value={other}
                        onChange={onChange}
                        placeholder="其他"
                    ></textarea>
                    <button className="contact-form__btn btn mt2" type="submit">
                        送出
                    </button>
                    </div>
                </div>
              </div>
            </form>
          </div>
        </article>
     );
}
 
export default CustomizedPlan;