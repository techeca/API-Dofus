import mongoose from 'mongoose';
import { startServer } from './server.js'

const userMongo = process.env.USER_DB;
const passMongo = process.env.PASSWORD_DB;
const hostDBMongo = process.env.HOST_DB;
const nameDB = process.env.NAME_DB;
const uri = `mongodb+srv://${userMongo}:${passMongo}@${hostDBMongo}/${nameDB}?retryWrites=true&w=majority`

await mongoose.connect(uri).then(() => {
  console.log('La conexión con la base de datos se ha establecido correctamente')
  startServer()
}).catch((err) => {
  console.log('Error con la base de datos: '+err)
})
