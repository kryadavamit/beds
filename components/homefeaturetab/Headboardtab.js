import React from 'react';
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import HeadboardBox from '../comps/HeadboardBox';
import { useRouter } from "next/router";

function Headboardtab({response}) {
    const router = useRouter();
    const [imageIndex,setImageIndex]=useState("0")
  
    return (
        <div>
            <div className="row">
            {
          response.map((item) =>{
              
              let product_color
                  switch(imageIndex){
                    case "0": product_color="Grey Linen";
                    break;
                    case "1": product_color="Grey Suede";
                    break;
                    case "2": product_color="Chenille";
                    break;
                    case "3": product_color="Black Crushed";
                    break;
                  }
              return(
                  <HeadboardBox
                   category={item.images[imageIndex].url}
                   src={item.images[0].url}
                   title={item.product_name}
                   price={item.price} 
                   size={item.size}
                   color={product_color}
                   />
              );
          })
      }

            </div>
        </div>
    )
}

export default Headboardtab;

