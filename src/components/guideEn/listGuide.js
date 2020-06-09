import React,{useState} from 'react';
import PreviewGuide from './previewGuide';
import useGuide from '../../hooks/useGuide';

const ListGuide = () => {
    
    //import tour hook datas
    const result = useGuide();

    //keep data en usestate
    const [guides] = useState(result);
    return (
        <>
        <h1>Theme Tours</h1>
            <ul>
                {guides.map(guide => (
                    <PreviewGuide 
                        key={guide.slug}
                        guide={guide}
                    />     
                ))}
            </ul>
        </>
     );
}
 
export default ListGuide;