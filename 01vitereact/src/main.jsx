
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import {jsx as _jsx} from "react/jsx-runtime.js"

/* function MyApp(){
     return(
         <div>
            <h1>Custom App, function created inside main.jsx </h1>
        </div>
    )
 } */


/*  const ReactElement = {
    type : 'a',
    props: {
        href : 'https://www.amazon.com',
        target:'_blank',
    },
    children :'Click me to visit amazon'
} */

const anElement = (
    <a href='https://www.amazon.com' target='_blank'>Click me to visit amazon</a>   
)

const anotherUser =" JS variable injection after all tree implemented"

// Creating a React element 
const reactElement = React.createElement(
    'a', // tag type
    // props 
    {
        href : 'https://www.amazon.com',
        target:'_blank'
    },
    'Click me to visit amazon |',
    anotherUser  // this is the Js var injected at the end as inside object syntax 
)



ReactDOM.createRoot(document.getElementById('root')).render(
    // ReactElement // It wont work bcz the func expects a react element and not a object, so we need to convert this object into react element using React.createElement() method

    reactElement
    // anElement // this works bcz its an react element
   // <MyApp /> // it can also be written as  MyApp(), but not a good practice


   //<App />
   
  
)
