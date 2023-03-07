
const { Users } = require('../Model/UserModel')



exports.Read = async (req, res) => {

    const data = await Users.find();
    res.status(200).json(data);
};

exports.Single = async (req, res) => {
    const id = req.params.id;
    const data = await Users.findById(id);
    res.json(data)
}
exports.add = (req, res) => {
    // res.send("success")s
    const { name, email, phone } = req.body;
    new Users({
        name: name,
        email: email,
        phone, phone
    }).save().then((res) => {
        res.json(res)
    }).catch((err) => {
        res.send(err)
    })
};
exports.Update = async (req, res) => {
    const id = req.params.id;
    const data = await Users.findByIdAndUpdate({ _id: id }, req.body, { new: true });
    res.status(201).json(data);
};

exports.Delete = async (req, res) => {
    const id = req.params.id;
    const data = await Users.deleteOne({ _id: id })
    console.log(id)
    res.status(201).json(data)
}