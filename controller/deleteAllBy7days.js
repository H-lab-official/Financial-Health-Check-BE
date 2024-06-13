import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const deleteAllBy7days = async (req, res) => {
    try {
        await prisma.educationPlan.deleteMany({
            where: {
                createdAt: {
                    lt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
                }
            }
        })
        
        await prisma.healthPlan.deleteMany({
            where: {
                createdAt: {
                    lt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
                }
            }
        })
        
        await prisma.importance.deleteMany({
            where: {
                createdAt: {
                    lt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
                }
            }
        })
        
        await prisma.protectionPlan.deleteMany({
            where: {
                createdAt: {
                    lt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
                }
            }
        })
        
        await prisma.retirementPlan.deleteMany({
            where: {
                createdAt: {
                    lt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
                }
            }
        })
        
        res.status(200).json({ msg: "ลบข้อมูลที่เกิน 7 วันเรียบร้อยแล้ว" })
    } catch (error) {
        console.error('เกิดข้อผิดพลาดในการลบข้อมูล:', error)
        res.status(500).json({ error: 'เกิดข้อผิดพลาดในการลบข้อมูล' })
    }
}