import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const addAddressPlans = async (req, res) => {
  const { plans } = req.body;

  if (!Array.isArray(plans)) {
    return res.status(400).json({ error: 'Plans should be an array of URLs' });
  }

  try {
    const createdPlans = await Promise.all(
      plans.map(async (url) => {
        return await prisma.plan.create({
          data: { url },
        });
      })
    );
    res.status(201).json({ ids: createdPlans.map(plan => plan.id) });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const parsePlanUrl = (url) => {
  const [,, planType, planId] = url.split('/');
  return { planType, planId };
};

export const getAllAddressPlans = async (req, res) => {
  try {
    const plans = await prisma.plan.findMany();
    const parsedPlans = plans.map(plan => ({
      ...plan,
      ...parsePlanUrl(plan.url),
    }));
    res.status(200).json(parsedPlans);
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
      const parsedPlan = {
        ...plan,
        ...parsePlanUrl(plan.url),
      };
      res.status(200).json(parsedPlan);
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
