import mongoose from 'mongoose';

const { Schema } = mongoose;

const PetSchema = Schema({
  ankamaId: Number,
  name: String,
  level: Number,
  type: String,
  imgUrl: String,
  url: String,
  description: String,
  statistics: [],
  conditions: [],
  setId: String,
},
  {
    collection: 'pets'
  }
);

export const Pet = mongoose.model('Pet', PetSchema)
