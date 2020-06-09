import React from 'react';
import Layaout from '../layout';
import {graphql} from 'gatsby';

export const query = graphql`
    query($slug:String!){
        allStrapiTouristInformation(filter:{slug:{eq:$slug}}){
            nodes {
                active
                slug
                title_cn
                title_en
            }
        }
    }
`;

const OneFeedBack = ({data:{allStrapiTouristInformation:{nodes}}}) => {
    //restructure
    const {slug} = nodes[0];

    return (        
        <Layaout>
            {slug}
        </Layaout>        
     );
}
 
export default OneFeedBack;