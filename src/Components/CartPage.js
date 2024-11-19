import { useContext } from "react";
import {cartCountContext} from "./Products";

const CartPage=()=>{
    const {cartItems}=useContext(cartCountContext);
    console.log(cartItems);
    
    return(
        <>
            {cartItems.map((item)=>(
                <table className="cartitems" key={item.id}>
                    <tr>
                        <td><img src={item.image_url} alt={item.name}/></td><nbsp></nbsp>
                        <td>{item.name}</td><nbsp></nbsp>
                        <td>${item.price}*{item.quantity}</td><nbsp></nbsp>
                        <td>${item.price*item.quantity.toFixed(2)}</td>
                    </tr>
                </table>
            ))}
            
        </>
    );
};
export default CartPage;