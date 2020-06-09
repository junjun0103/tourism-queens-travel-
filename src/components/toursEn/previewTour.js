import React from 'react';
import {Link} from 'gatsby';

const PreviewTour = ({tour}) => {
    
    const {slug} = tour;
        
    return ( 
        <>            
            <p>previewTour</p>
            <Link to={"/"+slug}>Here</Link>          

        </>
     );
}
 
export default PreviewTour;