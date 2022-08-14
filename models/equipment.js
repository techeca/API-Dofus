import mongoose from 'mongoose';

const { Schema } = mongoose;

const EquipmentSchema = Schema({
  ankamaId: Number,
  name: String,
  level: Number,
  type: String,
  imgUrl: String,
  url: String,
  description: String,
  statistics: [],
  conditions: [],
  recipe: [],
  setId: String,
},
  {
    collection: 'equipments'
  }
);

export const Equipment = mongoose.model('Equipment', EquipmentSchema)
