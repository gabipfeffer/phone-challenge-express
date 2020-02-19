const mongoose = require('mongoose');

const { Schema } = mongoose;

const phoneSchema = new Schema(
  {
    id: { type: String, required: true },
    name: { type: String, required: true, trim: true },
    manufacturer: { type: String, required: true, trim: true, lowercase: true },
    description: { type: String, required: true, trim: true },
    color: { type: String, required: true, trim: true, lowercase: true },
    price: { type: Number, required: true },
    imageFileName: { type: String, required: true, trim: true },
    screen: { type: String, required: true, trim: true },
    processor: { type: String, required: true, trim: true },
    ram: { type: String, required: true, trim: true }
  },
  {
    toJSON: {
      transform: (doc, ret) => {
        ret.id = doc._id;
        delete ret._id;
        delete ret.__v;
        return ret;
      },
      virtuals: true
    }
  }
);

const Phone = mongoose.model('Phone', phoneSchema);

module.exports = Phone;
