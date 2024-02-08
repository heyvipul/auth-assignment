import { useState } from "react"
import { useNavigate } from "react-router-dom"
import toast, { Toaster } from 'react-hot-toast';
import "../App.css"
import react from "../images/images.png"
import apple from "../images/apple.jpg"
import github from "../images/github.png"
import playstore from "../images/playstore.png"

const Home = () => {
  const [name,setName] = useState("")
  const [stack,setStack] = useState("")
  const [auth,setAuth] = useState(false);
  const TokenData = JSON.parse(localStorage.getItem("token")) || null 

  const navigate = useNavigate()

  function submit(){
    if(name == "" || stack== ""){
      return toast.error('Test field incomplete!')
    } 
    else if(TokenData == null || TokenData == undefined ){
     toast.error('Please login first!') 
      return setTimeout(() => {
       navigate("/login")
     }, 4000);
     
    }
    else{
       toast.success('Test Submitted successfully!') 
       return setTimeout(() => {
        setAuth(true)
       }, 2000);
    }
    
  }


  

  if(auth){
    return <div className="test_sucess">
      <h2>Hello, My name is <span>{name}</span></h2>
      <h3>My specializaion is in <span>{stack}</span>!</h3>
    </div>
  }

  return (
    <div className="main_div">
      <h2>Test Assignment</h2>
      <div className="name">
        <p>Hello, My name is <input className="input" onChange={(e)=>setName(e.target.value)} placeholder="_____________" type="text"/></p>
        <p>I specialize in : <span>{stack}</span> as following shown, <br /> and this is my test submission</p>
      </div>
      <div className="second_div">
        <img onClick={()=>setStack("React")} src={react} alt="react.png" />
        <img onClick={()=>setStack("Github")} src={github} alt="github.png" />
        <img onClick={()=>setStack("Apple")}  src={apple} alt="apple.png" />
        <img onClick={()=>setStack("PlayStore")}  src={playstore} alt="play.png" />
      </div>
      <br />
      <button className="submit" onClick={submit}>SUBMIT</button>
      <Toaster/>
      
    </div>
  )
}

export default Home