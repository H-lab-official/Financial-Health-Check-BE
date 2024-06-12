import express from 'express'
import { getAllProtectionPlans, getProtectionPlanById, createProtectionPlan, updateProtectionPlan, deleteProtectionPlan, } from '../controller/ProtectionPlanController.js'
const router = express.Router()
router.get('/protection', getAllProtectionPlans)
router.get('/protection/:id', getProtectionPlanById)
router.post('/protection', createProtectionPlan)
router.put('/protection/:id', updateProtectionPlan)
router.delete('/protection/:id', deleteProtectionPlan)
export default router