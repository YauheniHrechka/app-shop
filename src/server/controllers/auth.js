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
                    userId: candidate._id,
                    email: candidate.email,
                }, keys.jwt, { expiresIn: 60 * 60 });

                res.status(200).json({
                    id: candidate._id,
                    email: candidate.email,
                    token: `Bearer ${token}`,
                    imageSrc: candidate.imageSrc
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
                password: bcrypt.hashSync(password, salt),
                imageSrc: req.file.path
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