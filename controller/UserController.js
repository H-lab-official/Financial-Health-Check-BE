import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

// Get all users
export const getAllUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany()
    res.status(200).json("users")
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }

}
// Get a single user
export const getUserById = async (req, res) => {
  const { id } = req.params
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
    })
    res.status(200).json(user)
  } catch (error) {
    res.status(404).json({ msg: error.message })
  } 
}

// Create a new user
export const createUser = async (req, res) => {
  const { user_params, name, age } = req.body
  const user = await prisma.user.create({
    data: { user_params, name, age },
  })
  res.json(user)
}

// Update a user
export const updateUser = async (req, res) => {
  const { id } = req.params
  const { user_params, name, age } = req.body
  const user = await prisma.user.update({
    where: { id },
    data: { user_params, name, age },
  })
  res.json(user)
}

// Delete a user
export const deleteUser = async (req, res) => {
  const { id } = req.params
  await prisma.user.delete({ where: { id } })
  res.sendStatus(204)
}