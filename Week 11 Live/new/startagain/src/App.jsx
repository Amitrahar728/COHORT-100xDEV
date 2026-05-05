// import {useState} from 'react'
// import './App.css'

// function useCounter(){
//     const [ count , setCount] = useState(0);
//     function increaseCount(){
//       setCount(count+1);
//     }  
//     return {
//       count:count,
//       increaseCount : increaseCount
//     }
// }


// function App(){
  
//   return(
//     <div>
//       <Counter/>
//       <Counter/>
//       <Counter/>
//       <Counter/>
//       <Counter/>

//     </div>
//   )
// }
// function Counter(){
//   const {count , increaseCount} = useCounter();
//   return <div>
//     <button
//       onClick = {increaseCount}> Increase {count}
//     </button>
//   </div>
// }
// export default App



//  USEFETCH hook 
//  what it do : 


import {useEffect, useState} from 'react'
import './App.css'
import { usePostTitle } from '../hooks/useFetch';
import {useDebounce} from '../hooks/useDebounce';

function App() {
    const isOnline = useIsOnline();
    return (
        
            !isOnline && (
                <div role="alert">
                    You are offline. Changes will be synced when you reconnect.
                </div>
            )
        
    )
}


//   // function sendDataToBackend(){
//   //   fetch("api.amazon.com/search/");
//   // }
//   // const debounceFn = useDebounce(sendDataToBackend)



//   return (
//     <>
//       <input type="text" ></input>
//     </>
//   )
// }

export default App

