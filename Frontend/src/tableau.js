import React,{useRef, useEffect} from 'react';
const {tableau} = window;


function Tableau() {

    const ref = useRef(null);
    const url= "https://public.tableau.com/views/GCPvsAWS/Sheet1"
   function initViz(){
        new tableau.Viz(ref.current,url);
    }

    useEffect(()=>{
        initViz();
    },[]);

    return (
        <div>
    
     <div ref={ref}></div>
     </div>
    )
}
export default Tableau;