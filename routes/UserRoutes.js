import express from 'express'
import {getAllUsers,getUserById,createUser,updateUser,getUserByUserParams,deleteUser,} from "../controller/UserController"
const router =express.Router()
router.get('/users', getAllUsers)
router.get('/users/:id', getUserById)
router.post('/users', createUser)
router.put('/users/:id', updateUser)
router.get('/users/params/:user_params', getUserByUserParams)
router.delete('/users/:id', deleteUser)

export default router