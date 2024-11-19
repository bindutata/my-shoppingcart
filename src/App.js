import React from "react";
import { Route,Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Products from "./Components/Products";
import CartPage from "./Components/CartPage";
import {ProductsList} from "./Components/ProductsList";


function App() {
  return (
    <>
      <Products>
        <Navbar/>
        <Routes>
          <Route path="/" element={<ProductsList/>}></Route>
          <Route path="/CartPage" element={<CartPage/>}></Route>
        </Routes>
      </Products>
      
      

    </>
  );
};

export default App;
