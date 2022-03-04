// import Products from "../../../schema/products";
// import dbConnect from "../../../utils/DBconnect";

// dbConnect();
// export default async function handler(req, res) {
//   if (req.method === "GET") {
//     const type = req.query.type;
//     const search = req.query.search;

//     let autocompletePayload = [
//       {
//         $search: {
//           compound: {
//             should: [
//               {
//                 autocomplete: {
//                   query: search,
//                   path: "product_name",
//                 },
//               },
//               {
//                 autocomplete: {
//                   query: search,
//                   path: "category",
//                 },
//               },
//               {
//                 autocomplete: {
//                   query: search,
//                   path: "size",
//                 },
//               },
//             ],
//           },
//         },
//       },
//       {
//         $limit: 6,
//       },
//       {
//         $project: {
//           _id: 1,
//           product_name: 1,
//           type: 1,
//         },
//       },
//     ];
//     if (type) {
//       let payload = [
//         {
//           $match: {
//             type: type,
//           },
//         },
//       ];
//       autocompletePayload.splice(1, 0, payload[0]);
//     }

//     
//     const autocomplete = await Products.aggregate([autocompletePayload]);

//     res.status(200).json(autocomplete);
//   } else {
//     res.status(500).json({ message: "GET query missing" });
//   }
// }


import Products from "../../../schema/products";
import dbConnect from "../../../utils/DBconnect";

dbConnect();
export default async function handler(req, res) {
  if (req.method === "GET") {
    const type = req.query.type;
    const search = req.query.search;

    let autocompletePayload = [
      {
        $search: {
          compound: {
            should: [
              {
                autocomplete: {
                  query: search,
                  path: "product_name",
                },
              },
              {
                autocomplete: {
                  query: search,
                  path: "category",
                },
              },
              {
                autocomplete: {
                  query: search,
                  path: "size",
                },
              },
            ],
          },
        },
      },
      {
        $limit: 9,
      },
      {
        $project: {
          _id: 1,
          product_name: 1,
          price:1,
          type: 1,
          images:1,
        },
      },
    ];
    if (type) {
      let payload = [
        {
          $match: {
            type: type,
          },
        },
      ];
      autocompletePayload.splice(1, 0, payload[0]);
    }

    
    const autocomplete = await Products.aggregate([autocompletePayload]);

    res.status(200).json(autocomplete);
  } else {
    res.status(500).json({ message: "GET query missing" });
  }
}
