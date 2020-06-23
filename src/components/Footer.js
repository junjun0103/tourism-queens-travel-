import React from "react"
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"
import { AiFillPrinter } from "react-icons/ai"
import Awards from "../components/awards"

const footer = () => {
  return (
    <div className="footer__container">
      <div className="footer__information">
        <FaPhone className="footer__icon" />
        <h5 className="clr-primary-4">+64-9-4800-118</h5>
        <AiFillPrinter className="footer__icon" />
        <h5 className="clr-primary-4">+64-9-4800-228</h5>
        <FaEnvelope className="footer__icon" />
        <h5 className="clr-primary-4">inbound@queenstravel.com</h5>
        <FaMapMarkerAlt className="footer__icon" />
        <h5 className="clr-primary-4">
          129A Qnewa Road,Northcote,Auckland0627,New Zealand
        </h5>
      </div>
      <div className="footer__awards">
        <Awards></Awards>
      </div>
    </div>
  )
}

export default footer
