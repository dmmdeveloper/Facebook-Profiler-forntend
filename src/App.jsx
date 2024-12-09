import { BrowserRouter as Router , Routes, Route } from "react-router-dom"
import Home from "./Desktop/Home/Home"
import SignUp from "./Desktop/Sign up/SignUp"
function App(params) {

  return (<>  
  <Router>
    <Routes>

      <Route path="/" element= {<Home/>}/>
      
<Route path="/sign-up" element ={<SignUp/>} />


    </Routes>
  </Router>
  </>)
  
}

export default App
