import React from "react"
import { FaUserTie } from "react-icons/fa"
import Modal from "../ui/modal"
import ReactMarkdown from "react-markdown"

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
          <div className="richText-template">
            <article
              className={`richText-content text-align-justify ${
                language === "CN" ? "cn-font__noto_sans_light" : ""
              }`}
            >
              <ReactMarkdown source={guide.profile}></ReactMarkdown>
            </article>
          </div>
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
