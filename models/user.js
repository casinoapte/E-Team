const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({

    email: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true, minlength: 5 },
    posts: { type: Array },
    drafts: { type: Array }

})

module.exports = User = mongoose.model("user", userSchema)


