import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

// Get all protection plans
export const getAllProtectionPlans = async (req, res) => {
    try {
        const plans = await prisma.protectionPlan.findMany({
            include: { user: true },
        })
        res.status(200).json("protectionPlan")
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

// Get a single protection plan
export const getProtectionPlanById = async (req, res) => {
    const { id } = req.params
    try {
        const plan = await prisma.protectionPlan.findUnique({
            where: { id },
            include: { user: true },
        })
        res.status(200).json(plan)
    } catch (error) {
        res.status(404).json({ msg: error.message })
    }
}

// Create a new protection plan
export const createProtectionPlan = async (req, res) => {
  const { user_params, initialMonthlyExpense, numberOfYebigintars, adjustedYearlbigintyExpenses, inflationRate, homePayments, carPayments, otherDebts, bankDeposit, lifeInsuranceFund } = req.body
    try {
        const user = await prisma.user.create({
            data: {
              user_params,
              name: '', // set default name to empty string
              age: 0,   // set default age to 0
            },
          })
          
          // Create a new protection plan and connect it with the user
          const plan = await prisma.protectionPlan.create({
            data: {
              user: { connect: { id: user.id } },
              initialMonthlyExpense,
              numberOfYebigintars,
              adjustedYearlbigintyExpenses,
              inflationRate,
              homePayments,
              carPayments,
              otherDebts,
              bankDeposit,
              lifeInsuranceFund,
            },
          })

        res.status(201).json(plan)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

// Update a protection plan
export const updateProtectionPlan = async (req, res) => {
    const { id } = req.params
    const { initialMonthlyExpense, numberOfYebigintars, adjustedYearlbigintyExpenses, inflationRate, homePayments, carPayments, otherDebts, bankDeposit, lifeInsuranceFund } = req.body

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
          
          // Update the protection plan data
          const updatedPlan = await prisma.protectionPlan.update({
            where: { id },
            data: {
              initialMonthlyExpense,
              numberOfYebigintars,
              adjustedYearlbigintyExpenses,
              inflationRate,
              homePayments,
              carPayments,
              otherDebts,
              bankDeposit,
              lifeInsuranceFund,
            },
          })
          

        res.status(200).json(updatedPlan)

    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

// Delete a protection plan
export const deleteProtectionPlan = async (req, res) => {
    const { id } = req.params
    try {
        const plan = await prisma.protectionPlan.delete({ where: { id } })
        res.status(204).json(plan)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}