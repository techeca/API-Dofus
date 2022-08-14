import mongoose from 'mongoose';

const { Schema } = mongoose;

const MountSchema = Schema({
  ankamaId: Number,
  name: String,
  level: Number,
  type: String,
  imgUrl: String,
  url: String,
  statistics: [],
  howGet: String,
  cross: [],
  characteristic: [],
},
  {
    collection: 'mounts'
  }
);

export const Mount = mongoose.model('Mount', MountSchema)
