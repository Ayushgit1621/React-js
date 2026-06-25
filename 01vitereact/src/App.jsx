import Chai from './chai'

function App() {
  

  return (
  // here we can just return a single component so we could wrap it in a div or React fragment
    /* <div>
      <h1>Welcome to React</h1>
      <Chai />
    </div> */

     // this could be done, but it is not a good practice to return multiple components without wrapping them in a div or React fragment so now instead of div we return it thru React fragment

    <>
      <h1>Welcome to React</h1>
      <Chai />
    </>
   
  )
}
// Name of the function Chai () should be capitalized to follow React component naming conventions.
export default App

