import { useState } from "react"
import { useNavigate } from "react-router-dom"
import toast, { Toaster } from 'react-hot-toast';
import "../App.css"

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
        <img onClick={()=>setStack("React")} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbo3UbmjIGkOFLtTD4QDsSpfGq5z1PfbEYVA&usqp=CAU" alt="" />
        <img onClick={()=>setStack("Github")} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxR6bTKhfB_ugJHmzMMe_NJU3PWy-4K3T5Hw&usqp=CAU" alt="" />
        <img onClick={()=>setStack("Apple")}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7To-FmTYPtCGTsHdr6FHTDMB7VO3LZ1Dr0g&usqp=CAU" alt="" />
        <img onClick={()=>setStack("PlayStore")}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR4IPUzioXw5_IX3vROuWQwqHeePJ0_qFYWg&usqp=CAU" alt="" />
      </div>
      <br />
      <button className="submit" onClick={submit}>SUBMIT</button>
      <Toaster/>
      
    </div>
  )
}

export default Home