

import React from 'react';

const App = () =>{
  
    return
 
};






// class ErrorBoundary extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { hasError: false };
//     }

//     static getDerivedStateFromError(error) {
//         return { hasError: true };
//     }

//     componentDidCatch(error, info) {
//         console.error("Error caught:", error, info);
//     }

//     render() {
//         if (this.state.hasError) {
//             return <h1 style = {{color : "red"}}>Something went wrong.</h1>;
//         }

//         return this.props.children; 
//     }
// }


// function Card1(){

//   //  if i throw an error here using :
//    throw new Error("Error while rendering");
//   //  this will let all component got affected if we dont define error boundaries .
//   //  so therefore define a errorboundary class and then bound the card1 by error boundary 
//       return <div style ={{background :"red" , borderRadius: 20 , padding : 20}}>
//         hi there
//       </div>
// }

// function Card2(){
//       return <div style ={{background :"red" , borderRadius: 20 , padding : 20}}>
//         hi there 2
//       </div>
// }
// function App() {
  
//   return <div>
//     <card >
//       Hi there
//     </card>
//   </div>
  
// }


// function card({children}){
//   return <div style ={{background : "black" , borderRadius : 10 , color:"white"}}> 
//   {children} 
//   </div>
// }




// return <div>
//     <button onClick={function(){
//       setcurrenttab("feed")
//     }} style = {{color : currenttab =="feed" ? "red" : "black"}}>Feed</button>
//     <button onClick={function(){
//       setcurrenttab("notification")
//     }}  style = {{color : currenttab =="notification" ? "red" : "black"}}>Notifications</button>
//     <button onClick={function(){
//       setcurrenttab("messages")
//     }}  style = {{color : currenttab =="messages" ? "red" : "black"}}>Messages</button>
//     <button onClick={function(){
//       setcurrenttab("jobs")
//     }} style = {{color : currenttab =="jobs" ? "red" : "black"}}>Jobs</button>
//   </div>




// const [count , setcount] = useState(1);

//   function increasecount(){
//     setcount(count + 1);
//   }



  // return <div>
  //   <div style = {{display :"flex"}}>
  //     <div style = {{background: "red", borderRadius : "50" , width: 20 , height : 25 , paddingLeft:10 ,  paddingTop: 5 }}>
  //       {count}
  //     </div>
  //   </div>
  //   <img style = {{ cursor : "pointer"}}
  //   src={"https://img.icons8.com/?size=100&id=11642&format=png"}
  //    width ={40} />

  //    <button onClick = {increasecount}> Increase the count </button>
  // </div>

// const [posts , setposts] = useState([]);
//   const postComponent = posts.map(post => <PostComponent
//     name = {post.name}
//     subtitle = {post.subtitle}
//     time = {post.time}
//     image = {post.image}
//     description={post.description}
//   />)

//   function addPost(){
//     setposts([...posts,{
//       name :"Amit",
//       subtitle : "1000 followers",
//       time : "4m ago",
//       image : "https://media.licdn.com/dms/image/v2/D4D03AQGtQi41n3_WtA/profile-displayphoto-shrink_100_100/B4DZSrDt0XH0AY-/0/1738036666577?e=1770249600&v=beta&t=vT1-XFvg8GCpSaR_6a-IJUP0OdeUjA_282pBIcdv84k",
//       description : "hfsdoahgarjgr"
//     }])
//   }

//   return(
//     <div style ={{background : "#dfe6e9" , height:"100vh", }}>
//       <button onClick={addPost}>Add post</button>
//       <div style = {{display: "flex" , justifyContent : "center"}}>
//         <div>
//           {postComponent}
//         </div>
//       </div>
//     </div>
//   )

// the component isnt re-rendering
// because we havent used a state variable

// const ToggleMessage = () => {
//   let [notificationCount, setNotificationCount] = useState(0);

//   console.log("re-render");
//   function increment() {
//     setNotificationCount(notificationCount + 1);
//   }

//   return (
//       <div>
//           <button onClick={increment}>
//               Increase count
//           </button>
//           {notificationCount}
//       </div>
//   );
// };

export default App