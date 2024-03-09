const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    }
});

userSchema.statics.login = async function (username, password) {
    if (!username || !password) {
        throw Error('Please enter username and password.')
    }

    const user = await this.findOne( { username });

    if (!user) {
        throw error('No user found with this username.');
    }

    return user;
}

module.exports = mongoose.model('User', userSchema);