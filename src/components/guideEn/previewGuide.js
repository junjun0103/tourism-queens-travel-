import React from "react"
import { FaUserTie } from "react-icons/fa"
import Modal from "../ui/modal"
//import { Link } from "gatsby"
//  <Link to={"/" + slug}>Here</Link>
const PreviewGuide = ({ guide, language }) => {
  const { slug } = guide

  // modal Ref
  const modalRef = React.useRef()
  // modal open function
  const openModal = () => {
    modalRef.current.openModal()
  }

  return (
    <>
      <div className="previewGuide-container">
        <img
          onClick={openModal}
          src={guide.photo.sharp.fluid.src}
          alt="img"
          className="previewGuide-img"
        ></img>
        <div className="previewGuide-contents">
          {/* guide name */}
          <div className="previewGuide-contents__iconWithName">
            <FaUserTie className="previewGuide-contents__icon"></FaUserTie>
            <h3
              className={`${language === "CN" ? "cn-font__noto_medium" : ""}`}
            >
              {guide.name}
            </h3>
          </div>
          {/* guide profile */}
          <h4
            className={`text-align-justify ${
              language === "CN" ? "cn-font__noto_light" : ""
            }`}
          >
            {guide.profile}
          </h4>
        </div>
      </div>
      {/* modal component */}
      <Modal ref={modalRef}>
        <img
          className="modalImg"
          src={guide.photo.sharp.fluid.src}
          alt="photo"
        />
      </Modal>
    </>
  )
}

export default PreviewGuide
