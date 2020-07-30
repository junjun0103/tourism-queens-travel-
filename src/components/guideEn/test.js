import React from 'react';
import Layaout from '../ui/layout';
import {graphql} from 'gatsby';

export const query = graphql`
    query($slug:String!){
        allStrapiTouristInformation(filter:{slug:{eq:$slug}}){
            nodes {
                slug
                title_cn
                title_en
                notice_cn
                notice_en
                information_cn {
                  content
                  id
                  subject
                }
                information_en {
                  content
                  id
                  subject
                }
            }
        }
    }
    `;

const OneFeedBack = ({data:{allStrapiTouristInformation:{nodes}}}) => {
    //restructure
    const {title_en} = nodes[0];

    return (        
        <Layaout>
           <h1>{title_en}</h1>
        </Layaout>        
     );
}
 
export default OneFeedBack;