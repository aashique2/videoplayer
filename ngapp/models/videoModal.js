const mongoose = require('mongoose');
const videoSchema = mongoose.Schema;

const newSchema = new videoSchema({
    title:String,
    url:String,
    publisher:String,
    description:String
});

module.exports = mongoose.model('videos',newSchema);