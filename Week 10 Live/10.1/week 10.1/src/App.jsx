import './App.css'
import { useState } from 'react';
import { useContext , createContext } from 'react';

const bulbcontext  = createContext();


export function BulbProvider({children}){
    const [bulbon , setbulbon] = useState(true);
    return <bulbcontext.Provider value = {{
      bulbon : bulbon, 
      setbulbon : setbulbon
    }}>
      {children}
    </bulbcontext.Provider>
}
function App(){
  // in form of components bulb on and off toggle button
    return <div>
      
      <BulbProvider>
          <Lightbulb />
      </BulbProvider>
    </div>
}


function Lightbulb(){
  return <div>
    <Bulbstate />
   
     <Tooglestate />
    
   
  </div>
}

function Bulbstate(){
  const {bulbon} = useContext(bulbcontext);
  return <div>
       {bulbon ? "Bulb on" : "Bulb off"}
  </div>
}

function Tooglestate(){
  const {bulbon , setbulbon} = useContext(bulbcontext);
  function toggle(){
    console.log("toggle function ")
    setbulbon(!bulbon)
  } 
  return <div>
    <button onClick={toggle}>Toggle the button</button>
  </div>
}















 // this is the one way by dom manipulation but not in react 
  // function focusoninput(){
  //   document.getElementById("name").focus()
  // }


  // in react : useref
  // const inputref = useRef();


  // function Focusoninput(){
  //   inputref.current.focus();
  // }

  // return <div>
  //   {/*  reference to a dom element  */}
  //   <input type={"text"} ref = {inputref} placeholder='Firstname' ></input>
  //   <input type = {"text"}  placeholder='lastname'></input>
  //   <button onClick = {Focusoninput}>submit</button> 
  //   {/* this will call functino and function by reference get inputref element and focus on it 
  //    */}

  //   {/*  in useref we dont add firstname or lastname upon submission the focus should go upon the empty or blank section  */}


  // </div>
// function App() {
//     return <div>
//       {/* logic  return here remain on all pages  */}
//       {/* if we add href here for given routes page refreshes no benifit of react so it is a dumb way . */}
//       {/* Use link tag for single page  then the application become single page application and use it inside BrowserRouter*/}
//       {/* Link is used when we click something and then we go to some route  but usenavigate hook is for automatically navigation without any activity by user*/}
//       {/* A default 404 page if a route which is not defined is searched  */}
      
//       <BrowserRouter>
      
//         <Routes>
//           <Route path ="/" element ={<Layout/>}>
//           <Route path ="/neet/online-coaching-class-11" element ={<Class11Program/>}/>
//           <Route path ="/neet/online-coaching-class-12" element ={<Class12Program/>}/>
//           <Route path = "/" element = {<Landing/>}/>
//           <Route path ="*" element ={<nopage/>}/>
//           </Route>

//         </Routes>
       
//       </BrowserRouter>
//     </div>


// }


// function Layout(){
//   return <div style ={{height :"90vh", background :"green"}}>
//     <Header/>
//     <div style = {{height : "90vh" , background : "red"}}>
//       <Outlet/>
//     </div>
//     footer
//   </div>
// }
// function Header(){

//   return  <div>
//     <div>Header is here </div>
    
//     <Link to ="/">Allen</Link>
//     <Link to ="/neet/online-coaching-class-11">Class 11</Link>
//     <Link to ="/neet/online-coaching-class-12">Class 12</Link>
//    </div>
// }
// function Class11Program(){
//   return <div>
//     Neet Program for 11th class 
//   </div>
// }

// function Class12Program(){
//   const navigate = useNavigate();

//   function redirectuser(){
//     navigate("/")
//   }

//   return <div>
//     Neet Program for 12th class 
//     <button onClick={redirectuser}>Redirect to landing page</button>
//   </div>
// }
// function Landing(){
//   return <div>
//     Landing page 
//   </div>
// }


export default App
