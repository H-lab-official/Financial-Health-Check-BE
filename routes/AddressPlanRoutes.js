import express from 'express';
import {
  addAddressPlans,
  getAllAddressPlans,
  getAddressPlanById,
  deleteAddressPlan,
} from '../controller/AddressPlanController.js';

const router = express.Router();

/**
 * @swagger
 * /addressplan:
 *   get:
 *     summary: Get all address plans
 *     tags: [Address Plans]
 *     responses:
 *       200:
 *         description: A list of address plans
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/AddressPlan'
 */
router.get('/addressplan', getAllAddressPlans);

/**
 * @swagger
 * /addressplan/{id}:
 *   get:
 *     summary: Get an address plan by ID
 *     tags: [Address Plans]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The address plan ID
 *     responses:
 *       200:
 *         description: The address plan description by ID
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AddressPlan'
 *       404:
 *         description: Address plan not found
 */
router.get('/addressplan/:id', getAddressPlanById);

/**
 * @swagger
 * /addressplan:
 *   post:
 *     summary: Add new address plans
 *     tags: [Address Plans]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               plans:
 *                 type: array
 *                 items:
 *                   type: string
 *                 example: ['/view/protectionplan/4206b125-ecd0-4c7e-baa9-9b02c67b6567', '/view/healthplan/ef4bcbca-591b-47bc-840f-5bd770c68449']
 *     responses:
 *       201:
 *         description: The address plans were successfully created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *       400:
 *         description: Invalid input
 */
router.post('/addressplan', addAddressPlans);

/**
 * @swagger
 * /addressplan/{id}:
 *   delete:
 *     summary: Delete an address plan by ID
 *     tags: [Address Plans]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The address plan ID
 *     responses:
 *       204:
 *         description: Address plan deleted successfully
 *       404:
 *         description: Address plan not found
 */
router.delete('/addressplan/:id', deleteAddressPlan);

export default router;
