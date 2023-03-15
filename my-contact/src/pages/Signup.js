import React,{useEffect, useState} from 'react'
import { Link,useHistory } from 'react-router-dom';
import "./Login.css";
import axios from 'axios';


function Signup() {


  const history=useHistory();
  const [userName,setUserName] = useState("");
  const [password,setPassword] = useState("");
  const [name,setName] = useState("");

  const submitted =(e)=>{
    e.preventDefault();
    if(name && userName && password){
    axios.post("http://localhost:5000/signupdata",{
        name:name,
        userName:userName,
        password:password
    }).then((resp)=>{})
    .catch((err)=>{})
    alert("Signed up successfully");
    history.push("/login");
}else{
    alert("Please fill all fields");
}
  }
 
  return (
    <>
    <h1 id="tt">Sign up</h1>
    <form onSubmit={submitted}>
  <div className="outer">
  <input type="text" className="aa" id="namefield" placeholder="Enter Name" value={name} onChange={(e)=>{setName(e.target.value)}} />
    <input type="text" className="aa" id="usern" placeholder="Enter userName" value={userName} onChange={(e)=>{setUserName(e.target.value)}} />
    <input type="password" className="aa" id="passw" placeholder="Enter password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
    <div className="bottom">
      <span id="spone">Already have an account ?
      <Link style={{textDecoration:"none"}} to='/login'><span id="sptwo"> Login Now</span></Link></span>
      <button id="log-in" >Signup</button>
    </div>
  </div>  
  </form>
  </>





)
}

export default Signup