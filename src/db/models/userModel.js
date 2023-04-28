const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const { handleSaveError } = require('../../helpers');

const userSchema = new Schema(
    {
        name: {
            type: String,
            require: [true, 'name is require'],
        },
        email: {
            type: String,
            require: [true, 'name is require'],
        },
        password: {
            type: String,
            require: [true, 'name is require'],
        },
        avatar: String,
        // token: String,
    },
    { versionKey: false }
);

userSchema.post('save', handleSaveError);
userSchema.methods.setPassword = async function (password) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(password, salt);
};

userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

const User = model('users', userSchema);

module.exports = User;
