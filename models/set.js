import mongoose from 'mongoose';

const { Schema } = mongoose;

const SetSchema = Schema({
  ankamaId: Number,
  name: String,
  level: Number,
  type: String,
  imgUrl: String,
  url: String,
  bonus: [],
  equipment_id: [],
  weapon_id: String,
},
  {
    collection: 'sets'
  }
);

export const Set = mongoose.model('Set', SetSchema)
