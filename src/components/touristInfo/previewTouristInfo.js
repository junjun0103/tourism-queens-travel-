import React from 'react';
import {Link} from 'gatsby';

const PreviewTour = ({tourinfo}) => {
    
    const {slug} = tourinfo;
        
    return ( 
        <>            
            <p>previewToursInfo</p>
            {<Link to={"/"+slug}>Here</Link>}         

        </>
     );
}
 
export default PreviewTour;