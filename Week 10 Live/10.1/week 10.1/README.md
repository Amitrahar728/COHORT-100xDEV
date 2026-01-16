# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.






---------------------------------------------------
Single page applications : SPA's
In multi-page applications when you click across various pages a fresh fetch happens with backend and page refreshes and got reloaded .
but in single page the html of the page changes no reload takes place .

---------------------------------------------------
Introduce routing in react
Defined easy to go using react-route-dom


----------------------------------------------------
Layout: for optimized code defining all the header middle and footer 




---------------------------------------------------
useRef :
is a hook that provide a way to create a reference to a value or a dom element 
Easy because we not have to deal with dom manipulation manually 

---------------------------------------------------
Rolling up the state :
when the state is defined in some another function and it is used in some other function for some change in state then the state is rolled up to LCA (last common ancestor ) , so the other can also access

----------------------------------------------------
Prop drilling :

when you need to pass data from a higher level component to lower level component in this case if there is some component which not use it because several level deep some component want to use it in that case we have to drill it down the prop 
think like a has two child b and c , c wants a prop and b children need a props but b dont need it then b will do prop drilling .
Instead of passing the parameters again and again through the parameter of different component and they dont even need it .

Solution are :
----------------------------------------------------
1.) Context API : Application programming interface .

This is a powerful feature for managing state in react and solving the problem of prop drilling .

Jargon :
Context : this is container of props we want to share using React.createContext() , define it outside the component

Provider : this component wraps part of your applicaiton and provide the context value to all the descendants . any component that is a child of this provider can access the context. 
means instead of transferring all the props use 
<Contextname.Provider>the context wrapped here can acess </Contextname.Provider>

consume : using useContext we can take props from value prop of contextname defined above in provider 


---------------------------------------------------
State Management library :
Recoil is one of them 
