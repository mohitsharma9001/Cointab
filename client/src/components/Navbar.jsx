import React from 'react'
import { AppBar, Toolbar, styled, } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  const [fetching,setFetching] = React.useState(false);

  const Navbar = styled(AppBar)`
    background : #111111;
    `
  const Tabs = styled(NavLink)`
    margin-left : 20px;
    color : white;
    font-size : 20px;
    text-decoration : none;
    `


  const getUserData = () => {
    if(fetching){
      alert("fetching already going on");
    }else{
      setFetching(true);
      fetch(`https://randomuser.me/api/?results=10`)
      .then((res) => {
          console.log(res)
          return res.json()
        })
  
        .then((res) => handleData(res.results))
        .catch((err)=>console.log(err))
        .finally(()=>setFetching(false))
    }
   
  }


  const handleData = (user) => {

     fetch(`http://localhost:8000/user/add`, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json"
      }
    })
  }

  const dleateData = ()=>{
    fetch(`http://localhost:8000/user/all`, {
      method: "DELETE"
    })
  
  }




  return (
    <div style={{ display: "flex" }}>
      <Navbar position='static' >
        <Toolbar>
          {/* <button  to>Fetch Data</button> */}
          <Tabs to="/" onClick={getUserData}>Fetch Data</Tabs>
          <Tabs to="/" onClick={dleateData}>Delete Data</Tabs>
          <Tabs to="/userDetails">User Details</Tabs>

        </Toolbar>

      </Navbar>
    </div>
  )
}