import express from 'express'
import {
  getAllImportance,
  getImportanceById,
  createImportance,
  updateImportance,
  deleteImportance
} from '../controller/ImportanceController.js'

const router = express.Router()

/**
 * @swagger
 * /importance:
 *   get:
 *     summary: Get all importance entries
 *     tags: [Importance]
 *     responses:
 *       200:
 *         description: A list of importance entries
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Importance'
 */
router.get('/importance', getAllImportance)

/**
 * @swagger
 * /importance/{id}:
 *   get:
 *     summary: Get an importance entry by ID
 *     tags: [Importance]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: A single importance entry
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Importance'
 *       404:
 *         description: Importance entry not found
 */
router.get('/importance/:id', getImportanceById)

/**
 * @swagger
 * /importance:
 *   post:
 *     summary: Create a new importance entry
 *     tags: [Importance]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Importance'
 *     responses:
 *       201:
 *         description: Created importance entry
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Importance'
 */
router.post('/importance', createImportance)

/**
 * @swagger
 * /importance/{id}:
 *   put:
 *     summary: Update an importance entry
 *     tags: [Importance]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Importance'
 *     responses:
 *       200:
 *         description: Updated importance entry
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Importance'
 *       404:
 *         description: Importance entry not found
 */
router.put('/importance/:id', updateImportance)

/**
 * @swagger
 * /importance/{id}:
 *   delete:
 *     summary: Delete an importance entry
 *     tags: [Importance]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Importance entry deleted
 *       404:
 *         description: Importance entry not found
 */
router.delete('/importance/:id', deleteImportance)

export default router