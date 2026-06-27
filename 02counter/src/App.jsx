import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  let [counter, setCounter] = useState(5)  
  
  // We can give any value in the default (String,object,array,function, or any type of data)
  // Responsible for changes in state (means updating the change and propogating to the UI (DOM)) 
  // let counter=5 // we commented this bcz we gave value using hook (here it gets updated but doesnt get refleted in the UI)


const addValue = ()=>{
  // if(counter<20){
  //   setCounter(counter+1);
  // }
  setCounter(counter =>counter<20?counter+1:counter);// professional way 
  
   //console.log(counter);
  // counter = counter +1;//
}
const removeValue =()=>{
//  if(counter>0){
//     setCounter(counter-1);
//   }
  setCounter(counter =>counter>0?counter-1:counter);// more professional way 
  //console.log(counter);
}


  return (
  <>
  <h1>Ayush is here for counter project !!</h1>
  <h2>Counter value: {counter}</h2>

  <button onClick={addValue} 
  >Increase Value {counter}</button>
  <br/><br/>
  <button onClick={removeValue} 
  >Decrease Value</button>
  <p>Footer :{counter}</p>
  
  </>
  )
}

export default App
