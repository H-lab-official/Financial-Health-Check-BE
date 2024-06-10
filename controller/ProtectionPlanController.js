import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

// Get all protection plans
export const getAllProtectionPlans = async (req, res) => {
  try {
    const plans = await prisma.protectionPlan.findMany({
      include: { user: true },
    })
    res.status(200).json(plans)
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
    if (!plan) {
      return res.status(404).json({ msg: 'Protection plan not found' });
    }
    res.status(200).json(plan)
  } catch (error) {
    res.status(404).json({ msg: error.message })
  }
}

// Create a new protection plan
export const createProtectionPlan = async (req, res) => {
  const { data, nameData } = req.body;
  const { initialMonthlyExpense, numberOfYears, adjustedYearlyExpenses, inflationRate, homePayments, carPayments, otherDebts, bankDeposit, lifeInsuranceFund, otherAssets } = data;
  const { nickname, age, user_params } = nameData;
 
  try {
    let user = await prisma.user.findUnique({ where: { user_params } });
    if (!user) {
      user = await prisma.user.create({
        data: {
          user_params
        },
      })
    }

    // Create a new protection plan and connect it with the user
    const plan = await prisma.protectionPlan.create({
      data: {
        user: { connect: { user_params } },
        nickname,
        age,
        initialMonthlyExpense,
        numberOfYears,
        adjustedYearlyExpenses,
        inflationRate,
        homePayments,
        carPayments,
        otherDebts,
        bankDeposit,
        lifeInsuranceFund,
        otherAssets
      },
    })
    console.log(plan + user);
    res.status(201).json(plan)
  } catch (error) {
    res.status(400).json({ msg: `ไม่สามารถบันทึกได้ ${error.message}` })
  }
}

// Update a protection plan
export const updateProtectionPlan = async (req, res) => {
  const { id } = req.params
  const { data, nameData } = req.body;
  const { initialMonthlyExpense, numberOfYears, adjustedYearlyExpenses, inflationRate, homePayments, carPayments, otherDebts, bankDeposit, lifeInsuranceFund } = data
  const { nickname, age } = nameData;
  try {
    // Find the existing protection plan
    const existingPlan = await prisma.protectionPlan.findUnique({
      where: { id }      
    })

    if (!existingPlan) {
      return res.status(404).json({ error: 'Protection plan not found' })
    }


    // Update the protection plan data
    const updatedPlan = await prisma.protectionPlan.update({
      where: { id },
      data: {
        nickname,
        age,
        initialMonthlyExpense,
        numberOfYears,
        adjustedYearlyExpenses,
        inflationRate,
        homePayments,
        carPayments,
        otherDebts,
        bankDeposit,
        lifeInsuranceFund, otherAssets
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