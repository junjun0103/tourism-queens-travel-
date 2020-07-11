import React from 'react';
import BackgroundImage from 'gatsby-background-image';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

const ImageBackground = styled(BackgroundImage)`
    width: 100vw;
    height: 100vh;
    top: 0;
    right: 0;
`
const Img = styled(Image)`
    width: 200px;
    height: 200px;

    @media(min-width:768px){
      width: 300px;
      height: 300px;
    }
`

const BgDark = styled.main`
    width:100%;
    height: 100%;
    background-image:linear-gradient(to top, rgba(34,49,63,.20),rgba(34,49,63,.20));

    h1{
      color:white;
    }
`;

const HeaderImage = ({title,subtitle,highlight,bgImage,mapImage}) => {
    return ( 
        <ImageBackground
            tag="section"
            fluid={bgImage}
        >          
        <BgDark> 
          <div className="themeTour-header__title">
            <div className="themeTour-header__title_back"></div>
            <div className="themeTour-header__title_front">
              <h3>{title}</h3>
            </div>
          </div>
          <br />
          <div className="themeTour-header__subtitle">
            <h1>
              {subtitle}
            </h1>
          </div>
          <div className="themeTour-header__highlightBox">
            <div className="themeTour-header__highlightBox__content">
              <h4>
                {highlight}
              </h4>
            </div>
            <div className="themeTour-header__highlightBox__map">
              <img css={css`
                    border-radius: 4px;
                `} 
                src={mapImage} alt=""/>
            </div>
          </div>        
        </BgDark>
        </ImageBackground>
     );
}
 
export default HeaderImage;