import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./CartItems.module.scss";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

import { OffCanvasMenu } from "react-offcanvas";
import Checkout from "../checkout/ItemList";

function CartItems({ item, removeFromCartHandler, qtyHandler,size,bedColor,headboardColorName,mattressColorName,feetColorName,FeetPrice,price,StorageColorName,StoragePrice,headboardPrice,mattressPrice }) {
  const [qty, setQty] = useState(item.qty);
  const [total,settotal] = useState(item.total)

  

  const maxQty = 100;
  useEffect(() => {
    
    qtyHandler(item.product, qty , total);
  }, [qty]);
  function decreaseQty() {
    setQty(parseInt(qty) > 1 ? parseInt(qty) - 1 : parseInt(qty));
  }
  function increaseQty() {
    setQty(
      parseInt(qty) > 0 && qty < maxQty ? parseInt(qty) + 1 : parseInt(qty)
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.productDetails} style={{ cursor: "pointer" }}>
        <div>
          <p>{item.name}</p>
          <p><Checkout/></p>

          
          <h3>${item.price}</h3>
         
          <ul className="checkout-ul">  
                    <li> <span style={{color:"#000"}}> Bed Size = {size} </span></li>
                    <li> <span style={{color:"#000"}}>Bed Color = {bedColor} </span></li>
                    <li><span style={{color:"#000"}}>Storage = {StorageColorName} </span></li>
                    <li><span style={{color:"#000"}}>Storage-Price = <span style={{color:'red'}}>{StoragePrice}</span> </span></li>
                    <li><span style={{color:"#000"}}>Headboard = {headboardColorName} </span></li>
                    <li><span style={{color:"#000"}}>Headboard-Price = <span style={{color:'red'}}>{headboardPrice}</span> </span></li>
                    <li><span style={{color:"#000"}}>Feet = {feetColorName} </span></li>
                    <li><span style={{color:"#000"}}>Feet-Price = <span style={{color:'red'}}>{FeetPrice}</span> </span></li>
                    <li><span style={{color:"#000"}}>Mattressess = {mattressColorName} </span>
                    </li>
                    <li><span style={{color:"#000"}}>Mattressess-Price = <span style={{color:'red'}}>{mattressPrice}</span> </span></li>
  
  
                </ul>

         
          <div
            className="count-content"
            style={{
              height: 35,
              margin: "10px 0",
              background: "white",
              color: "black",
            }}
          >
            <span onClick={decreaseQty} style={{ cursor: "pointer" }}>
              <RemoveIcon fontSize="small" />
            </span>
            <select
              style={{ height: 35, background: "white", color: "black" }}
              value={qty}
              onChange={(e) => setQty(parseInt(e.target.value))}
            >
              {[...Array(maxQty).keys()].map((count) => (
                <option key={count + 1} value={count + 1}>
                  {count + 1}
                </option>
              ))}
            </select>
            <span onClick={increaseQty} style={{ cursor: "pointer" }}>
              <AddIcon fontSize="small" />
            </span>
          </div>
        </div>
        <Image src={item.images}  width="100" height="100" objectFit="contain" />
      </div>
      <div className={styles.buttons}>
        <button onClick={() => removeFromCartHandler(item.product)}>
          Remove
        </button>
        <button>Buy Now</button>
      </div>
    </div>
  );
}

export default CartItems;
