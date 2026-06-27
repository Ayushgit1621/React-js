import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App2(){
    let [counter,setCounter]= useState(5);
    
    const addValue = ()=> setCounter(counter+1);
    const removeValue = ()=> setCounter(counter-1);

    return (
    <>
    <h1>Ayush here for Counter Project</h1>
    <h2>Approach 2: through button disabled</h2>
    <h3>counter Value : {counter}</h3>
    <button onClick={addValue} disabled ={counter>=20} >Increase Value</button><br/><br/> 
    <button onClick={removeValue} disabled ={counter<=0} >Decrease Value</button>
    </>
)

}

export default App2