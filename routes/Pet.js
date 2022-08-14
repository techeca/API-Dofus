import express from 'express';
import { getPets, getPetById } from '../controllers/pet.js'
//import { Pet } from '../models/pets.js';

export const petRouter = express.Router();

//api.get('/pets', getPets)
/**
 * @swagger
 * /pets:
 *   get:
 *     description: Retorna todas las mascotas más sus detalles.
 *     tags: [Pets]
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: OK
 */
petRouter.get('/pets', getPets);

/**
 * @swagger
 * /pets/{ankama_id}:
 *   get:
 *     description: Retorna detalles de mascota más información relacionada.
 *     tags: [Pets]
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
petRouter.get('/pets/:id', getPetById);
