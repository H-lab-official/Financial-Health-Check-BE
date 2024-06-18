import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const deleteAllBy7days = async () => {
    try {
        const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000); // 7 days ago
        console.log(sevenDaysAgo);
        const deleteEdcation = await prisma.educationPlan.deleteMany({
            where: {
                createdAt: {
                    lt: sevenDaysAgo,
                }
            }
        })

        const deleteHealth = await prisma.healthPlan.deleteMany({
            where: {
                createdAt: {
                    lt: sevenDaysAgo,
                }
            }
        })

        const deleteImportance = await prisma.importance.deleteMany({
            where: {
                createdAt: {
                    lt: sevenDaysAgo,
                }
            }
        })

        const deleteProtection = await prisma.protectionPlan.deleteMany({
            where: {
                createdAt: {
                    lt: sevenDaysAgo,
                }
            }
        })

        const deleteRetirement = await prisma.retirementPlan.deleteMany({
            where: {
                createdAt: {
                    lt: sevenDaysAgo,
                }
            }
        })

        const deleteUser = await prisma.user.deleteMany({
            where: {
                createdAt: {
                    lt: sevenDaysAgo,
                }
            }
        })
        console.log(deleteEdcation);
        console.log(deleteHealth);
        console.log(deleteImportance);
        console.log(deleteProtection);
        console.log(deleteRetirement);
        console.log(deleteUser);
        console.log("ลบข้อมูลที่เกิน 7 วันเรียบร้อยแล้ว");
    } catch (error) {
        console.error('เกิดข้อผิดพลาดในการลบข้อมูล:', error);
    }
}
