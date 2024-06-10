import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


export const getAllEducationPlans = async (req, res) => {
    try {
        const plans = await prisma.educationPlan.findMany({
            include: { user: true },
        })
        res.status(200).json(plans)
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
    const { data, nameData } = req.body;
    const {  levelOfeducation,
        typeOfeducation ,
        yearsOfeducation,
        inflationRate   ,
        deposit         ,
        insuranceFund  ,
        otherAssets      } = data
        const { nickname, age, user_params } = nameData;
    try {
        let user = await prisma.user.findUnique({ where: { user_params } });
        if (!user) {
            user = await prisma.user.create({
                data: {
                    user_params

                }
            })
        }
        const plan = await prisma.educationPlan.create({
            data: {
                user: { connect: { user_params } },
                nickname,
                age,
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
    const { data, nameData } = req.body;
    const { levelOfeducation,typeOfeducation,yearsOfeducation,inflationRate,deposit,insuranceFund,otherAssets} = data
    const { nickname, age } = nameData;
    try {
        // Find the existing protection plan
        const existingPlan = await prisma.educationPlan.findUnique({
            where: { id },
           
        })
        if (!existingPlan) {
            return res.status(404).json({ error: 'Education plan not found' })
        }
      
        const updatedPlan = await prisma.educationPlan.update({
            where: { id },
            data: {nickname,
                age,levelOfeducation,typeOfeducation ,yearsOfeducation,inflationRate,deposit,insuranceFund,otherAssets},
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