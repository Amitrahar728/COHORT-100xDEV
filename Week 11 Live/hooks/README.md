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
how a function become hook :
if use is placed in suffix of it 
like useEffect , useState

Today , Custom hooks :-
We can create customhooks they can have some other hook inside themselves .

----------------------------------------------------
useFetch() :-
Whenever we are fetching anything from backend then we previously use useEffect in which we fetch from some url and then take it in some json state and then fetch where needed .

----------------------------------------------------
usePrev():-
this help us to get the previous value of rendering in react.

----------------------------------------------------
Debounce :-
Means if still you are typing on search bar the function waits for us for some time to stop and then do backend search .


----------------------------------------------------
