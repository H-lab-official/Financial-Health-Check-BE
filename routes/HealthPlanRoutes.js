import express from 'express'
import {getAllHealthPlans,getHealthPlanById,createHealthPlan,updateHealthPlan,deleteHealthPlan } from '../controller/HealthPlanController'
const router = express.Router()
router.get('/healthplan', getAllHealthPlans)
router.get('/healthplan/:id', getHealthPlanById)
router.post('/healthplan', createHealthPlan)
router.put('/healthplan/:id', updateHealthPlan)
router.delete('/healthplan/:id', deleteHealthPlan)
export default router