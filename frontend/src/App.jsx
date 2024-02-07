
import './App.css'
import axios from "axios"
import AllRoutes from './Routes/AllRoutes'
import Navbar from './Routes/Navbar'
axios.defaults.baseURL = "http://localhost:8000/"

function App() {

  return (
    <div>
      <Navbar/>
      <AllRoutes/>
    </div>
  )
}

export default App
