import mongoose from 'mongoose';

const { Schema } = mongoose;

const MonsterSchema = Schema({
  ankamaId: Number,
  name: String,
  level: Number,
  type: String,
  imgUrl: String,
  url: String,
  statistics: [],
  resistances: [],
  areas: [],
  drops: [],
},
  {
    collection: 'monsters'
  }
);

export const Monster = mongoose.model('Monster', MonsterSchema)
