import express from 'express';
import { getEquipments, getEquipmentById } from '../controllers/equipment.js'

export const equipmentRouter = express.Router();

//api.get('/pets', getPets)
/**
 * @swagger
 * /equipments:
 *   get:
 *     description: Retorna todos los equipos (Sombrero, botas, capa, etc.) más sus detalles.
 *     tags: [Equipment]
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: OK
 */
equipmentRouter.get('/equipments', getEquipments);

/**
 * @swagger
 * /equipments/{ankama_id}:
 *   get:
 *     description: Retorna detalles del equipo más información relacionada.
 *     tags: [Equipment]
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
equipmentRouter.get('/equipments/:id', getEquipmentById);
