import express from 'express'
import {
  getAllRetirementPlans,
  getRetirementPlanById,
  createRetirementPlan,
  updateRetirementPlan,
  deleteRetirementPlan
} from '../controller/RetirementPlanController.js'

const router = express.Router()

/**
 * @swagger
 * /retirementplan:
 *   get:
 *     summary: Get all retirement plans
 *     tags: [Retirement Plans]
 *     responses:
 *       200:
 *         description: A list of retirement plans
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/RetirementPlan'
 */
router.get('/retirementplan', getAllRetirementPlans)

/**
 * @swagger
 * /retirementplan/{id}:
 *   get:
 *     summary: Get a retirement plan by ID
 *     tags: [Retirement Plans]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A single retirement plan
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/RetirementPlan'
 *       404:
 *         description: Retirement plan not found
 */
router.get('/retirementplan/:id', getRetirementPlanById)

/**
 * @swagger
 * /retirementplan:
 *   post:
 *     summary: Create a new retirement plan
 *     tags: [Retirement Plans]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/RetirementPlan'
 *     responses:
 *       201:
 *         description: Created retirement plan
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/RetirementPlan'
 */
router.post('/retirementplan', createRetirementPlan)

/**
 * @swagger
 * /retirementplan/{id}:
 *   put:
 *     summary: Update a retirement plan
 *     tags: [Retirement Plans]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/RetirementPlan'
 *     responses:
 *       200:
 *         description: Updated retirement plan
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/RetirementPlan'
 *       404:
 *         description: Retirement plan not found
 */
router.put('/retirementplan/:id', updateRetirementPlan)

/**
 * @swagger
 * /retirementplan/{id}:
 *   delete:
 *     summary: Delete a retirement plan
 *     tags: [Retirement Plans]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Retirement plan deleted
 *       404:
 *         description: Retirement plan not found
 */
router.delete('/retirementplan/:id', deleteRetirementPlan)

export default router