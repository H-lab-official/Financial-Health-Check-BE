import express from 'express'
import {getAllRetirementPlans,getRetirementPlanById,createRetirementPlan,updateRetirementPlan,deleteRetirementPlan} from '../controller/RetirementPlanController.js'
const router = express.Router()
router.get('/retirementplan', getAllRetirementPlans)
router.get('/retirementplan/:id', getRetirementPlanById)
router.post('/retirementplan', createRetirementPlan)
router.put('/retirementplan/:id', updateRetirementPlan)
router.delete('/retirementplan/:id',deleteRetirementPlan)
export default router