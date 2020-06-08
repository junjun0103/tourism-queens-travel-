import React from 'react';
import {Link} from 'gatsby';

const PreviewIterinary = ({iterinary}) => {

    const {included_cn, included_en, highlight_cn, highlight_en, excluded_cn, excluded_en, 
        policy_cn, policy_en, title_cn, title_en, subTitle_cn, subTitle_en, price_cn, price_en, 
        priceDetail_cn, priceDetail_en, plans_cn,slug} = iterinary;

        console.log(iterinary);

    return ( 
        <>
            {title_en}
            <p>cierra</p>
            <Link to={"/"+slug}>here</Link>

        </>
     );
}
 
export default PreviewIterinary;