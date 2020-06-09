import React from 'react';
import {Link} from 'gatsby';

const PreviewGuide = ({guide}) => {
    
    const {slug} = guide;
        
    return ( 
        <>            
            <p>previewGuide</p>          
            <Link to={"/"+slug}>Here</Link>
        </>
     );
}
 
export default PreviewGuide;