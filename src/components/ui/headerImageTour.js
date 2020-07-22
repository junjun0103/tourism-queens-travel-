import React from "react"
import BackgroundImage from "gatsby-background-image"
import styled from "@emotion/styled"
import Modal from "./modal"

const ImageBackground = styled(BackgroundImage)`
  width: 100vw;
  height: 100vh;
  top: 0;
  right: 0;
`

const BgDark = styled.main`
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
    to top,
    rgba(34, 49, 63, 0.2),
    rgba(34, 49, 63, 0.2)
  );

  h1 {
    color: white;
  }
`

const HeaderImage = ({ title, slogan, highlight, bgImage, mapImage }) => {
  // modal Ref
  const modalRef = React.useRef()
  // modal open function
  const openModal = () => {
    modalRef.current.openModal()
  }
  return (
    <ImageBackground tag="section" fluid={bgImage}>
      <BgDark>
        <div className="themeTour-header__title">
          <div className="themeTour-header__title_back"></div>
          <div className="themeTour-header__title_front">
            <h3>{title}</h3>
          </div>
        </div>
        <br />
        <div className="themeTour-header__subtitle">
          <h1>{slogan}</h1>
        </div>
        <div className="themeTour-header__highlightBox">
          <div className="themeTour-header__highlightBox__content">
            <h4>{highlight}</h4>
          </div>
          <div className="themeTour-header__highlightBox__map">
            <img
              onClick={openModal}
              className="themeTour-header__highlightBox__map__img"
              src={mapImage}
              alt="mapImage"
            />
          </div>
        </div>
      </BgDark>

      {/* modal component */}
      <Modal ref={modalRef}>
        <img className="modalImg" src={mapImage} alt="mapImage" />
      </Modal>
    </ImageBackground>
  )
}

export default HeaderImage
