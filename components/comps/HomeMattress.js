import React from 'react';
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import MattressBox from "./MattressBox";
import { useRouter } from "next/router";
import Image from "next/image";

function HomeMattress({response}) {
    const router = useRouter();
  
    return (
        <div>
            <div className="row">
            {
          response.map((item) =>{
              
              return(
                  <MattressBox
                   category={item.category}
                   src={item.images[0]}
                   title={item.product_name}
                   price={item.price} 
                   size={item.size}
                   />
              );
          })
      }

            </div>
        </div>
    )
}

export default HomeMattress;

