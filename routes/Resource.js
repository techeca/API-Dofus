import express from 'express';
import { getResources, getResourceById } from '../controllers/resource.js'
//import { Pet } from '../models/pets.js';

export const resourceRouter = express.Router();

//api.get('/pets', getPets)
/**
 * @swagger
 * /resource:
 *   get:
 *     description: Retorna todos los recursos más sus detalles.
 *     tags: [Resources]
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: OK
 */
resourceRouter.get('/resource', getResources);

/**
 * @swagger
 * /resource/{ankama_id}:
 *   get:
 *     description: Retorna detalles de recursos más información relacionada.
 *     tags: [Resources]
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
resourceRouter.get('/resource/:id', getResourceById);
