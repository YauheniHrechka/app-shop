const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const keys = require('../config/keys');

module.exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const candidate = await User.findOne({ email });

        if (candidate) {
            const result = bcrypt.compareSync(password, candidate.password);
            if (result) {

                const token = jwt.sign({
                    email: candidate.email,
                    userId: candidate._id
                }, keys.jwt, { expiresIn: 60 * 60 });

                res.status(200).json({
                    token: `Bearer ${token}`
                });
            } else {
                res.status(401).json({
                    message: 'This password is incorrect.'
                });
            }

        } else {
            res.status(404).json({
                message: 'User not found. Try again.'
            });
        }
    } catch (e) { }
}

module.exports.registration = async (req, res) => {
    const { email, password } = req.body;

    try {
        const candidate = await User.findOne({ email });

        if (!candidate) {
            const salt = bcrypt.genSaltSync(10);
            const user = new User({
                email,
                password: bcrypt.hashSync(password, salt)
            });

            try {
                await user.save();
                res.status(200).json(user);
            } catch (e) { }

        } else {
            res.status(401).json({
                message: `This e-mail isn't unique.`
            });
        }
    } catch (e) { }
}