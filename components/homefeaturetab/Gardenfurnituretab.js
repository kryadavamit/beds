import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import GardenfurnitureBox from "../comps/GardenfurnitureBox";
import { useRouter } from "next/router";

function Gardenfurnituretab({ response }) {
  const router = useRouter();
  const [imageIndex,setImageIndex]=useState("0")
  
  return (
    <div>
      <div className="row">
        {response.map((item) => {
          
          let product_color
                  switch(imageIndex){
                    case "0": product_color="Cream";
                    break;
                    case "1": product_color="White";
                    break;
                    case "2": product_color="Blue";
                    break;
                    case "3": product_color="Black";
                    break;
                  }
          return (
            <GardenfurnitureBox
              src={item.images[imageIndex].url}
              title={item.product_name}
              price={item.price}
              category={item.category}
              color={product_color}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Gardenfurnituretab;
