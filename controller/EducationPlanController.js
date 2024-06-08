import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


export const getAllEducationPlans = async (req, res) => {
    try {
        const plans = await prisma.educationPlan.findMany({
            include: { user: true },
        })
        res.status(200).json("educationPlan")
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}
export const getEducationPlanById = async (req, res) => {
    const { id } = req.params
    try {
        const plan = await prisma.educationPlan.findUnique({
            where: { id },
            include: { user: true },
        })
        res.status(200).json(plan)
    } catch (error) {
        res.status(404).json({ msg: error.message })
    }
}
export const createEducationPlan = async (req, res) => {
    const { user_params,  levelOfeducation,
        typeOfeducation ,
        yearsOfeducation,
        inflationRate   ,
        deposit         ,
        insuranceFund  ,
        otherAssets      } = req.body
    try {
        const user = await prisma.user.create({
            data: {
                user_params,
                name: '',
                age: 0
            }
        })
        const plan = await prisma.educationPlan.create({
            data: {
                user: { connect: { id: user.id } },
                levelOfeducation,
                typeOfeducation ,
                yearsOfeducation,
                inflationRate   ,
                deposit         ,
                insuranceFund  ,
                otherAssets 
            },
        })

        res.status(201).json(plan)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}
export const updateEducationPlan = async (req, res) => {
    const { id } = req.params
    const { levelOfeducation,typeOfeducation,yearsOfeducation,inflationRate,deposit,insuranceFund,otherAssets} = req.body
    try {
        // Find the existing protection plan
        const existingPlan = await prisma.educationPlan.findUnique({
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
        const updatedPlan = await prisma.educationPlan.update({
            where: { id },
            data: {levelOfeducation,typeOfeducation ,yearsOfeducation,inflationRate,deposit,insuranceFund,otherAssets},
        })

        res.status(200).json(updatedPlan)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}
export const deleteEducationPlan = async (req, res) => {
    const { id } = req.params
    try {
        const plan = await prisma.educationPlan.delete({ where: { id } })
        res.status(204).json(plan)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}