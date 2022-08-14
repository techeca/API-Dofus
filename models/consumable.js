import mongoose from 'mongoose';

const { Schema } = mongoose;

const ConsumableSchema = Schema({
  ankamaId: Number,
  name: String,
  level: Number,
  type: String,
  imgUrl: String,
  url: String,
  description: String,
  statistics: [],
  recipe: [],
  toCraft: [],
},
  {
    collection: 'consumables'
  }
);

export const Consumable = mongoose.model('Consumable', ConsumableSchema)
