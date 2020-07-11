import React from 'react';

const TourInformation = () => {
    return ( 
        <article className="themeTour-notice__article">
          <div className="themeTour-notice__price__box">
            <div className="themeTour-notice__title">
              <div className="themeTour-notice__title__lines">
                <div className="themeTour-notice__title__lines__top"></div>
                <div className="themeTour-notice__title__lines__bottom"></div>
              </div>
              <h3>Price</h3>
              <div className="themeTour-notice__title__lines">
                <div className="themeTour-notice__title__lines__top"></div>
                <div className="themeTour-notice__title__lines__bottom"></div>
              </div>
            </div>
            <div className="themeTour-notice__content">
              <h4>{priceDetail_en}</h4>
            </div>
          </div>
          <div className="themeTour-notice__included__box">
            <div className="themeTour-notice__title">
              <div className="themeTour-notice__title__lines">
                <div className="themeTour-notice__title__lines__top"></div>
                <div className="themeTour-notice__title__lines__bottom"></div>
              </div>
              <h3>Included</h3>
              <div className="themeTour-notice__title__lines">
                <div className="themeTour-notice__title__lines__top"></div>
                <div className="themeTour-notice__title__lines__bottom"></div>
              </div>
            </div>
            <div className="themeTour-notice__content">
              <h4>{included_en}</h4>
            </div>
          </div>
          <div className="themeTour-notice__excluded__box">
            <div className="themeTour-notice__title">
              <div className="themeTour-notice__title__lines">
                <div className="themeTour-notice__title__lines__top"></div>
                <div className="themeTour-notice__title__lines__bottom"></div>
              </div>
              <h3>Excluded</h3>
              <div className="themeTour-notice__title__lines">
                <div className="themeTour-notice__title__lines__top"></div>
                <div className="themeTour-notice__title__lines__bottom"></div>
              </div>
            </div>
            <div className="themeTour-notice__content">
              <h4>{excluded_en}</h4>
            </div>
          </div>
          <div className="themeTour-notice__important__box">
            <div className="themeTour-notice__title">
              <div className="themeTour-notice__title__lines">
                <div className="themeTour-notice__title__lines__top"></div>
                <div className="themeTour-notice__title__lines__bottom"></div>
              </div>
              <h3>Notice</h3>
              <div className="themeTour-notice__title__lines">
                <div className="themeTour-notice__title__lines__top"></div>
                <div className="themeTour-notice__title__lines__bottom"></div>
              </div>
            </div>
            <div className="themeTour-notice__content">
              <h4>content</h4>
            </div>
          </div>
          <div className="themeTour-notice__policy__box">
            <div className="themeTour-notice__title">
              <div className="themeTour-notice__title__lines">
                <div className="themeTour-notice__title__lines__top"></div>
                <div className="themeTour-notice__title__lines__bottom"></div>
              </div>
              <h3>Policy</h3>
              <div className="themeTour-notice__title__lines">
                <div className="themeTour-notice__title__lines__top"></div>
                <div className="themeTour-notice__title__lines__bottom"></div>
              </div>
            </div>
            <div className="themeTour-notice__content">
              <h4>{policy_en}</h4>
            </div>
          </div>
        </article>
     );
}
 
export default TourInformation;