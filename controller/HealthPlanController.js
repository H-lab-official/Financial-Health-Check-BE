import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


export const getAllHealthPlans = async (req, res) => {
    try {
        const plans = await prisma.healthPlan.findMany({
            include: { user: true },
        })
        res.status(200).json("healthPlan")
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}
export const getHealthPlanById = async (req, res) => {
    const { id } = req.params
    try {
        const plan = await prisma.healthPlan.findUnique({
            where: { id },
            include: { user: true },
        })
        res.status(200).json(plan)
    } catch (error) {
        res.status(404).json({ msg: error.message })
    }
}
export const createHealthPlan = async (req, res) => {
    const { user_params, hospitals, dailyCompensationFromWelfare, treatingSeriousIllness, emergencyCosts, annualTreatment, roomFeeFromCompany, dailyCompensationFromCompany, treatingSeriousIllnessFromCompany, emergencyCostsFromCompany, annualTreatmentFromCompany } = req.body
    try {
        const user = await prisma.user.create({
            data: {
                user_params,
                name: '',
                age: 0
            }
        })
        const plan = await prisma.healthPlan.create({
            data: {
                user: { connect: { id: user.id } },
                hospitals,
                dailyCompensationFromWelfare,
                treatingSeriousIllness,
                emergencyCosts,
                annualTreatment,
                roomFeeFromCompany,
                dailyCompensationFromCompany,
                treatingSeriousIllnessFromCompany,
                emergencyCostsFromCompany,
                annualTreatmentFromCompany,
            },
        })

        res.status(201).json(plan)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}
export const updateHealthPlan = async (req, res) => {
    const { id } = req.params
    const { hospitals, dailyCompensationFromWelfare, treatingSeriousIllness, emergencyCosts, annualTreatment, roomFeeFromCompany, dailyCompensationFromCompany, treatingSeriousIllnessFromCompany, emergencyCostsFromCompany, annualTreatmentFromCompany } = req.body

    try {
        // Find the existing protection plan
        const existingPlan = await prisma.protectionPlan.findUnique({
            where: { id },
            include: { user: true },
        })
        if (!existingPlan) {
            return res.status(404).json({ error: 'Protection plan not found' })
        }
        // Update the user data if user_params is provided
        if (user_params) {
            await prisma.user.update({
                where: { id: existingPlan.user.id },
                data: { user_params },
            })
        }
        const updatedPlan = await prisma.healthPlan.update({
            where: { id },
            data: {
                hospitals,
                dailyCompensationFromWelfare,
                treatingSeriousIllness,
                emergencyCosts,
                annualTreatment,
                roomFeeFromCompany,
                dailyCompensationFromCompany,
                treatingSeriousIllnessFromCompany,
                emergencyCostsFromCompany,
                annualTreatmentFromCompany,
            },
        })

        res.status(200).json(updatedPlan)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}
export const deleteHealthPlan = async (req, res) => {
    const { id } = req.params
    try {
        const plan = await prisma.healthPlan.delete({ where: { id } })
        res.status(204).json(plan)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}