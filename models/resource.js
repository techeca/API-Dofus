import mongoose from 'mongoose';

const { Schema } = mongoose;

const ResourceSchema = Schema({
  ankamaId: Number,
  name: String,
  level: Number,
  type: String,
  imgUrl: String,
  url: String,
  description: String,
  recipe: [],
},
  {
    collection: 'resources'
  }
);

export const Resource = mongoose.model('Resource', ResourceSchema)
