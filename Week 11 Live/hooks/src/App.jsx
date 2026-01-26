import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import {userposttitle } from './hook/fetch.js';
import { useFetch } from '../hook/useFetch.js';

function useDebounce(originalfn){
  const currentclock = useRef();

  const fn = () => {
    clearTimeout(currentclock.current);
    currentclock.current = setTimeout(originalfn)
  }

  return fn 
}

function App(){
  function senddatatobackend(){
    fetch("api.amazon.com/search/");
  }

  const debouncedfn = useDebounce(senddatatobackend)


  return (
    <>
      <input type="text" onChange={debouncedfn}></input>
    </>
  );
}

// function App(){
//   const [pageno, setpageno] = useState(1);
//   const time = 10;
//   const { finalData ,loading } = useFetch("https://jsonplaceholder.typicode.com/posts/"+ pageno , time);

//   if(loading){
//     return <div>
//       Loading ....
//     </div>
//   }

//   return (
//     <div>
//       <button onClick={() => setpageno(1)}>1</button>
//       <button onClick={() => setpageno(2)}>2</button>
//       <button onClick={() => setpageno(3)}>3</button>
//       <button onClick={() => setpageno(4)}>4</button>
//       {JSON.stringify(finalData)}
//     </div>
//   )
// }


// // custom hook
// function usecounter(){
//   const [count , setcount ] = useState(0);
//   function increase(){
//     setcount(count+1);
//   }
//   return {
//     count : count,
//     increase : increase
//   }
// }


// function App() {
//   return <div>
//     <Counter/>
//     <Counter/>
//     <Counter/>
//     <Counter/>
//     <Counter/>
//   </div>
// }

// function Counter(){
// const {count , increase} = usecounter();
//   return <div>
//     <button onClick={increase}> increase {count}</button>
//   </div>
// }
export default App
