const Good = require('../models/Good');

module.exports.getAll = async (req, res) => {
    try {
        const goods = await Good.find().select("_id modelNumber name brand url categoryId price");
        res.status(200).json(goods);
    } catch (e) { }
}

module.exports.getById = async (req, res) => {
    try {
        const good = await Good.findById(req.params.id);
        res.status(200).json(good);
    } catch (e) {
        console.log(e);
    }
}

module.exports.create = async (req, res) => {
    try {
        const good = new Good(req.body);
        await good.save();
        res.status(201).json(good);
    } catch (e) { }
}