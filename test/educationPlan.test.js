import request from 'supertest';
import { PrismaClient } from '@prisma/client';
import app from '../index'; // Assuming you have an Express app exported from this file

const prisma = new PrismaClient();

describe('Education Plan API', () => {
    let planId;
    let userParams = 'test_user_params';

    afterAll(async () => {
        // Clean up database after all tests are done
        await prisma.educationPlan.deleteMany();
        await prisma.user.deleteMany();
        await prisma.$disconnect();
    });

    it('should create a new education plan', async () => {
        const response = await request(app)
            .post('/api/education-plans')
            .send({
                data: {
                    levelOfeducation: 'Bachelor',
                    levelOfeducation2: 'Master',
                    expensesDuringStudy: 50000,
                    typeOfeducation: 'Public',
                    typeOfeducation2: 'Private',
                    yearsOfeducation: 4,
                    inflationRate: 0.03,
                    deposit: 10000,
                    insuranceFund: 5000,
                    otherAssets: 2000,
                    child: 2,
                },
                nameData: {
                    nickname: 'John',
                    age: 35,
                    user_params: userParams,
                    gender: 'Male'
                }
            });
        
        expect(response.statusCode).toBe(201);
        expect(response.body).toHaveProperty('id');
        planId = response.body.id; // Store the plan ID for future tests
    });

    it('should get all education plans', async () => {
        const response = await request(app).get('/api/education-plans');
        
        expect(response.statusCode).toBe(200);
        expect(response.body).toBeInstanceOf(Array);
        expect(response.body.length).toBeGreaterThan(0);
    });

    it('should get education plan by ID', async () => {
        const response = await request(app).get(`/api/education-plans/${planId}`);
        
        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('id', planId);
    });

    it('should update an existing education plan', async () => {
        const response = await request(app)
            .put(`/api/education-plans/${planId}`)
            .send({
                data: {
                    levelOfeducation: 'PhD',
                    levelOfeducation2: 'Postdoc',
                    expensesDuringStudy: 60000,
                    typeOfeducation: 'International',
                    typeOfeducation2: 'International',
                    yearsOfeducation: 5,
                    inflationRate: 0.04,
                    deposit: 15000,
                    insuranceFund: 10000,
                    otherAssets: 3000,
                    child: 3,
                },
                nameData: {
                    nickname: 'John',
                    age: 36,
                    gender: 'Male'
                }
            });
        
        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('levelOfeducation', 'PhD');
    });

    it('should delete an education plan', async () => {
        const response = await request(app).delete(`/api/education-plans/${planId}`);
        
        expect(response.statusCode).toBe(204);

        // Verify the plan has been deleted
        const getResponse = await request(app).get(`/api/education-plans/${planId}`);
        expect(getResponse.statusCode).toBe(404);
    });
});
