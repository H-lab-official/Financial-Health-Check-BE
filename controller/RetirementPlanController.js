import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


export const getAllRetirementPlans = async (req, res) => {
    try {
        const plans = await prisma.retirementPlan.findMany({
            include: { user: true },
        })
        res.status(200).json(plans)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}
export const getRetirementPlanById = async (req, res) => {
    const { id } = req.params
    try {
        const plan = await prisma.retirementPlan.findUnique({
            where: { id },
            include: { user: true },
        })
        if (!plan) {
            return res.status(404).json({ msg: 'Retirement Plan not found' });
        }
        res.status(200).json(plan)
    } catch (error) {
        res.status(404).json({ msg: error.message })
    }
}
export const createRetirementPlan = async (req, res) => {
    const { data, nameData } = req.body;
    const {  livingCosts ,
        houseCosts ,
        internetCosts,
        clothingCosts ,
        medicalCosts,
        otherCosts ,       
        retireAge ,
        lifExpectancy ,
        inflationRate,
        deposit    ,
        insuranceFund ,
        otherAssets  } = data
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
        const plan = await prisma.retirementPlan.create({
            data: {
                user: { connect: { user_params } },
                nickname,
                age,
                livingCosts ,
                houseCosts ,
                internetCosts,
                clothingCosts ,
                medicalCosts,
                otherCosts ,
                age     ,
                retireAge ,
                lifExpectancy ,
                inflationRate,
                deposit    ,
                insuranceFund ,
                otherAssets  
            },
        })

        res.status(201).json(plan)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}
export const updateRetirementPlan = async (req, res) => {
    const { id } = req.params
    const { data, nameData } = req.body;
    const { nickname, age } = nameData;
    const {  livingCosts ,
        houseCosts ,
        internetCosts,
        clothingCosts ,
        medicalCosts,
        otherCosts ,       
        retireAge ,
        lifExpectancy ,
        inflationRate,
        deposit    ,
        insuranceFund ,
        otherAssets } = data

    try {
        // Find the existing protection plan
        const existingPlan = await prisma.retirementPlan.findUnique({
            where: { id }
          
        })
        if (!existingPlan) {
            return res.status(404).json({ error: 'Retirement plan not found' })
        }
        // Update the user data if user_params is provided
        
        const updatedPlan = await prisma.retirementPlan.update({
            where: { id },
            data: {
                nickname,
                age,
                livingCosts ,
                houseCosts ,
                internetCosts,
                clothingCosts ,
                medicalCosts,
                otherCosts ,               
                retireAge ,
                lifExpectancy ,
                inflationRate,
                deposit    ,
                insuranceFund ,
                otherAssets 
            },
        })

        res.status(200).json(updatedPlan)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}
export const deleteRetirementPlan = async (req, res) => {
    const { id } = req.params
    try {
        const plan = await prisma.retirementPlan.delete({ where: { id } })
        res.status(204).json(plan)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}