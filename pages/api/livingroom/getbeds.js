import Products from "../../../schema/products";
import dbConnect from "../../../utils/DBconnect";

dbConnect();
export default async function handler(req, res) {
  // const { page = 1, limit = 20 } = req.query;
  if (req.method === "POST") {
    
    const { value, method } = req.body;
    try {
      const getAllProducts = await Products.find({
        [method]: value,
        type: "livingRoom",
      });

      // const count = await Products.countDocuments({});
      // let totalPages = 0;

      // totalPages = count / limit;
      // let totalApprox = totalPages.toFixed(0);

      // if (totalPages > totalApprox) {
      //   totalPages = parseInt(totalApprox) + 1;
      // } else if (parseInt(totalPages) < parseInt(totalApprox)) {
      //   totalPages = totalApprox;
      // }

      res.status(200).json({ data: getAllProducts });
    } catch (err) {
      res.json({ success: false, data: err.message });
    }
  } else {
    res.json({ success: false, data: "POSt method missing" });
  }
}
