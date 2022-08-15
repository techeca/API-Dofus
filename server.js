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
const host = process.env.HOST_FRONT;
const port = process.env.PORT_API;

const swaggerOpt = {
  definition:{
    //swagger: '2.0',
    openapi: '3.0.0',
    info: {
      title: 'Dofus API',
      version: '1.0.0',
      description: 'Idioma: Español'
    },
    //explorer:true,
    //host: 'miweb.undominio'
    //basePath: '/v2',
  },
  apis: ['./routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(swaggerOpt)

export function startServer(){
  app.listen(port, () => {
    console.log(`Dofus API listening on port ${port}`)
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
    app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec, {explorer: false}));
    console.log('API ON');
    }
  )
}
