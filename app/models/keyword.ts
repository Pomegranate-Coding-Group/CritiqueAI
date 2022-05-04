import mongoose from 'mongoose';

const keywordSchema = new mongoose.Schema({
    KeyName: String,
    KeyDesc: String,
    KeyLink: String,
    Tags: Array,
    Industry: String
});
console.log('mongoose models created');
let a = mongoose.models.Keyword || mongoose.model('Keyword', keywordSchema);
export default a;