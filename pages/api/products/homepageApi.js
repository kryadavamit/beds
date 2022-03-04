import { Category, ContactlessOutlined } from "@material-ui/icons";
import Products from "../../../schema/products";
import dbConnect from "../../../utils/DBconnect";

dbConnect();
export default async function handler(req, res) {
  const { page = 0, limit = 32, maxPrice, minPrice, size,images,category,image3,image4 } = req.query;
  if (req.method === "GET") {
    const payload = { type: "bed" }

    if (size && size !== "undefined") {
      Object.assign(payload, { size: size })
    }
    if (category&& category !== "undefined") {
      Object.assign(payload, { category: category })
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

//=================================================================================================================

// import Products from "../../../schema/products";
// import dbConnect from "../../../utils/DBconnect";

// dbConnect();
// export default async function handler(req, res) {
//   const { page = 1, limit = 12 } = req.query;
//   if (req.method === "POST") {
//     
//     const { value, method } = req.body;
//     try {
//       const getAllProducts = await Products.find({
//         [method]: value,
//         type: "bed",
//       }).skip(limit * page).limit(limit);

//       const count = await Products.countDocuments({
//         [method]: value,
//         type: "bed",
//       });
//       let totalPages = 0;

//       totalPages = count / limit;
//       let totalApprox = totalPages.toFixed(0);

//       if (totalPages > totalApprox) {
//         totalPages = parseInt(totalApprox) + 1;
//       } else if (parseInt(totalPages) < parseInt(totalApprox)) {
//         totalPages = totalApprox;
//       }

//       res.status(200).json({ data: getAllProducts, totalPages });
//     } catch (err) {
//       res.json({ success: false, data: err.message });
//     }
//   } else {
//     res.json({ success: false, data: "POSt method missing" });
//   }
// }
