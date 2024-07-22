import express from 'express';
import { addLogs } from '../controller/LogsController.js';

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
router.post('/logs', addLogs);

export default router;
