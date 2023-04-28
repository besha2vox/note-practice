const jwt = require('jsonwebtoken');
const { httpError } = require('../helpers');
const { User } = require('../db');
const { SECRET_KEY } = process.env;
const path = require('path');
const fs = require('fs').promises;
const jimp = require('jimp');

const register = async (req, res, next) => {
    const { name, email, password } = req.body;
    const user = await User.findOne({ email });

    if (user) {
        next(httpError(409, 'email in use'));
        return;
    }

    const newUser = new User({ name, email, password });
    await newUser.setPassword(password);
    newUser.save();

    const token = jwt.sign({ id: newUser._id }, SECRET_KEY);

    res.status(201).json({
        password: newUser.password,
        user: { name, email },
        token,
    });
};

const setAvatar = async (req, res, next) => {
    console.log({ avatar: req.file });
    const { path: temporaryName, originalname } = req.file;
    const storeDir = path.join(process.cwd(), 'public', 'avatars');
    const fileName = `${Date.now()}_${originalname}`;
    const avatarURL = path.join(storeDir, fileName);
    const image = await jimp.read(temporaryName);
    await image.resize(250, 250);
    await image.writeAsync(temporaryName);

    fs.rename(temporaryName, avatarURL);
    res.status(200).json({
        avatar: path.join('avatars', fileName),
    });
};

module.exports = { register, setAvatar };
