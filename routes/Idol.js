import express from 'express';
import { getIdols, getIdolById } from '../controllers/idol.js'
//import { Pet } from '../models/pets.js';

export const idolRouter = express.Router();

//api.get('/pets', getPets)
/**
 * @swagger
 * /idols:
 *   get:
 *     description: Retorna todos los idolos más sus detalles.
 *     tags: [idols]
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: OK
 */
idolRouter.get('/idols', getIdols);

/**
 * @swagger
 * /idols/{ankama_id}:
 *   get:
 *     description: Retorna detalles de idolo más información relacionada.
 *     tags: [idols]
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
idolRouter.get('/idols/:id', getIdolById);
