import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const deleteAllBy7days = async () => {
    try {
        const sevenDaysAgo = new Date(Date.now() - 7* 24 * 60 * 60 * 1000); // 7 days ago

        await prisma.educationPlan.deleteMany({
            where: {
                createdAt: {
                    lt: sevenDaysAgo,
                }
            }
        })
        
        await prisma.healthPlan.deleteMany({
            where: {
                createdAt: {
                    lt: sevenDaysAgo,
                }
            }
        })
        
        await prisma.importance.deleteMany({
            where: {
                createdAt: {
                    lt: sevenDaysAgo,
                }
            }
        })
        
        await prisma.protectionPlan.deleteMany({
            where: {
                createdAt: {
                    lt: sevenDaysAgo,
                }
            }
        })
        
        await prisma.retirementPlan.deleteMany({
            where: {
                createdAt: {
                    lt: sevenDaysAgo,
                }
            }
        })
        
        await prisma.user.deleteMany({
            where: {
                createdAt: {
                    lt: sevenDaysAgo,
                }
            }
        })

        console.log("ลบข้อมูลที่เกิน 7 วันเรียบร้อยแล้ว");
    } catch (error) {
        console.error('เกิดข้อผิดพลาดในการลบข้อมูล:', error);
    }
}
