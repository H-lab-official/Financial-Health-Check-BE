import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const addLogs = async (req, res) => {
  const { user_params, selectedPlans } = req.body;

  try {
    const log = await prisma.selectionLog.create({
      data: {
        user_params,
        selectedPlans,
      },
    });
    res.status(201).json(log);
  } catch (error) {
    console.error('Error logging selection to database:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
