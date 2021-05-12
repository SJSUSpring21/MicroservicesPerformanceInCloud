import React,{useRef, useEffect} from 'react';
const {tableau} = window;


function UserProfile() {

    const ref = useRef(null);
    const url= "https://public.tableau.com/views/Cloud_perf/Sheet2"
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
export default UserProfile;