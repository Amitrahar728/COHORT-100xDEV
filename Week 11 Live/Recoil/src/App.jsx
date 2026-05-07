import './App.css'
import { useState } from "react";
import { RecoilRoot, atom, useRecoilValue, useSetRecoilState } from 'recoil';
import{ counterAtom} from './store/atoms/counter';


function App(){
  return (
    <RecoilRoot>
    <Counter/>
    </RecoilRoot>
  )
}

function Counter(){


  return <div>
    <CurrentCount/>
    <Increase />
    <Decrease />

  </div>
}

function CurrentCount(){
    const count = useRecoilValue(counterAtom);
    return <div>
      {count}
    </div>
}

function Decrease(){
  const setCount = useSetRecoilState(counterAtom);
  function decrease(){
    setCount(c => c-1)
  }
  return <div>
    <button onClick = {decrease} > Decrease </button>
  </div>
}

function Increase(){
  const setCount = useSetRecoilState(counterAtom);
  function increase(){
    setCount(c=>c+1);
  }

  return <div>
    <button onClick = {increase}> Increase </button>
  </div>
}

export default App


//  AN atom 
// Recoil has atoms are units of state that can be read from and written to from any component similar as useState but for recoil//


// step 1: 
// npm install recoil

// step2: 
// Wrapping our function inside app in <RecoilRoot>
// </RecoilRoot>

// step3: 
// Here we need to change useState with atoms

// steps 4 : 
// create counter.js file in <store />
// <atoms></atoms>
//  some optimization can be done by using memo also


// EDGE CASES :

// created a atiom file and then create some selectors giving htem only set part or use part 



