import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const addLogs = async (req, res) => {
    const { user_params, status, planType } = req.body;

    try {
      const log = await prisma.planLog.create({
        data: {
          user_params,
          status,
          planType,
        },
      });
      res.status(201).json(log);
    } catch (error) {
      console.error('Error logging plan to database:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
};
export const viewAllLogs = async (req, res) => {
    try {
        const logs = await prisma.planLog.findMany();
        res.json(logs);
      } catch (error) {
        console.error('Error fetching plan logs:', error);
        res.status(500).json({ error: 'Internal server error' });
      }
  };
