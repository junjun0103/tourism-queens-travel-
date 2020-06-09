import React from 'react';
import Layaout from '../layout';
import {graphql} from 'gatsby';

export const query = graphql`
    query($slug:String!){
        allStrapiThemeTour(filter:{slug:{eq:$slug}}){
            nodes {
                excluded_cn
                excluded_en
                highlight_cn
                highlight_en
                slug
                included_cn
                included_en
                policy_cn
                policy_en
                priceDetail_cn
                priceDetail_en
                subTitle_cn
                subTitle_en
                title_cn
                title_en
            }
        }
    }
`;

const OneFeedBack = ({data:{allStrapiThemeTour:{nodes}}}) => {
    //restructure
    const {subTitle_en} = nodes[0];

    return (        
        <Layaout>
            {subTitle_en}
        </Layaout>        
     );
}
 
export default OneFeedBack;