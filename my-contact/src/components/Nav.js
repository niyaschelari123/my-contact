import {useLocation,Link} from "react-router-dom";
import "./Nav.css";
import {useEffect,useState} from "react";

const Layout = () => {
  const location=useLocation();
  console.log(location);
  const [name,setName] = useState("");

  useEffect(()=>{
    setName(localStorage.getItem("loginname")!=null?localStorage.getItem("loginname"):"");
    

  },[])

 

  return (
    <>
    <div className="navig">
      <nav>
        <ul>
        <Link  style={{textDecoration:"none",color:"red"}} to="/">
          <li className={location.pathname=="/"?"active":""} id="eda">
            Home
          </li></Link>
          <Link style={{textDecoration:"none",color:"red"}} to="/addContact">
          <li className={location.pathname=="/addContact"?"active":""}>
            Add Contact
          </li></Link>
          <Link style={{textDecoration:"none",color:"red"}} to={!name?"/login":""}>
          <li className={location.pathname=="/login"?"active":""} >
            {name?<span id="loginname" onClick={()=>{
              if(window.confirm("Are you sure to Logout")==true){
                localStorage.removeItem("loginname");
                setTimeout(()=>window.location.replace("/"),500);
              }
            }} >{name}</span>:
            "Sign in"}

          </li></Link>
          
        </ul>
      </nav>

      </div>
    </>
  )
};

export default Layout;