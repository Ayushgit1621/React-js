import Chai from './chai'

function App() {

  // write all the other expression and codes here outside the return, cant inject the complete JS codes inside return  
const username = "Inserting JS variable in JSX"


  return (
  // here we can just return a single component so we could wrap it in a div or React fragment
    /* <div>
      <h1>Welcome to React</h1>
      <Chai />
    </div> */

     // this could be done, but it is not a good practice to return multiple components without wrapping them in a div or React fragment so now instead of div we return it thru React fragment


     // we can also insert JS variable in JSX by using {} curly braces (this is evaluated expression the final value to pass on)
    <>
      <h1>Welcome to React | {username}</h1>
      <Chai />
      <p>Test code here in para !!</p>
      
    </>
   
  )
}
// Name of the function Chai () should be capitalized to follow React component naming conventions.
export default App

