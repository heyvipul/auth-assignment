import {Route,Routes} from "react-router-dom"
import Home from "../components/Home"
import Signup from "../components/Signup"
import Login from "../components/Login"

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/signup' element={<Signup/>} />
            <Route path='/login' element={<Login/>} />
        </Routes>
    </div>
    
  )
}

export default AllRoutes