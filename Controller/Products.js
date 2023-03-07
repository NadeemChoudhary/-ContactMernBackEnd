const data = require('../Data/data');
const { Products } = require('../Model/ProductModel');
// const Products = ProductsSchema.Products;
// const Users = ProductsSchema.Users;
exports.ReadProduct = async (req, res) => {
    const data = await Products.find();
    console.log(data)
    res.json(data);
}
exports.singleProducts = (req, res) => {
    const ID = +req.params.id;
    // console.log(ID)
    const Singledata = data.find((data) => data.id === ID);
    res.json(Singledata)
};
exports.add = async (req, res) => {
    const { title, description, price, discountPercentage, brand, rating } = req.body;
    await new Products({
        title,
        description,
        price,
        discountPercentage,
        brand,
        rating
    }).save().then(res => {
        res.send("success")
    }).catch(err => {
        res.send(err)
    });
};
exports.Update = (req, res) => {
    const id = +req.params.id;
    const TargetData = data.findIndex(p => p.id === id)
    data.splice(TargetData, 1, { id: id, ...req.body })
    res.send("SuccessFull")
}
exports.Reupdate = (req, res) => {
    const id = +req.params.id;
    const TargetData = data.findIndex(p => p.id === id)
    const product = data[TargetData];
    const UpdateData = data.splice(TargetData, 1, { ...product, ...req.body })
    console.log(UpdateData)
};
exports.Delete = (req, res) => {
    const id = +req.params.id;
    const DeleteIndex = data.findIndex(p => p.id === id);
    console.log(DeleteIndex)
    data.splice(DeleteIndex, 1)
    res.send('Success')
}