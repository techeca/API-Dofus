import express from 'express';
import { getMonsters, getMonsterById } from '../controllers/monster.js'
//import { Pet } from '../models/pets.js';

export const monsterRouter = express.Router();

//api.get('/pets', getPets)
/**
 * @swagger
 * /monsters:
 *   get:
 *     description: Retorna todos los monstruos más sus detalles.
 *     tags: [Monsters]
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: OK
 */
monsterRouter.get('/monsters', getMonsters);

/**
 * @swagger
 * /monsters/{ankama_id}:
 *   get:
 *     description: Retorna detalles de monstruo más información relacionada.
 *     tags: [Monsters]
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
monsterRouter.get('/monsters/:id', getMonsterById);
