import mongoose from 'mongoose';

const { Schema } = mongoose;

const IdolSchema = Schema({
  ankamaId: Number,
  name: String,
  level: Number,
  type: String,
  imgUrl: String,
  url: String,
  description: String,
  statistics: [],
  recipe: [],
  spell: String,
},
  {
    collection: 'idols'
  }
);

export const Idol = mongoose.model('Idol', IdolSchema)
