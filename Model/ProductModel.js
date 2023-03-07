const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductsSchema = new Schema({
    title: String,
    description: String,
    price: Number,
    discountPercentage: Number,
    brand: String,
    rating: Number,
    category: String,
});

const Products = mongoose.model("Products", ProductsSchema);

module.exports = { Products }