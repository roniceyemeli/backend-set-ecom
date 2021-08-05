const mongoose = require('mongoose')


const productSchema = new mongoose.Schema({
    name:{
        type: String,
        trim: true,
        required: true
    },
    price:{
        type: Number,
        trim: true,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    imageUrl:{
        type: String,
        required: true
    },
    quantityInStock:{
        type: Number,
        default:0
        // required:true
    }
}, {
    timestamps: true
})


module.exports = mongoose.model("Products", productSchema)