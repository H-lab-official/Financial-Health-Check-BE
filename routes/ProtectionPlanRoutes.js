import express from 'express'
import { getAllProtectionPlans, getProtectionPlanById, createProtectionPlan, updateProtectionPlan, deleteProtectionPlan, } from '../controller/ProtectionPlanController.js'

const router = express.Router()

/**
 * @swagger
 * /protection:
 *   get:
 *     summary: Get all protection plans
 *     tags: [Protection Plans]
 *     responses:
 *       200:
 *         description: A list of protection plans
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/ProtectionPlan'
 */
router.get('/protection', getAllProtectionPlans)

/**
 * @swagger
 * /protection/{id}:
 *   get:
 *     summary: Get a protection plan by ID
 *     tags: [Protection Plans]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: A single protection plan
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ProtectionPlan'
 *       404:
 *         description: Protection plan not found
 */
router.get('/protection/:id', getProtectionPlanById)

/**
 * @swagger
 * /protection:
 *   post:
 *     summary: Create a new protection plan
 *     tags: [Protection Plans]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ProtectionPlan'
 *     responses:
 *       201:
 *         description: Created protection plan
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ProtectionPlan'
 */
router.post('/protection', createProtectionPlan)

/**
 * @swagger
 * /protection/{id}:
 *   put:
 *     summary: Update a protection plan
 *     tags: [Protection Plans]
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
 *             $ref: '#/components/schemas/ProtectionPlan'
 *     responses:
 *       200:
 *         description: Updated protection plan
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ProtectionPlan'
 *       404:
 *         description: Protection plan not found
 */
router.put('/protection/:id', updateProtectionPlan)

/**
 * @swagger
 * /protection/{id}:
 *   delete:
 *     summary: Delete a protection plan
 *     tags: [Protection Plans]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Protection plan deleted
 *       404:
 *         description: Protection plan not found
 */
router.delete('/protection/:id', deleteProtectionPlan)

export default router