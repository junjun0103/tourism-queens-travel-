import React from "react"
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"
import { AiFillPrinter } from "react-icons/ai"
import Awards from "../../components/awards"
import "../../css/components/footer.css"

const footer = () => {
  return (
    <footer className="footer__container">
      <div className="footer__information">
        <FaPhone className="footer__icon" />
        <h5 className="clr-primary-4">+64-9-4800-118</h5>
        <AiFillPrinter className="footer__icon" />
        <h5 className="clr-primary-4">+64-9-4800-228</h5>
        <FaEnvelope className="footer__icon" />
        <h5 className="clr-primary-4">inbound@queenstravel.com</h5>
        <FaMapMarkerAlt className="footer__icon" />
        <h5 className="clr-primary-4">
          129A Onewa Road, Northcote, Auckland 0627, NewZealand
        </h5>
      </div>

      <Awards styleFor="footer"></Awards>
    </footer>
  )
}

export default footer
