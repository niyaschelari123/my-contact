import React,{useEffect, useState} from 'react'
import { Link,useHistory } from 'react-router-dom';
import "./Login.css";
import axios from 'axios';




function Login() {

    const history = useHistory();

    useEffect(()=>{
        fetch("http://localhost:5000/logindata")
        .then((resp)=>resp.json())
        .then((data)=>setLoginData(data))

    },[])
  
  const [userName,setUserName] = useState("");
  const [password,setPassword] = useState("");
  const [loginData,setLoginData] = useState([]);


  const submitted=(e)=>{
    e.preventDefault();
    const filterdata=loginData.filter((item)=>item.userName==userName);
    const userdata={...filterdata[0]};
    console.log(userdata);
    if(filterdata.length>0){
        localStorage.setItem("loginname",userdata.name);
        setTimeout(()=>window.location.replace("/"),500)
        
    }

  }
 
  return (
    <>
    <h1 id="tt">Sign in</h1>
    <form onSubmit={submitted} autocomplete="off">
  <div className="outer">
    <input type="text" className="aa" id="usern" placeholder="Enter userName" value={userName} onChange={(e)=>{setUserName(e.target.value)}} />
    <input type="password" className="aa" id="passw" placeholder="Enter password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
    <div className="bottom">
      <span id="spone">Don't have an account?
      <Link style={{textDecoration:"none"}} to='/signup'><span id="sptwo"> Register Now</span></Link></span>
      <button id="log-in" >Login</button>
    </div>
  </div>  
  </form>
  </>





)
}

export default Login