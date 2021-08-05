const Products = require("../models/Product");

// filter, sorting and paginating
// class APIfeatures {
//   constructor(query, queryString) {
//     this.query = query;
//     this.queryString = queryString;
//   }
//   sorting() {
//     if (this.queryString.sort) {
//       const sortBy = this.queryString.sort.split(",").join(" ");
//       console.log(sortBy);
//       this.query = this.query.sort(sortBy)
//     }
//     else{
//       this.query = this.query.sort('-createdAt')
//     }
//     return this;
//   }

//   filtering() {
//     const queryObj = { ...this.queryString }; //queryString = req.query
//     // console.log({ before: queryObj });

//     const excludeFields = ["page", "sort", "limit"];
//     excludeFields.forEach((el) => delete queryObj[el]);

//     // console.log({after: queryObj})

//     let queryStr = JSON.stringify(queryObj);
//     queryStr = queryStr.replace(
//       /\b(gte|gt|lt|lte|regex)\b/g,
//       (match) => "$" + match
//     );

//     // console.log({queryStr})

//     this.query.find(JSON.parse(queryStr));

//     return this;
//   }

//   paginating() {
//     const page = this.queryString.page * 1 || 1
//     const limit = this.queryString.limit * 1 || 1
//     const skip = (page - 1) * limit;
//     this.query = this.query.skip(skip).limit(limit)
//     return this;
//   }
// }

const productCtrl = {
  getProducts: async (req, res) => {
    try {
      //     const features = new APIfeatures(Products.find(), req.query)
      //       .filtering()
      //       .sorting()
      //       .paginating();

      //     const products = await features.query;
      const products = await Products.find({});
      res.json(products);
      // or  res.json({
      //   status: 'success',
      //   result: products.length,
      //   products: products
      // });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },

  getProductsById : async (req, res) => {
    try {
      const product = await Products.findById(req.params.id);
      res.json(product);
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },

  addProducts: async (req, res) => {
    const { name, price, description, imageUrl } = await req.body;
    try {
      if (!imageUrl) return res.status(400).json({ msg: "no image uploaded" });
      const product = await Products.findOne({ name });
      if (product)
        return res.status(400).json({ msg: "product name exist already" });

      const newProduct = new Products({
        name: name.toLowerCase(),
        price,
        description,
        imageUrl,
      });

      await newProduct.save();

      res.json({ msg: "new product added" });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },

  deleteProducts: async (req, res) => {
    try {
      await Products.findByIdAndDelete(req.params.id);
      res.json({ msg: "product deleted" });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },

  updateProducts: async (req, res) => {
    try {
      // const { name, price, description, imageUrl } = req.body;
      // if (!imageUrl)
      //   return res.status(400).json({ msg: "you should upload an image :)" });

      await Products.findByIdAndUpdate(
        req.params.id, {...req.body}, {new: true}
        // { _id: req.params.id },
        // {
        //   name: name.toLowerCase(),
        //   price,
        //   description,
        //   imageUrl,
        // }
      );
      res.json({ msg: "product updated" });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
};

module.exports = productCtrl;


//  req.params.id,
//         { ...req.body },
//         { new: true }