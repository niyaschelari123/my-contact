import React,{useState,useEffect} from 'react'
import {Link} from "react-router-dom";

import axios from "axios"; 
import "./Home.css";
import Searchbar from '../components/Searchbar';

function Home() {
    const [data,setData] = useState([]);
    const [search,setSearch] = useState("");
    const [display,setDisplay] = useState([]);

  console.log("search"+"- "+search);

  const filtered = data.filter((item)=>{
    if(search.value===""){
        return item;
    }
    if(item.name.toLowerCase().includes(search.toLowerCase()) || item.email.toLowerCase().includes(search.toLowerCase())){
        return item;
    }else{
        return console.log("not found");
    }
  })

    const loadData = async()=>{
        const response = await axios.get("http://localhost:5000/api/get");
        
        setData(response.data);
        setDisplay(response.data);
        
    }

    useEffect(()=>{
        loadData();
    },[]);
    console.log(data);



    const deleteContact=(id)=>{

        if(window.confirm("are you sure you want to delete this contact")){
    axios.delete(`http://localhost:5000/api/remove/${id}`);
    alert("Contact removed Successfully");
    setTimeout(()=>loadData(),500);
    }
    }

  return (
    
        
    <div style={{marginTop:"150px"}} >
        <Searchbar search={search} setSearch={setSearch} />
        
      <table className="styled-table">
        <thead>
            <tr>
                <th style={{textAlign:"center"}}>No.</th>
                <th style={{textAlign:"center"}}>Name</th>
                <th style={{textAlign:"center"}}>Email</th>
                <th style={{textAlign:"center"}}>Contact</th>
                <th style={{textAlign:"center"}}>Action</th>
            </tr>
        </thead>
        <tbody>
            {filtered.map((item,index)=>{
                return(
                    <tr key={item._id}>
                        <th scope="row">{index+1}</th>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.contact}</td>
                        <td>
                            <Link to={`/update/${item._id}`}>
                                <button className="btn btn-edit">Edit</button>
                            </Link>
                            <button className="btn btn-delete" onClick={()=>{
                                deleteContact(item._id)
                            }} >Delete</button>
                            <Link to={`/view/${item._id}`}>
                                <button className="btn btn-view">view</button>
                            </Link>
                        </td>
                    </tr>
                )

            })}
        </tbody>
      </table>
    </div>
    
  )
}

export default Home
