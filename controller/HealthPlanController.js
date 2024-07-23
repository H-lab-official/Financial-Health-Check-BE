import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


export const getAllHealthPlans = async (req, res) => {
    try {
        const plans = await prisma.healthPlan.findMany({
            include: { user: true },
        });
        res.status(200).json(plans);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};
export const getHealthPlanById = async (req, res) => {
    const { id } = req.params;
    try {
        const plan = await prisma.healthPlan.findUnique({
            where: { id },
            include: { user: true },
        });
        if (!plan) {
            return res.status(404).json({ msg: 'Health plan not found' });
        }
        res.status(200).json(plan);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};
export const createHealthPlan = async (req, res) => {
    const { data, nameData } = req.body;
    const { hospitals, dailyCompensationFromWelfare, treatingSeriousIllness, emergencyCosts, annualTreatment, roomFeeFromCompany, dailyCompensationFromCompany, treatingSeriousIllnessFromCompany, emergencyCostsFromCompany, annualTreatmentFromCompany } = data
    const { nickname, age, user_params,gender } = nameData;
    try {
        let user = await prisma.user.findUnique({ where: { user_params } });
        if (!user) {
            user = await prisma.user.create({
                data: {
                    user_params

                }
            })
        }

        const plan = await prisma.healthPlan.create({
            data: {
                user: { connect: { user_params } },
                nickname,
                age,gender,
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
    const { data, nameData } = req.body;
    const { hospitals, dailyCompensationFromWelfare, treatingSeriousIllness, emergencyCosts, annualTreatment, roomFeeFromCompany, dailyCompensationFromCompany, treatingSeriousIllnessFromCompany, emergencyCostsFromCompany, annualTreatmentFromCompany } = data
    const { nickname, age ,gender} = nameData;
    try {
        // Find the existing protection plan
        const existingPlan = await prisma.healthPlan.findUnique({
            where: { id },
            
        })
        if (!existingPlan) {
            return res.status(404).json({ error: 'Health plan not found' })
        }
      
        const updatedPlan = await prisma.healthPlan.update({
            where: { id },
            data: {
                nickname,
                age,gender,
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
    const { id } = req.params;
    try {
        const plan = await prisma.healthPlan.delete({
            where: { id },
        });
        res.status(204).json(plan);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};