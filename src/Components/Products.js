import React,{useState,createContext} from "react";
import "../StylePages/Products.css";
import {ProductsList} from "./ProductsList";


export const cartCountContext=createContext();

export const Products=({children})=>{
    const [cartItems,setcartItems]=useState([]);
    const [cartCount,setcartCount]=useState(0);

    

  const handleCartItem=(item)=>{
      const requiredItem=cartItems.find((pdt)=>pdt.id===item.id);
      if(!requiredItem){
        setcartItems([...cartItems,{...item,quantity:1}]); //add new property to an object{...obj,key:'value'}
        setcartCount((prevcartCount)=>prevcartCount+1);
    }};
    
  const handleDecrement=(item)=>{
    const requiredItem=cartItems.find((pdt)=>pdt.id===item.id);
    if (requiredItem.quantity>1){
      setcartItems((prevcartItems)=>prevcartItems.map((pdt)=>pdt.id===item.id?
      {...pdt,quantity:pdt.quantity-1}:pdt));
    }
    else{
      setcartItems((prevcartItems)=>prevcartItems.filter((pdt)=>pdt.id!==item.id));
      setcartCount((prevcartCount)=>prevcartCount-1);
    }
  } 
   
  const handleIncrement=(item)=>{
    setcartItems((prevcartItems)=>prevcartItems.map((pdt)=>pdt.id===item.id?{...pdt,quantity:
      pdt.quantity+1}:pdt));
    };
    
    return(
      <>
        <cartCountContext.Provider value={{cartCount,cartItems}}>
          {children}
        </cartCountContext.Provider> 
        <div className="top-items"> 
            {ProductsList.map((item)=>{
              const pdt=cartItems.find((pdt)=>pdt.id===item.id);
              return(
                <div key={item.id} className="card">
                    <img src={item.image_url} alt={item.name}/>
                    <div className="description">{item.description}</div>
                    <div className="price">$ {item.price}</div>
                    <div  className="button">
                      {pdt?
                        (<div className="quantity-control" style={{display:'flex',alignItems:'center'}}>
                            <button className="quantity" onClick={()=>handleDecrement(item)}>-</button>
                            <div className="quantity">{pdt.quantity}</div>
                            <button className="quantity" onClick={()=>handleIncrement(item)}>+</button>
                        </div>):
                        (<button onClick={()=>handleCartItem(item)}>AddToCart</button>)}
                    </div>
                  </div>
                  );
                })}
            </div>
               
        </>
        
    );
};
export default Products;