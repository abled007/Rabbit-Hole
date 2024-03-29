const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const videoSchema = new mongoose.Schema({
    categories: [String],
    links: String,
    title: String,
    views: {type: Number, min: 1, default: 1},
},
    {timestamps: true}
);
const userSchema = new mongoose.Schema({
    googleID: String,
    name: String,
    email: String,
    video: [videoSchema]
},
    {timestamps:true}
);

const theUser = mongoose.model('theUser', userSchema);
const theVideo = mongoose.model('theVideo', videoSchema);
module.exports = {theUser, theVideo}
