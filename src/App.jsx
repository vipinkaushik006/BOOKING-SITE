import { BrowserRouter as Router,Route,Routes } from "react-router-dom"
import SignIn from "./components/SignIn"
import SignUp from "./components/SignUp"
import Card from "./components/Card"
import Navbar from "./components/Navbar"
import Slidebar from "./components/Slidebar"
function App() {
  

  return (
    <>
    <Router>
      <Routes>
        <Route path="/SignIn" element={<SignIn/>}></Route>
        <Route path="/SignUp" element={<SignUp/>}></Route>
        <Route path="/Card" element={<Card/>}></Route>
        <Route path="/Navbar" element={<Navbar/>}></Route>
        <Route path="/Slidebar" element={<Slidebar/>}></Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
