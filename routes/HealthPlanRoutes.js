import express from 'express'
import {
  getAllHealthPlans,
  getHealthPlanById,
  createHealthPlan,
  updateHealthPlan,
  deleteHealthPlan
} from '../controller/HealthPlanController.js'

const router = express.Router()

/**
 * @swagger
 * /healthplan:
 *   get:
 *     summary: Get all health plans
 *     tags: [Health Plans]
 *     responses:
 *       200:
 *         description: A list of health plans
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/HealthPlan'
 */
router.get('/healthplan', getAllHealthPlans)

/**
 * @swagger
 * /healthplan/{id}:
 *   get:
 *     summary: Get a health plan by ID
 *     tags: [Health Plans]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: A single health plan
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/HealthPlan'
 *       404:
 *         description: Health plan not found
 */
router.get('/healthplan/:id', getHealthPlanById)

/**
 * @swagger
 * /healthplan:
 *   post:
 *     summary: Create a new health plan
 *     tags: [Health Plans]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/HealthPlan'
 *     responses:
 *       201:
 *         description: Created health plan
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/HealthPlan'
 */
router.post('/healthplan', createHealthPlan)

/**
 * @swagger
 * /healthplan/{id}:
 *   put:
 *     summary: Update a health plan
 *     tags: [Health Plans]
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
 *             $ref: '#/components/schemas/HealthPlan'
 *     responses:
 *       200:
 *         description: Updated health plan
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/HealthPlan'
 *       404:
 *         description: Health plan not found
 */
router.put('/healthplan/:id', updateHealthPlan)

/**
 * @swagger
 * /healthplan/{id}:
 *   delete:
 *     summary: Delete a health plan
 *     tags: [Health Plans]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Health plan deleted
 *       404:
 *         description: Health plan not found
 */
router.delete('/healthplan/:id', deleteHealthPlan)

export default router