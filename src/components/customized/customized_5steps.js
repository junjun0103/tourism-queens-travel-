import React,{useEffect,useRef,useState} from "react"


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

const Customized_5steps = () => {
  const [ref,visible] = useOnScreen({rootMargin:"-50px"});
  return (
    <>
      <div 
        ref={ref}
        className={`custimizedProcess-container ${visible ? "nuevo" : "siempre"}`}
      >
        <div className="custimizedProcess-steps">
          <div className="custimizedProcess-steps__circle">
            <div className="custimizedProcess-steps__circleInside"></div>
          </div>
          <div className="custimizedProcess-steps__text">
            <h3>1</h3>
            <h4 className="break-word">
              Confirm Number, Date, Duration, Special Request
            </h4>
          </div>
        </div>
        <div className="custimizedProcess-steps">
          <div className="custimizedProcess-steps__circle">
            <div className="custimizedProcess-steps__circleInside"></div>
          </div>
          <div className="custimizedProcess-steps__text">
            <h3>2</h3>
            <h4 className="break-word">Initial Itinerary and Quotation</h4>
          </div>
        </div>
        <div className="custimizedProcess-steps">
          <div className="custimizedProcess-steps__circle">
            <div className="custimizedProcess-steps__circleInside"></div>
          </div>
          <div className="custimizedProcess-steps__text">
            <h3>3</h3>
            <h4 className="break-word">
              •Confirm Itinerary •Sign Contract<br></br>•Pay 30% fee
              <br></br>•Book Stays Activities Transportation
            </h4>
          </div>
        </div>
        <div className="custimizedProcess-steps">
          <div className="custimizedProcess-steps__circle">
            <div className="custimizedProcess-steps__circleInside"></div>
          </div>
          <div className="custimizedProcess-steps__text">
            <h3>4</h3>
            <h4 className="break-word">
              •Complete the banlance a month before departure. •Receive a travel
              details
            </h4>
          </div>
        </div>
        <div className="custimizedProcess-steps">
          <div className="custimizedProcess-steps__circle">
            <div className="custimizedProcess-steps__circleInside"></div>
          </div>
          <div className="custimizedProcess-steps__text">
            <h3>5</h3>
            <h4 className="break-word">
              Explore your holiday with Queen's Travel
            </h4>
          </div>
        </div>
      </div>
    </>
  )
}

export default Customized_5steps
