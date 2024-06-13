import express from 'express'
import {
  getAllEducationPlans,
  getEducationPlanById,
  createEducationPlan,
  updateEducationPlan,
  deleteEducationPlan
} from '../controller/EducationPlanController.js'

const router = express.Router()

/**
 * @swagger
 * /educationplan:
 *   get:
 *     summary: Get all education plans
 *     tags: [Education Plans]
 *     responses:
 *       200:
 *         description: A list of education plans
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/EducationPlan'
 */
router.get('/educationplan', getAllEducationPlans)

/**
 * @swagger
 * /educationplan/{id}:
 *   get:
 *     summary: Get an education plan by ID
 *     tags: [Education Plans]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: A single education plan
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/EducationPlan'
 *       404:
 *         description: Education plan not found
 */
router.get('/educationplan/:id', getEducationPlanById)

/**
 * @swagger
 * /educationplan:
 *   post:
 *     summary: Create a new education plan
 *     tags: [Education Plans]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/EducationPlan'
 *     responses:
 *       201:
 *         description: Created education plan
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/EducationPlan'
 */
router.post('/educationplan', createEducationPlan)

/**
 * @swagger
 * /educationplan/{id}:
 *   put:
 *     summary: Update an education plan
 *     tags: [Education Plans]
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
 *             $ref: '#/components/schemas/EducationPlan'
 *     responses:
 *       200:
 *         description: Updated education plan
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/EducationPlan'
 *       404:
 *         description: Education plan not found
 */
router.put('/educationplan/:id', updateEducationPlan)

/**
 * @swagger
 * /educationplan/{id}:
 *   delete:
 *     summary: Delete an education plan
 *     tags: [Education Plans]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Education plan deleted
 *       404:
 *         description: Education plan not found
 */
router.delete('/educationplan/:id', deleteEducationPlan)

export default router