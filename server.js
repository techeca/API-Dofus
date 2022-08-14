import express from 'express';
import cors from 'cors';
import swaggerUI from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
import { petRouter } from './routes/Pet.js';
import { consumableRouter } from './routes/Consumable.js';
import { equipmentRouter } from './routes/Equipment.js'
import { harnessRouter } from './routes/Harness.js';
import { idolRouter } from './routes/Idol.js';
import { resourceRouter } from './routes/Resource.js';
import { setRouter } from './routes/Set.js';
import { weaponRouter } from './routes/Weapon.js';
import { monsterRouter } from './routes/Monster.js';
import { mountRouter } from './routes/mount.js';

const app = express();
const port = 8080;

const swaggerOpt = {
  explorer:true,
  definition:{
    swagger: '2.0',
    info: {
      title: 'Dofus API',
      version: '1.0.0',
      description: 'Simple API'
    },
    //host: ''
    //basePath: '',
  },
  apis: ['./routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(swaggerOpt)

export function startServer(){
  app.listen(port, () => {
    console.log(`Dofus API listening on port ${port}`)
    // API_KEY: ${process.env.API_KEY}
    //Por aqui debería ir middlewares
    console.log('CORS habilitado');
    app.use(cors());
    app.use(petRouter);
    app.use(consumableRouter);
    app.use(equipmentRouter);
    app.use(harnessRouter);
    app.use(idolRouter);
    app.use(resourceRouter);
    app.use(setRouter);
    app.use(weaponRouter);
    app.use(monsterRouter);
    app.use(mountRouter);
    console.log('Rutas cargadas');
    console.log('API ON');
    app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));
    }
  )
}
