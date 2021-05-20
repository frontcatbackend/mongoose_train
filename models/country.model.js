const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const countrySchema = new Schema(
  {
    country_name: String,
  },
  { timestamps: true }
);

countrySchema.virtual('actorCountry', {
    ref: 'Actor',
    localField: '_id',
    foreignField : 'country'
})

countrySchema.set('toObject', {virtuals: true})
countrySchema.set('toJSON', {virtuals: true})

module.exports = mongoose.model("Country", countrySchema)