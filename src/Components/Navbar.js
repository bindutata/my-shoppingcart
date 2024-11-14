import React,{useContext} from "react";
import "../StylePages/Navbar.css";
import {cartCountContext} from "./Products";

export default function Navbar(){
    const cartCount=useContext(cartCountContext);
    
    
    return(
        <>
            <div className="header" >
                <h2>My Shopping-Cart</h2>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Login</a></li>
                    <li><a href="/">Cart(<span>{cartCount}</span>)</a></li>
                </ul>
            </div>
        </>
    )
}