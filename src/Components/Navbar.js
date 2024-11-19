import React,{useContext} from "react";
import "../StylePages/Navbar.css";
import {cartCountContext} from "./Products";
import {Link} from "react-router-dom";

export default function Navbar(){
    const {cartCount}=useContext(cartCountContext);
    console.log(cartCount);
    return(
        <>
            <div className="header" >
                <h2>My Shopping-Cart</h2>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/">Login</Link></li> 
                    <li><Link to="/CartPage">Cart(<span>{cartCount}</span>)</Link></li>
                </ul>
            </div>
        </>
    );
};