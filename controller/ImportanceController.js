import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


export const getAllImportance = async (req, res) => {
    try {
        const plans = await prisma.importance.findMany({
            include: { user: true },
        })
        res.status(200).json(plans)
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
        if (!plan) {
            return res.status(404).json({ msg: 'Importance not found' });
        }
        res.status(200).json(plan)
    } catch (error) {
        res.status(404).json({ msg: error.message })
    }
}
export const createImportance = async (req, res) => {
    const { data, nameData } = req.body;
    const { protectionPlanOrder, healthPlanOrder, retirementPlanOrder, educationPlanOrder, emergencyAccidentTreatmentCosts, missingTotal, protectiondata, roomRates, severeMedicalExpenses, totalMissing, treatmentBudget } = data
    const { nickname, age, user_params, gender } = nameData;
    try {
        let user = await prisma.user.findUnique({ where: { user_params } });
        if (!user) {
            user = await prisma.user.create({
                data: {
                    user_params

                }
            })
        }
        const plan = await prisma.importance.create({
            data: {
                user: { connect: { user_params } },
                nickname,
                age, gender,
                protectionPlanOrder: protectionPlanOrder.toString(),
                healthPlanOrder: healthPlanOrder.toString(),
                retirementPlanOrder: retirementPlanOrder.toString(),
                educationPlanOrder: educationPlanOrder.toString(),
                emergencyAccidentTreatmentCosts: emergencyAccidentTreatmentCosts || '', // Default to empty string if undefined
                missingTotal: missingTotal || '', // Default to empty string if undefined
                protectiondata: protectiondata || '', // Default to empty string if undefined
                roomRates: roomRates || '', // Default to empty string if undefined
                severeMedicalExpenses: severeMedicalExpenses || '', // Default to empty string if undefined
                totalMissing: totalMissing || '', // Default to empty string if undefined
                treatmentBudget: treatmentBudget || '',
            },
        })

        res.status(201).json(plan)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}
export const updateImportance = async (req, res) => {
    const { id } = req.params
    const { data, nameData } = req.body;
    const { protectionPlanOrder, healthPlanOrder, retirementPlanOrder, educationPlanOrder, emergencyAccidentTreatmentCosts, missingTotal, protectiondata, roomRates, severeMedicalExpenses, totalMissing, treatmentBudget } = data
    const { nickname, age, gender } = nameData;
    try {
        // Find the existing protection plan
        const existingPlan = await prisma.importance.findUnique({
            where: { id },

        })
        if (!existingPlan) {
            return res.status(404).json({ error: 'Importance plan not found' })
        }

        const updatedPlan = await prisma.importance.update({
            where: { id },
            data: {
                nickname,
                age, gender, protectionPlanOrder: protectionPlanOrder.toString(),
                healthPlanOrder: healthPlanOrder.toString(),
                retirementPlanOrder: retirementPlanOrder.toString(),
                educationPlanOrder: educationPlanOrder.toString(), emergencyAccidentTreatmentCosts, missingTotal, protectiondata, roomRates, severeMedicalExpenses, totalMissing, treatmentBudget
            },
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