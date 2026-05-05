//  debouncing meaning : when we are writing to quickly then we wait for the client to stop typing 
// then only they can enter the text for search like on amazon 

import {useEffect, useState} from 'react'

function useDebounce(originalfn){
    const currentClock = useRef();


    const fn = ()=>{
        clearTimeout(currentClock.current);
        currentClock.current = setTimeout(originalfn, 200);
    }


    return fn 
    
}