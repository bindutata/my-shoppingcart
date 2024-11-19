import React from "react";
import { Route,Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Products from "./Components/Products";
import CartPage from "./Components/CartPage";


function App() {
  return (
    <>
      <Products>
        <Navbar/>
        <Routes>
          <Route path="/CartPage" element={<CartPage/>}></Route>
        </Routes>
      </Products>
      
      

    </>
  );
};

export default App;
