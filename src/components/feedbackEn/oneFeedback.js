import React from 'react';
import Layaout from '../layout';
import {graphql} from 'gatsby';

export const query = graphql`
    query($id:String!){
        allStrapiFeedbacks(filter:{id:{eq:$id}}){
            nodes {
                content_cn
                content_en
                name_cn
                name_en
                shortDescription_cn
                shortDescription_en
                title_cn
                title_en
            }
        }
    }
`;

const OneFeedBack = ({data:{allStrapiFeedbacks:{nodes}}}) => {
    //restructure
    const {shortDescription_en} = nodes[0];

    return (        
        <Layaout>
            {shortDescription_en}
        </Layaout>        
     );
}
 
export default OneFeedBack;