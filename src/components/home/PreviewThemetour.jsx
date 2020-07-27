import React,{useEffect,useRef,useState} from 'react';
import styled from '@emotion/styled'
import ThemeTour from './ThemeTour'
import { func } from 'prop-types';

const TourTheme = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 0px;
`;
const Directory = styled.div`
    padding-top:40px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

function useOnScreen(options){
    const ref = useRef(null);
    const [visible,setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) =>{
            setVisible(entry.isIntersecting);
        },options);

        if(ref.current){
            observer.observe(ref.current);
        }

        return() =>{
            if(ref.current){
                observer.unobserve(ref.current);
            }
        };
    },[ref,options]);

    return [ref,visible];
}

const PreviewThemeTour = ({contents}) => {
    
   const [ref,visible] = useOnScreen({rootMargin:"-300px"});
    
    return ( 
        <TourTheme>
            <h2   className="title-style anim">THEME TOURS</h2>
            <div
                ref={ref}
                className={`${visible ? "nuevo" : "siempre"}`}
            >
                <h1>prueba 1</h1>
                <h1>prueba 2</h1>
                <h1>prueba 3</h1>
                <h1>prueba 4</h1>
                <h1>prueba 5</h1>
            </div>
            <Directory>                
                {contents.filter((content,idx) => idx < 5 )
                .map(({id,...otherProps}) =>(
                    <ThemeTour 
                        key={id}
                        {...otherProps}
                    />
                ))}
            </Directory>
        </TourTheme>
     );
}
 
export default PreviewThemeTour;