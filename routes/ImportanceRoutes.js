import express from 'express'
import {getAllImportance,getImportanceById,createImportance,updateImportance,deleteImportance} from '../controller/ImportanceController'
const router = express.Router()
router.get('/importance', getAllImportance)
router.get('/importance/:id', getImportanceById)
router.post('/importance', createImportance)
router.put('/importance/:id', updateImportance)
router.delete('/importance/:id',deleteImportance)
export default router