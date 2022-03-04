import { ContactlessOutlined } from "@material-ui/icons";
import Products from "../../../schema/products";
import dbConnect from "../../../utils/DBconnect";

dbConnect();
export default async function handler(req, res) {
  const { page = 0, limit = 50, maxPrice, minPrice, size,images,type,image3,image4 } = req.query;
  if (req.method === "GET") {
    const payload = { type: ["bed","sleighbed","ottoman","allbeds","headboard","mattress","diningSet","gardenFurniture","livingRoom","sofa"] }

    if (size && size !== "undefined") {
      Object.assign(payload, { size: size })
    }

    if (type && type !== "undefined") {
      Object.assign(payload, { type: type })
    }
    if (maxPrice &&maxPrice!=="undefined" && minPrice &&minPrice !=="undefined") {
      Object.assign(payload, {
        price: {
          $gte: minPrice, $lte: maxPrice
        }
      })
    }

    if (images &&images!=="undefined"  ) {
      Object.assign(payload, {
        images: {
         image2:images[0].color1.base_url,image3:images[0].color2.base_url,
        }
      })
    }
    
    try {
      const checkDuplicate = new Set();

      let dynamicProducts = [];
      const arr = await Products.find(payload)
        .sort({ description: -1 })
        .skip(limit * page)
        .limit(limit);

      for (let i = 0; i < arr.length; i++) {
        if (i * 3 < arr.length) {
          dynamicProducts.push(arr[i * 2]);
        } else {
          dynamicProducts.push(arr[i - 1]);
        }
      }
      
      const filteredArr = await dynamicProducts.filter((el) => {
        const duplicate = checkDuplicate.has(el.product_name);
        checkDuplicate.add(el.product_name);
        return !duplicate;
      });

      res.status(200).json({ data: filteredArr ,payload:payload});
    } catch (err) {
      res.json({ success: false, data: err.message });
    }
  } else {
    res.json({ success: false, data: "GET method missing" });
  }
}


