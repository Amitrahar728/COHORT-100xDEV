Make a reading of harkirat's react slides :
https://www.canva.com/design/DAGStTo7_1Y/H-uoNlkdJ2X4P3LbOME45Q/edit



-----------------------------------------------------

Back story : in 2013 facebook apni problem ko solve krne k liye ye library lekr ayyi usme notification update nhi hote the isliye kyunki vo pehle PHP use kr rhe the 


when we think about react :
we come out with jsx , state , components , static and dynamic websites , re rendering .

react is used in dynamic websites without refreshing the page changes take place on website nowadays but previously this take place upon refreshing .

react is just an easier way to write normal html /css its a new syntax , that under the hood gets converted to html/css/js.

react -> upon npm run build -> html/css/js
browser cannot even understand react components .


Dynamic website :  means upon scrolling or clicking html changes of the website.


-----------------------------------------------------

Why react ?

-> DOM manipulations are harder in the conventional way .
backbone.js , jquery came before react but after coming react they are  no more existing .


-----------------------------------------------------
Some dynamic website jargon :
for static you require only components but for dynamic both state and components .

-> state :
Things which change in our application . 


-> components : 
how to take a particular state and render it and update the html because of change in state .
A component return us a jsx not html conceptually  .
: Building blocks of interface which are used multiple times but with some different attributes .


JSX -> js XML (HTML LIKE CODE)
easily to write inside js 

-> re-render : change in a state trigger rendering a re-render represetn the actual dom being manipulated when the state changes 

-----------------------------------------------------

So in react we first build our components and the thing which changes in the component is said to be state .

in react we have no need to write re rendering logic if there is any change in state .

-----------------------------------------------------

Use State :

used to define new state variable .
Whenever there is a change in state .
The component is not able ot re-rendering without using state variable .


usestate returns you can array -> [true/false , function]


let[one , two ] = useState(true);


one is used for calling value 
two is used to change the state 

------------------------------------------------------

UseEffect hook :
manage side effects 
side effects ??
like starting clock like setinterval(count , 1000)
which is not connected with the react component anyhow .
they impact things outside the component itself.
Scenarios of side effects :
1.) fetching from an api 
2.) modifying dom manually 

wrap it inside the useEffect hook , 
useEffect(()=>{

}, [])


whenever any state variable is dependent on useEffect call then add it in dependent array of useEffect function. or change the function by not using  dependent variable .

How to use dependency array :
Anytime the dependency changes the particular user effect runs everytime 
useEffect(function(){

},[])


------------------------------------------------------
Children :
this prop allows you to pass element and component as props to other component.
-> if we give function with props if we give children name as prop we dont have to provide prop while calling in app function we can correctly wrap inside the function .


Like this : =

function App() {
  return <div>
    <card >
      Hi there
    </card>
  </div>
  
}


function card({children}){
  return <div style ={{background : "black" , borderRadius : 10 , color:"white"}}> 
  {children} 
  </div>
}


------------------------------------------------------
Lists and Keys :

Keys :
Unique keys are dedicated to each component rendering 
This make react  know about the change comfortably and optimize performance .

1.) performance downside and inconsistency 
2.) error in console 


-------------------------------------------------------
Inline styling :
Giving style in css in the tag itself by using {{}} and can also explicitly define the style outside and use it inside as a object . 


like in this :

function card({children}){
return <div style ={{background : "black" , borderRadius : 10 , color:"white"}}> 
{children} 
</div>
}

Explicitly defined :


component = {background : "black" , borderRadius : 10 , color:"white"}
function card({children}){
    return 
    <div style ={component}> 
        {children} 
    </div>
}



-------------------------------------------------------
Class based vs functional components 
The functions we wrote till now are functional 

Class based :
Everything done  by class based can be done by functional components but today for easy explanation we define functional components . 
Cannot use hooks here like useState .



difference
1.)  State intialization 
const [count, setcount] = useState(0);
state ={coutn:0}; <- class based 

2..) functions :
function increment(
){

}
in class based :
increment = () =>{

}


3.) use of render instead of return in component


--------------------------------------------------------------------------
Lifecycle Events :

Whenever mounting or unmounting or updating we can run some particular event 
based upon mounting and unmounting lifecycle effects with help of useEffect based upon dependencies whenever needed to unmmount cna run specific code 

---------------------------------------------------------------------------
Error Boundary :
in this we have to use class based components 

Whenever something went wrong in your website you dont want to make all components got wrong so you define error boundaries of components



import React from 'react';

const App = () =>{
  
  return (
    <div>
      <ErrorBoundary>
         <Card1/>
      </ErrorBoundary>
      <ErrorBoundary>
         <Card2/>
      </ErrorBoundary>
    </div>
  );
 
};



class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        console.error("Error caught:", error, info);
    }

    render() {
        if (this.state.hasError) {
            return <h1 style = {{color : "red"}}>Something went wrong.</h1>;
        }

        return this.props.children; 
    }
}


function Card1(){

  //  if i throw an error here using :
   throw new Error("Error while rendering");
  //  this will let all component got affected if we dont define error boundaries .
  //  so therefore define a errorboundary class and then bound the card1 by error boundary 
      return <div style ={{background :"red" , borderRadius: 20 , padding : 20}}>
        hi there
      </div>
}

function Card2(){
      return <div style ={{background :"red" , borderRadius: 20 , padding : 20}}>
        hi there 2
      </div>
}


---------------------------------------------------------------------------

Fragments in React :
React expects that what react is delivering there should be single toplevel div , span or something as parent.

Instead of div or span just use fragments to get rid of parent make them individual children

use like this :
<>
</>
 
 or import Fragment from react above then use like
 <Fragment>
 </Fragment>

 So in this case we are just getting rid from a extra layer of div in simple execution.








 --------------------------------------------------------------------------
 