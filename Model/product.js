const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const product = new Schema({
    id: ObjectId,
    name: { type: String, maxlength: 100, required: true },
    vendor_id: ObjectId,
    price: { type: Number, required: true },
    image: { type: String },
    category: { type: String, required: true },
    description: { type: String },
    publisher: { type: String, required: true },
    amount: { type:Number, required: true },
    slug: { type: String, slug: 'name' },
    date: { type: Date },
    sales: { type: Number }
}, {
    timestamps: true
});

module.exports = mongoose.model('product', product);