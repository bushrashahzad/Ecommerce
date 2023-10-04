import * as React from 'react';
// import {useState} from "react";
import Box from '@mui/material/Box';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Link} from "react-router-dom";
import TemporaryDrawer from './Cart'
function Navjar() {
  const [show,setShow] = React.useState(false)
    const Navj = 
    <>
    <Box sx={{ width: '100%' }}>
        <h1 style={{color: "white", backgroundColor:"#008080", marginTop: "0px",padding: "20px"}}>E-Store</h1>
        <div className="nav">
        <nav>
          <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link style={{marginLeft: "20px"}} to="/product">Product</Link></li>
        <li className="shoppingcart" style={{marginLeft: "1470px"}}><ShoppingCartIcon style={{ color: "white", fontSize:"40px"}} onClick={()=>{setShow(true)}} /> <TemporaryDrawer show={show} Close={()=>{setShow(false)}}/></li>
        <li><Link style={{marginLeft: "8px"}} to="/login"> {<AccountCircleIcon style={{fontSize:"40px",  color: "white"}}/>}</Link></li>
        </ul>
        </nav>
        </div>
    </Box>
    </>
  return (
    <div>
      {Navj}
    </div>
  )
}

export default Navjar;
