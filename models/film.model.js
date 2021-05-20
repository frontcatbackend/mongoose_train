const mongoose= require('mongoose');
const {Schema} = require('mongoose');

const filmSchema = new Schema({
   name: String,
   year: Number,
   actor: {
      type: Schema.Types.ObjectId,
      ref: 'Actor',
      required: true
   }
},
{timestamps: true});

module.exports = mongoose.model('Film', filmSchema);
