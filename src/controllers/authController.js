const jwt = require('jsonwebtoken');
const { User } = require('../models');
require ('dotenv').config();


exports.register = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.create({ email, password });
        res.status(201).json({message: 'User Created', userId: user.id});
    } catch (error) {
        next(error);
    }
}

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }
        const isValid = await user.comparePassword(password);
        if (!isValid) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '90d' });
        res.status(200).json({ token });
    } catch (error) {
        next(error);
    }
}

