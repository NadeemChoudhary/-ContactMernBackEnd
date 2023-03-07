
const mongoose = require("mongoose");

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb+srv://Learner:CKlczedLNJ6s7NBa@cluster0.jgv6fou.mongodb.net/Products');
    console.log("DataBase Connected")
}
