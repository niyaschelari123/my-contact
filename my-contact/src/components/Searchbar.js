import React from 'react'
import './Searchbar.css';
function Searchbar({search,setSearch}) {
  return (
    <div className="Searchbar">
      <input type="text" autocomplete="off" id="searchbox" value={search} style={{width:"20%"}} onChange={(e)=>setSearch(e.target.value)} placeholder="Enter name or Email address" />
      <img src="https://cdn-icons-png.flaticon.com/512/954/954591.png" />
    </div>
  )
}

export default Searchbar
