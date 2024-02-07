import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Home = () => {
  const [name,setName] = useState("")
  const [stack,setStack] = useState("")
  const [auth,setAuth] = useState(false);
  const TokenData = JSON.parse(localStorage.getItem("token")) || null

  const navigate = useNavigate()

  function submit(){
    if(name =="" || stack==""){
      return alert("please complete the sentence!")
    } 
    else if(TokenData == null){
      alert("pls login First!")
      navigate("/")
    }
    else if(TokenData != null){
      setAuth(true)
      return alert("test submitted successfully!")
      
    }
    
  }

  if(auth){
    return <div>
      <h2>Hello, My name is{name}</h2>
      <h3>My specializaion is in {stack}!</h3>
    </div>
  }

  return (
    <div>
      <h2>Test Assignment</h2>
      <div>
        <p>Hello, My name is <input onChange={(e)=>setName(e.target.value)} type="text"/></p>
        <p>I specialize in _{stack}_ as following shown, and this is my test submission</p>
      </div>
      <div>
        <img onClick={()=>setStack("React")} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbo3UbmjIGkOFLtTD4QDsSpfGq5z1PfbEYVA&usqp=CAU" alt="" />
        <img onClick={()=>setStack("Github")} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxR6bTKhfB_ugJHmzMMe_NJU3PWy-4K3T5Hw&usqp=CAU" alt="" />
        <img onClick={()=>setStack("Apple")}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7To-FmTYPtCGTsHdr6FHTDMB7VO3LZ1Dr0g&usqp=CAU" alt="" />
        <img onClick={()=>setStack("PlayStore")}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR4IPUzioXw5_IX3vROuWQwqHeePJ0_qFYWg&usqp=CAU" alt="" />
      </div>
      <br />
      <button onClick={submit}>SUBMIT</button>
    
    </div>
  )
}

export default Home