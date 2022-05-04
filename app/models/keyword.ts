import mongoose from 'mongoose';

const keywordSchema = new mongoose.Schema({
    KeyName: String,
    KeyDesc: String,
    KeyLink: String,
    Tags: Array,
    Industry: String
})
console.log('mongoose models created')

module.exports = mongoose.models.Keyword || mongoose.model('Keyword', keywordSchema)