import mongoose from 'mongoose';

const { Schema } = mongoose;

const HarnessSchema = Schema({
  ankamaId: Number,
  name: String,
  level: Number,
  type: String,
  imgUrl: String,
  url: String,
  description: String,
},
  {
    collection: 'harness'
  }
);

export const Harness = mongoose.model('Harness', HarnessSchema)
