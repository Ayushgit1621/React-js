import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  let counter=5
const addValue = ()=>{
  //counter = counter +1 ---This 
  console.log(counter);
  
}

  return (
  <>
  <h1>Ayush is here for counter project !!</h1>
  <h2>Counter value: {counter}</h2>

  <button onClick={addValue}
  >Increase Value {counter}</button>
  <br/><br/>
  <button>Decrease Value</button>
  <p>Footer :{counter}</p>
  
  </>
  )
}

export default App
