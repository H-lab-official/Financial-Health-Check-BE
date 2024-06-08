import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


export const getAllImportance = async (req, res) => {
    try {
        const plans = await prisma.importance.findMany({
            include: { user: true },
        })
        res.status(200).json("importance")
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}
export const getImportanceById = async (req, res) => {
    const { id } = req.params
    try {
        const plan = await prisma.importance.findUnique({
            where: { id },
            include: { user: true },
        })
        res.status(200).json(plan)
    } catch (error) {
        res.status(404).json({ msg: error.message })
    }
}
export const createImportance = async (req, res) => {
    const { user_params,protectionPlanOrder ,healthPlanOrder , retirementPlanOrder , educationPlanOrder } = req.body
    try {
        const user = await prisma.user.create({
            data: {
                user_params,
                name: '',
                age: 0
            }
        })
        const plan = await prisma.importance.create({
            data: {
                user: { connect: { id: user.id } },
                protectionPlanOrder ,healthPlanOrder , retirementPlanOrder , educationPlanOrder
            },
        })

        res.status(201).json(plan)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}
export const updateImportance = async (req, res) => {
    const { id } = req.params
    const { protectionPlanOrder ,healthPlanOrder , retirementPlanOrder , educationPlanOrder} = req.body
    try {
        // Find the existing protection plan
        const existingPlan = await prisma.importance.findUnique({
            where: { id },
            include: { user: true },
        })
        if (!existingPlan) {
            return res.status(404).json({ error: 'Education plan not found' })
        }
        // Update the user data if user_params is provided
        if (user_params) {
            await prisma.user.update({
                where: { id: existingPlan.user.id },
                data: { user_params },
            })
        }
        const updatedPlan = await prisma.importance.update({
            where: { id },
            data: {protectionPlanOrder ,healthPlanOrder , retirementPlanOrder , educationPlanOrder},
        })

        res.status(200).json(updatedPlan)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}
export const deleteImportance = async (req, res) => {
    const { id } = req.params
    try {
        const plan = await prisma.importance.delete({ where: { id } })
        res.status(204).json(plan)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}