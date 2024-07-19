import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const addAddressPlans = async (req, res) => {
  const { plans } = req.body;
// console.log(typeof plans);
//   if (!Array.isArray(plans)) {
//     return res.status(400).json({ error: 'Plans should be an array' });
//   }

  try {
    const createdPlan = await prisma.plan.create({
      data: { data: plans },
    });
    res.status(201).json({ id: createdPlan.id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getAllAddressPlans = async (req, res) => {
  try {
    const plans = await prisma.plan.findMany();
    res.status(200).json(plans);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getAddressPlanById = async (req, res) => {
  const { id } = req.params;
  try {
    const plan = await prisma.plan.findUnique({
      where: { id },
    });
    if (plan) {
      res.status(200).json(plan);
    } else {
      res.status(404).json({ error: 'Plan not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteAddressPlan = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.plan.delete({
      where: { id },
    });
    res.status(204).end();
  } catch (error) {
    res.status(404).json({ error: 'Plan not found' });
  }
};
