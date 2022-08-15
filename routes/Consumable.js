import express from 'express';
import { getConsumables, getConsumableById } from '../controllers/consumable.js'
//import { Pet } from '../models/pets.js';

export const consumableRouter = express.Router();

//api.get('/pets', getPets)
/**
 * @swagger
 * /consumables:
 *   get:
 *     description: Retorna todos los consumibles más sus detalles.
 *     tags: [Consumables]
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: OK
 */
consumableRouter.get('/consumables', getConsumables);

/**
 * @swagger
 * /consumables/{ankama_id}:
 *   get:
 *     description: Retorna detalles de consumibles más información relacionada.
 *     tags: [Consumables]
 *     produces:
 *       - application/json
 *     parameters:
 *      - in : path
 *        name: ankama_id
 *        type: integer
 *        required: true
 *        description: 12541
 *     responses:
 *       200:
 *         description: OK
 */
consumableRouter.get('/consumables/:id', getConsumableById);
