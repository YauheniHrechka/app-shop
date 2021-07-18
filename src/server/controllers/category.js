const Category = require('../models/Category');

module.exports.getAll = async (req, res) => {
    try {
        const categories = await Category.find().select("_id name");
        res.status(200).json(categories);
    } catch (e) { }
}

module.exports.create = async (req, res) => {
    try {
        const category = new Category(req.body);
        await category.save();
        res.status(201).json(category);
    } catch (e) { }
}