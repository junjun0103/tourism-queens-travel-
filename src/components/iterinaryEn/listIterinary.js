import React, {useState,useEffect} from 'react';
import UseItinerary from "../../hooks/useItinerary";
import PreviewIterinary from './previewIterinary';

const ListIterinary = () => {

    //bring data from hook
    const result = UseItinerary();
    
    //use state for keep the data
    const [iterinaries] =  useState(result);

    return ( 
        <>  
            <h1>Iterinary</h1>
            <ul>
                {/**Map for the datas */}
                {iterinaries.map(iterinary =>(
                    <PreviewIterinary
                        key={iterinary.id}
                        iterinary={iterinary}
                    />
                ))}
            </ul>
        </>
     );
}
 
export default ListIterinary;