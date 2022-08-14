import mongoose from 'mongoose';

const { Schema } = mongoose;

const ProfessionSchema = Schema({
  ankamaId: Number,
  name: String,
  level: Number,
  imgUrl: String,
  url: String,
  description: String,
  recipes: [],
  harvests: [],
},
  {
    collection: 'professions'
  }
);

export const Profession = mongoose.model('Profession', ProfessionSchema)
