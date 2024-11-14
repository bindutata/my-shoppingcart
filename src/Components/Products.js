import React,{useState,createContext} from "react";
import "../StylePages/Products.css";


export const cartCountContext=createContext();
export const Products=({children})=>{
    const [cartItems,setcartItems]=useState([]);
    const [cartCount,setcartCount]=useState(0);
    
    
    const products=[
        {
          "id": 1,
          "name": "Chocolate Cake",
          "description": "Rich and moist chocolate cake with a creamy chocolate frosting.",
          "price": 15.99,
          "image_url": "../assets/chocolate cake.jpg"
        },
        {
          "id": 2,
          "name": "Vanilla Sponge Cake",
          "description": "Light and fluffy vanilla sponge cake with vanilla cream filling.",
          "price": 12.99,
          "image_url": "../assets/Vanilla-Sponge cake.jpg"
        },
        {
          "id": 3,
          "name": "Strawberry Shortcake",
          "description": "Sweet strawberry shortcake topped with whipped cream and fresh strawberries.",
          "price": 18.49,
          "image_url": "../assets/strawberry.jpg"
        },
        {
          "id": 4,
          "name": "Lemon Pound Cake",
          "description": "Tangy lemon-flavored pound cake with a lemon glaze.",
          "price": 14.99,
          "image_url": "../assets/Lemon-Cake.jpg"
        },
        {
          "id": 5,
          "name": "Red Velvet Cake",
          "description": "Moist red velvet cake with cream cheese frosting.",
          "price": 19.99,
          "image_url": "../assets/Red-Velvet-Cake-8.jpg"
        },
        {
          "id": 6,
          "name": "Carrot Cake",
          "description": "Spicy carrot cake with walnuts and cream cheese frosting.",
          "price": 16.99,
          "image_url": "../assets/carrot-cake-4.jpg"
        },
        {
          "id": 7,
          "name": "Black Forest Cake",
          "description": "Decadent chocolate cake layered with cherries and whipped cream.",
          "price": 20.99,
          "image_url": "../assets/Black-Forest-Cake.jpeg"
        },
        {
          "id": 8,
          "name": "Cheesecake",
          "description": "Creamy and smooth cheesecake with a graham cracker crust.",
          "price": 22.99,
          "image_url": "../assets/cheese cake.jpg"
        }
    ]

    const handleCartItem=(item)=>{
      const requiredItem=cartItems.find((pdt)=>pdt.id===item.id);
      if(!requiredItem){
        setcartItems([...cartItems,{...item,quantity:1}]); //add new property to an object{...obj,key:'value'}
        setcartCount((prevcartCount)=>prevcartCount+1);
    }}
    
    const handleDecrement=(item)=>{
      const requiredItem=cartItems.map((pdt)=>pdt.id===item.id);
      (requiredItem.quantity>1)?setcartItems([...cartItems,requiredItem.quantity-1]):
      setcartItems(requiredItem,...cartItems)&&setcartCount((prevcartCount)=>prevcartCount-1);
    };

    const handleIncrement=(item)=>{
      console.log(cartItems)
      const requiredItem=cartItems.map((pdt)=>pdt.id===item.id);
      setcartItems([...cartItems,requiredItem.quantity+1]);
    };
    
    
    return(
      <>
        <cartCountContext.Provider value={cartCount}>
          {children}
        </cartCountContext.Provider>
            <div className="top-items">
                {products.map((item,index)=>(
                    <div key={item.id} className="card">
                        <img src={item.image_url} alt={item.name}/>
                        <div className="description">{item.description}</div>
                        <div className="price">$ {item.price}</div>
                        <div  className="button">
                          {cartItems.find((pdt)=>pdt.id===item.id)?
                            <div className="quantity-control" style={{display:'flex',alignItems:'center'}}>
                              
                                <button className="quantity" onClick={()=>handleDecrement(item)}>-</button>
                                <div className="quantity">{cartItems[0].quantity}</div>
                                <button className="quantity" onClick={()=>handleIncrement(item)}>+</button>
                            </div>:
                            <button onClick={()=>handleCartItem(item)}>AddToCart</button>
                          

                          }  
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};
export default Products;