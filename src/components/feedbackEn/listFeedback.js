import React,{useState} from 'react';
import Previewfeedback from './previewFeedback';
import useFeefback from '../../hooks/usefeedback';

const ListFeedBack = () => {

    //import feedback hook datas
    const result = useFeefback();

    //keep data en usestate
    const [feedbacks] = useState(result);

    return ( 
        <>
            <h1>Reviews</h1>
            <ul>
                {feedbacks.map(feedback => (
                    <Previewfeedback 
                        key={feedbacks.id}
                        feedback={feedback}
                    />
                ))}
            </ul>
        </>
     );
}
 
export default ListFeedBack;