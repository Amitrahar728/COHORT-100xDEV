//  used to detect previous value of the state 


import {useEffect , useRef , useState} from "react"

export const usePrev = (value) => {
    const ref = useRef(); // create a variable where we can store the value but 
    // as a state this does not rerenders upon the value change 

    
    useEffect(()=>{
        ref.current = value;
    }, [value]);


    return ref.current ; // returns undefined in intialization case 
};

//  it returns the ref current value first and then due to value change useeffect is called later 