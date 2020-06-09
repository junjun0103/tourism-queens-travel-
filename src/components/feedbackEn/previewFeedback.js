import React from 'react';
import {Link} from 'gatsby';

const PreviewFeedback = ({feedback}) => {

    const {id,title_en,title_cn,name_cn,name_en,content_cn,content_en,
            shortDescription_cn,shortDescription_en,date} = feedback;
       
    return ( 
        <>            
            <p>previewfeed</p>
            <Link to={"/"+id}>Here</Link>

        </>
     );
}
 
export default PreviewFeedback;