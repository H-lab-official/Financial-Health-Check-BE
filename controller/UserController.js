import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

// Get all users
export const getAllUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany()
    res.status(200).json(users)
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
}


export const getUserByUserParams = async (req, res) => {
  const { user_params } = req.params;
  try {
    const user = await prisma.user.findUnique({
      where: { user_params :user_params},
      include: {
        HealthPlan: true,
        ProtectionPlan: true,
        importance: true,
        EducationPlan: true,
        RetirementPlan: true,
      },
    });
    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
export const getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await prisma.user.findUnique({
      where: { id },
      include: {
        HealthPlan: true,
        ProtectionPlan: true,
        importance: true,
        EducationPlan: true,
        RetirementPlan: true,
      },
    });
    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
}
// Create a new user
export const createUser = async (req, res) => {
  const { user_params } = req.body
  try {
    const user = await prisma.user.create({
      data: { user_params },
    })
    res.status(201).json(user)
  } catch (error) {
    res.status(400).json({ msg: error.message })
  }
}

// Update a user by user_params
export const updateUser = async (req, res) => {
  const { user_params } = req.params
  const data = req.body
  try {
    const user = await prisma.user.update({
      where: { user_params },
      data,
    })
    res.status(200).json(user)
  } catch (error) {
    res.status(400).json({ msg: error.message })
  }
}

// Delete a user by user_params
export const deleteUser = async (req, res) => {
  const { user_params } = req.params
  try {
    await prisma.user.delete({ where: { user_params } })
    res.sendStatus(204)
  } catch (error) {
    res.status(400).json({ msg: error.message })
  }
}