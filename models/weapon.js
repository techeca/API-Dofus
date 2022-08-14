import mongoose from 'mongoose';

const { Schema } = mongoose;

const WeaponSchema = Schema({
  ankamaId: Number,
  name: String,
  level: Number,
  type: String,
  imgUrl: String,
  url: String,
  description: String,
  conditions: [],
  statistics: [],
  characteristics: [],
  recipe: [],
  setId: String,
},
  {
    collection: 'weapons'
  }
);

export const Weapon = mongoose.model('Weapon', WeaponSchema)
