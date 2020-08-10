import React, { useContext } from "react"
import Layaout from "../ui/layout"
import { graphql } from "gatsby"
import Modal from "../ui/modal"
import { GlobalStateContext } from "../../context/GlobalContextProvider"

export const query = graphql`
  query($slug: String!) {
    allStrapiFeedbacks(filter: { slug: { eq: $slug } }) {
      nodes {
        content_cn
        content_en
        name_cn
        name_en
        shortDescription_cn
        shortDescription_en
        title_cn
        title_en
        date
        slug
        photo {
          sharp: childImageSharp {
            fluid {
              src
            }
          }
        }
      }
    }
  }
`

const OneFeedBack = ({
  data: {
    allStrapiFeedbacks: { nodes },
  },
}) => {
  //restructure
  const {
    content_cn,
    content_en,
    name_cn,
    name_en,
    title_cn,
    title_en,
    date,
    photo,
  } = nodes[0]

  // language state
  const state = useContext(GlobalStateContext) || { lenguage: "EN" }
  //declare lenguage variables
  let title = "",
    name = "",
    content = ""

  if (state.lenguage === "EN") {
    title = title_en
    name = name_en
    content = content_en
  } else {
    title = title_cn
    name = name_cn
    content = content_cn
  }

  // modal Ref
  const modalRef = React.useRef()
  // modal open function
  const openModal = () => {
    modalRef.current.openModal()
  }
  return (
    <Layaout>
      <section className="section section-center">
        <div className=" review-container">
          <div className="review-container_items">
            <img
              onClick={openModal}
              src={photo.sharp.fluid.src}
              alt="img"
              className="review-img"
            ></img>
            <div className="review-contents">
              <h2
                className={`${
                  state.lenguage === "CN" ? "cn-font__noto_bold" : ""
                }`}
              >
                {title}
              </h2>
              <h3
                className={`review-contents_nameDate ${
                  state.lenguage === "CN" ? "cn-font__noto_bold" : ""
                }`}
              >
                {name}&nbsp;
                {date}
              </h3>
              <p
                className={`review-contents_content ${
                  state.lenguage === "CN" ? "cn-font__noto_medium" : ""
                }`}
              >
                {content}
              </p>
            </div>
          </div>
        </div>
        {/* modal component */}
        <Modal ref={modalRef}>
          <img className="modalImg" src={photo.sharp.fluid.src} alt="photo" />
        </Modal>
      </section>
    </Layaout>
  )
}

export default OneFeedBack
