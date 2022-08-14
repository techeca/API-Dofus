import express from 'express';
import { getHarness, getHarnessById } from '../controllers/harness.js'
//import { Pet } from '../models/pets.js';

export const harnessRouter = express.Router();

//api.get('/pets', getPets)
/**
 * @swagger
 * /harness:
 *   get:
 *     description: Retorna todos los arreos más sus detalles.
 *     tags: [Harness]
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: OK
 */
harnessRouter.get('/harness', getHarness);

/**
 * @swagger
 * /harness/{ankama_id}:
 *   get:
 *     description: Retorna detalles del arreo más información relacionada.
 *     tags: [Harness]
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
harnessRouter.get('/harness/:id', getHarnessById);
