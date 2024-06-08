import express from 'express'
import {getAllEducationPlans,getEducationPlanById,createEducationPlan,updateEducationPlan,deleteEducationPlan} from '../controller/EducationPlanController'
const router = express.Router()
router.get('/educationplan', getAllEducationPlans)
router.get('/educationplan/:id', getEducationPlanById)
router.post('/educationplan', createEducationPlan)
router.put('/educationplan/:id', updateEducationPlan)
router.delete('/educationplan/:id',deleteEducationPlan)
export default router