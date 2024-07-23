import express from 'express';
import { addLogs, viewAllLogs } from '../controller/PlanLogController.js';

const router = express.Router();

/**
 * @swagger
 * /logs:
 *   post:
 *     summary: Add new selection logs
 *     tags: [Logs]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               user_params:
 *                 type: string
 *                 example: "user123"
 *               selectedPlans:
 *                 type: array
 *                 items:
 *                   type: string
 *                 example: ["plan1", "plan2"]
 *     responses:
 *       201:
 *         description: The logs were successfully created
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
router.post('/planlogs', addLogs);

/**
 * @swagger
 * /logs:
 *   get:
 *     summary: View all selection logs
 *     tags: [Logs]
 *     responses:
 *       200:
 *         description: List of all selection logs
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   user_params:
 *                     type: string
 *                   selectedPlans:
 *                     type: array
 *                     items:
 *                       type: string
 *                   timestamp:
 *                     type: string
 *                     format: date-time
 *       500:
 *         description: Internal server error
 */
router.get('/planlogs', viewAllLogs);

export default router;
