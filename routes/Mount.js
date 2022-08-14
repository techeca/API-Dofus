import express from 'express';
import { getMounts, getMountById } from '../controllers/mount.js'
//import { Pet } from '../models/pets.js';

export const mountRouter = express.Router();

//api.get('/pets', getPets)
/**
 * @swagger
 * /mounts:
 *   get:
 *     description: Retorna todas las monturas más sus detalles.
 *     tags: [Mounts]
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: OK
 */
mountRouter.get('/mounts', getMounts);

/**
 * @swagger
 * /mounts/{ankama_id}:
 *   get:
 *     description: Retorna detalles de montura más información relacionada.
 *     tags: [Mounts]
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
mountRouter.get('mounts/:id', getMountById);
