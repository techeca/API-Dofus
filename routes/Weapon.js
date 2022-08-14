import express from 'express';
import { getWeapons, getWeaponById } from '../controllers/weapon.js'
//import { Pet } from '../models/pets.js';

export const weaponRouter = express.Router();

//api.get('/pets', getPets)
/**
 * @swagger
 * /weapons:
 *   get:
 *     description: Retorna todas las armas más sus detalles.
 *     tags: [Weapons]
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: OK
 */
weaponRouter.get('/weapons', getWeapons);

/**
 * @swagger
 * /weapons/{ankama_id}:
 *   get:
 *     description: Retorna detalles de arma más información relacionada.
 *     tags: [Weapons]
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
weaponRouter.get('/weapons/:id', getWeaponById);
