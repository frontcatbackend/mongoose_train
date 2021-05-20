const mongoose = require("mongoose");
const { Schema } = require("mongoose");

// const actorSchema = new Schema({
//    name: String,
//    country: String,
//    films: [{
//       type: Schema.Types.ObjectId,
//       ref: 'Film'
//    }]
// },
// {timestamps: true});

const actorSchema = new Schema(
  {
    name: String,
    country: {
      type: Schema.Types.ObjectId,
      ref: 'Country',
      required: true
   }
  },
  { timestamps: true }
);

actorSchema.virtual('filmsPublished', {
    ref: 'Film', //The Model to use
    localField: '_id', //Find in Model, where localField 
    foreignField: 'actor', // is equal to foreignField
 });

 actorSchema.set('toObject',{virtuals:true})
 actorSchema.set('toJSON',{virtuals:true})

module.exports = mongoose.model("Actor", actorSchema);
