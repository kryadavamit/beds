import Products from "../../../schema/products";
import dbConnect from "../../../utils/DBconnect";

dbConnect();
export default async function handler(req, res) {
  const { page = 0, limit = 50 } = req.query;
  if (req.method === "GET") {
    try {
      const checkDuplicate = new Set();

      let dynamicProducts = [];
      const arr = await Products.find({
        type: "allbeds",
      })
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

      res.status(200).json({ data: filteredArr });
    } catch (err) {
      res.json({ success: false, data: err.message });
    }
  } else {
    res.json({ success: false, data: "GET method missing" });
  }
}

