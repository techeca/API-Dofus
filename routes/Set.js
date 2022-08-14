import express from 'express';
import { getSets, getSetById } from '../controllers/set.js'
//import { Pet } from '../models/pets.js';

export const setRouter = express.Router();

//api.get('/pets', getPets)
/**
 * @swagger
 * /sets:
 *   get:
 *     description: Retorna todos los sets más sus detalles.
 *     tags: [Sets]
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: OK
 */
setRouter.get('/sets', getSets);

/**
 * @swagger
 * /sets/{ankama_id}:
 *   get:
 *     description: Retorna detalles de set más información relacionada.
 *     tags: [Sets]
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
setRouter.get('/sets/:id', getSetById);
