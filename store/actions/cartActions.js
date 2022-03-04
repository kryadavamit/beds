import * as actionTypes from "../constants/cartConstants";
import axios from "axios";

export const addToCart = (id, qty, color) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/products/${id}`);
  // const [ imageUrl,setimageUrl]=useState("images[0].color1.base_url")
  // const images=data.images
  //find id in cartItems
  const cartItems = getState().cart.cartItems;
  
  const item = cartItems.find((item) => item.product === id);
  

  // const item = cartItems.find((item) => item.id === id);
  // if (item) {

  
  let imageUrl;
  let bedColor = "color1";
  let cushionColor="0";
  let sofaColor="0";
 
  

  
  if (!color) {
    
  }

  const getColor = async () => {
    if (color) {
      switch (color) {
        case "Grey Linen": bedColor="color1";
              sofaColor="0";
       
         
          break;
        case ("Grey Suede"):
          
         
          (bedColor = "color2") &&
          (sofaColor="1");
         
         
          break;
        case "Chenille":  bedColor = "color3",
        sofaColor="2";
         
          break;
        case "Black Cotton": bedColor="color2";
        break;
        case "Cream": bedColor="color1";
        break;
        case "Charcoal": bedColor="color2";
        break;
        case "Black Crushed":
          bedColor = "color4";
          sofaColor="3";
          
          break;
        case "White": cushionColor="1";
          break;
        case "Cream": cushionColor="0";
        break;
        case "Blue": cushionColor="2";
        break;
        case "Black": cushionColor="3";
        break;
          
        

       
        default:
          bedColor = "color1";
         
      }
    }
  
  };
  await getColor();





  const getImage = async () => {
    switch (data.type) {
      case "bed":
        imageUrl = data.images[0][bedColor].base_url;

        break;
      case "allbeds":
        imageUrl = data.images[0][bedColor].base_url;
        break;
      case "sleighbed":
        imageUrl = data.images[0][bedColor].base_url;
        break;
      case "ottoman":
        imageUrl = data.images[0][bedColor].base_url;
        break;

      case "headboard":
        imageUrl = data.images[sofaColor].url;
        break;
      case "diningSet":
        imageUrl = data.images[0];
        break;
      case "mattress":
        imageUrl = data.images[0];
        break;
      case "livingRoom":
        imageUrl = data.images[0];
        break;
      case "sofa":
        imageUrl = data.images[sofaColor].url;
        break;

      case "gardenFurniture":
        imageUrl = data.images[cushionColor].url;
        break;
    }
  };
  await getImage();

  

  if (item) {
    dispatch({
      type: actionTypes.ADD_TO_CART,
      payload: {
        product: item.product,
        qty: qty ? qty : item.qty,
        color: item.color,
        price: item.price,
        name: item.name,
        images: item.images,
      },
    });
  } else {
    dispatch({
      type: actionTypes.ADD_TO_CART,
      payload: {
        product: data._id,
        name: data.product_name,
        images: imageUrl,
        price: data.price,
        bedSize: data.size,
        type: data.type,
        color: color,
        qty,
      },
    });
  }
  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: actionTypes.REMOVE_FROM_CART,
    payload: id,
  });
  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};
