import React,{useState} from 'react';
import PreviewTour from './previewTour';
import useTour from '../../hooks/useTour';

const ListTour = () => {
    
    //import tour hook datas
    const result = useTour();

    //keep data en usestate
    const [tours] = useState(result);
    return (
        <>
        <h1>Theme Tours</h1>
            <ul>
                {tours.map(tour => (
                    <PreviewTour 
                        key={tour.slug}
                        tour={tour}
                    />     
                ))}
            </ul>
        </>
     );
}
 
export default ListTour;