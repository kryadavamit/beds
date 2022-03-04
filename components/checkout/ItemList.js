
import React, { Component, useState } from "react";
import { OffCanvas, OffCanvasMenu, OffCanvasBody } from "react-offcanvas";
import Image from "next/image/";
import { Category } from "@material-ui/icons";



export default function Checkout({addToCartHandler, price  ,title, base_price,size ,type, bedColor,sofaColor,StorageColorName,StoragePrice,headboardColorName,headboardPrice,feetColorName,FeetPrice, mattressColorName,mattressPrice ,woodColor, cushionColor }) {
    


//   componentWillMount() {
//     // sets the initial state
//     this.setState({
//       isMenuOpened: false
//     });
//   }



 
    return (
    
      
        <OffCanvasMenu  className="items-cart">
        
          <h3>{title}-(£{base_price})</h3>

          {(() => {
  
  switch (type) {
     case 'beds':
         return (
          <div className="bg-white">
                <div className="checkout-text">
                <h4>Enjoy peace of mind by adding our guarantee to your purchase and we'll provide:</h4>
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
                <div>
                    <p>Find out here <a href="#" style={{color:"#000"}}>here</a> </p>
                </div>
                </div>
                
              
  
            </div>
         )
     case 'garden_furniture':
         return (
          <div className="bg-white">
          <div className="checkout-text">
          <h4>Enjoy peace of mind by adding our guarantee to your purchase and we'll provide:</h4>
          <ul className="checkout-ul">  
              <li> <span style={{color:"#000"}}> Wood Color = {woodColor} </span></li>
              <li> <span style={{color:"#000"}}>Cushion Color = {cushionColor} </span></li>

          </ul>
          <div>
              <p>Find out here <a href="#" style={{color:"#000"}}>here</a> </p>
          </div>
          </div>
        

      </div>
         )
         case 'headboard':
         return (
          <div className="bg-white">
          <div className="checkout-text">
          <h4>Enjoy peace of mind by adding our guarantee to your purchase and we'll provide:</h4>
          <ul className="checkout-ul">  
          <li> <span style={{color:"#000"}}> Headboard Size = {size} </span></li>
          <li> <span style={{color:"#000"}}>Headboard Color = {bedColor} </span></li>

          </ul>
          <div>
              <p>Find out here <a href="#" style={{color:"#000"}}>here</a> </p>
          </div>
          </div>
        

      </div>
         )
         case 'mattress':
           return (
            <div className="bg-white">
            <div className="checkout-text">
            <h4>Enjoy peace of mind by adding our guarantee to your purchase and we'll provide:</h4>
            <ul className="checkout-ul">  
            <li> <span style={{color:"#000"}}> Mattresses Size = {size} </span></li>
            </ul>
            <div>
                <p>Find out here <a href="#" style={{color:"#000"}}>here</a> </p>
            </div>
            </div>
          
  
        </div>
           )
           case 'livingroom':
            return (
             <div className="bg-white">
             <div className="checkout-text">
             <h4>Enjoy peace of mind by adding our guarantee to your purchase and we'll provide:</h4>
             <ul className="checkout-ul">  
             <li> <span style={{color:"#000"}}> product Name = {title} </span></li>
             </ul>
             <div>
                 <p>Find out here <a href="#" style={{color:"#000"}}>here</a> </p>
             </div>
             </div>
           
   
         </div>
            )


            case 'Sofa':
              return (
               <div className="bg-white">
               <div className="checkout-text">
               <h4>Enjoy peace of mind by adding our guarantee to your purchase and we'll provide:</h4>
               <ul className="checkout-ul">  
               <li> <span style={{color:"#000"}}> product Name = {title} </span></li>
               <li> <span style={{color:"#000"}}> Sofa Color = {sofaColor} </span></li>
               </ul>
               <div>
                   <p>Find out here <a href="#" style={{color:"#000"}}>here</a> </p>
               </div>
               </div>
             
     
           </div>
              )

              case 'diningset':
                return (
                 <div className="bg-white">
                 <div className="checkout-text">
                 <h4>Enjoy peace of mind by adding our guarantee to your purchase and we'll provide:</h4>
                 <ul className="checkout-ul">  
                 <li> <span style={{color:"#000"}}> product Name = {title} </span></li>
                 </ul>
                 <div>
                     <p>Find out here <a href="#" style={{color:"#000"}}>here</a> </p>
                 </div>
                 </div>
               
       
             </div>
                )

                case 'allbeds':
                  return (
                   <div className="bg-white">
                   <div className="checkout-text">
                   <h4>Enjoy peace of mind by adding our guarantee to your purchase and we'll provide:</h4>
                   <ul className="checkout-ul">  
                   <li> <span style={{color:"#000"}}> product Name = {product_title} </span></li>
                   </ul>
                   <div>
                       <p>Find out here <a href="#" style={{color:"#000"}}>here</a> </p>
                   </div>
                   </div>
                 
         
               </div>
                  )


                  case 'sleighbed':
                    return (
                     <div className="bg-white">
                     <div className="checkout-text">
                     <h4>Enjoy peace of mind by adding our guarantee to your purchase and we'll provide:</h4>
                     <ul className="checkout-ul">  
                     {/* <li> <span style={{color:"#000"}}> product Name = {product_title} </span></li> */}
                     <li> <span style={{color:"#000"}}> product Size= {size} </span></li>
                     <li> <span style={{color:"#000"}}> productColor = {bedColor} </span></li>
                     </ul>
                     <div>
                         <p>Find out here <a href="#" style={{color:"#000"}}>here</a> </p>
                     </div>
                     </div>
                   
           
                 </div>
                    )

                //  case 'ottoman':
                //       return (
                //        <div className="bg-white">
                //        <div className="checkout-text">
                //        <h4>Enjoy peace of mind by adding our guarantee to your purchase and we'll provide:</h4>
                //        <ul className="checkout-ul">  
                      
                //        <li> <span style={{color:"#000"}}> product Size= {size} </span></li>
                //        <li> <span style={{color:"#000"}}> productColor = {bedColor} </span></li>
                //        </ul>
                //        <div>
                //            <p>Find out here <a href="#" style={{color:"#000"}}>here</a> </p>
                //        </div>
                //        </div>
                     
             
                //    </div>
                //       )

     default:
         return (
           <div>No items Selected</div>
         )
  }

})()}


         

      
          <br/>
          <br/>

          <div className="check-price-box">
              <div className="container">
                  <div className="row">
                      <div className="col-md-5">
                      <h5>Basket total</h5>
                      </div>
                      <div className="col-md-7" >
                      <h4 style={{float:"right"}}>£{price}</h4>
                      </div>

                  </div>
                  


              </div>

          </div>
          <br/>
 
          
         </OffCanvasMenu>
     
    );
  }

 
