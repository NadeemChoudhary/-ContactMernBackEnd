const mongoose = require('mongoose');
const { Schema } = mongoose;

const UsersSchema = new Schema({
    name: { type: String, require: true },
    email: { type: String, require: true },
    phone: { type: Number, min: [10, "Not Valid"] }
});

const Users = mongoose.model("Users", UsersSchema);

module.exports = { Users }