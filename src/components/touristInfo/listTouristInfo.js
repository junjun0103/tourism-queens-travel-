import React,{useState} from 'react';
import PreviewToursInfo from './previewTouristInfo';
import useToursInfo from '../../hooks/useToursInfo';

const ListToursInfo = () => {
    
    //import tour hook datas
    const result = useToursInfo();

    //keep data en usestate
    const [toursinfo] = useState(result);
    return (
        <>
        <h1>Tours Info</h1>
            <ul>
                {toursinfo.map(tourinfo => (
                    <PreviewToursInfo 
                        key={tourinfo.slug}
                        tourinfo={tourinfo}
                    />     
                ))}
            </ul>
        </>
     );
}
 
export default ListToursInfo;