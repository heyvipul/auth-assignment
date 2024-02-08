import { useState } from 'react'
import "../App.css"
import { useNavigate } from 'react-router-dom';
import axios from "axios"


const Login = () => {
    const[email,setEmail] = useState("john@gmail.com")
    const[password,setPassword] = useState("john123");
    const navigate = useNavigate()
    const TokenData = JSON.parse(localStorage.getItem("token")) || null  ;
    // console.log(TokenData);

    async function loginFun(e){
      e.preventDefault()
      // console.log(email,password);
      try {
        const response = await axios.post("/login",{
          email,
          password
        })
        const data = await response.data
        // console.log(data.token);
        localStorage.setItem("token",JSON.stringify(data.token))

        if(data.msg === "Login successfull!"){
          alert("Login successfull!")
          return navigate("/")
        }
        else if(data.msg === "User not exist!"){
          alert("User not exist!")
          return navigate("/signup")
        }
        else if(data.msg === "password not match"){
          alert("Password not match!")
        }
         
      } catch (error) {
        console.log(error);
        alert("something went wrong!")
      }
    }

    function logout() {
      localStorage.removeItem("token");
      alert("Logout successfull!")
      navigate("/")
    }  

  if(TokenData != null || TokenData != undefined){
    return <div className='btn'>
      <button className='btnn' onClick={logout}>Logout</button>
    </div>
  }
    
  return (
    <div>
        <h2>Login</h2>
        <form action="" id='form' onSubmit={loginFun}>
        
            <label htmlFor="">Email : </label>
            <input type="email"
             value={email} 
             onChange={(e)=>setEmail(e.target.value)} 
             placeholder='enter email' />

            <label htmlFor="">Password : </label>
            <input type="password"
             value={password}
             onChange={(e) => setPassword(e.target.value)}
             placeholder='enter password' /> <br />

             <button id='login'>Login</button>
        </form>

    </div>
  )
}

export default Login