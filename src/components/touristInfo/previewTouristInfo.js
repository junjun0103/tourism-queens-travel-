import React from "react"
import { Link } from "gatsby"
import LanguageConverter from "../../components/ui/languageConverter"

const PreviewTour = ({ tourinfo }) => {
  const { slug, title_en, title_cn } = tourinfo

  return (
    <>
      {
        <Link to={"/touristInformation/" + slug}>
          <div className="preview-tourInfo__container">
            <img
              src={tourinfo.icon.sharp.fluid.src}
              alt="img"
              className="preview-tourInfo__img"
            ></img>
            <LanguageConverter
              tag="h3"
              styleCn="cn-font__noto_bold"
              style="preview-tourInfo__title"
              valueEn={title_en}
              valueCn={title_cn}
            ></LanguageConverter>
          </div>
        </Link>
      }
    </>
  )
}

export default PreviewTour
