import express from 'express'
import cors from 'cors'
import cron from 'node-cron'
import swaggerJSDoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'
import basicAuth from 'express-basic-auth';
import 'dotenv/config';
const app = express()

const port = 3000
import protection from './routes/ProtectionPlanRoutes.js'
import userRoutes from "./routes/UserRoutes.js"
import HealthPlan from './routes/HealthPlanRoutes.js'
import Education from './routes/EducationPlanRoutes.js'
import Retirement from './routes/RetirementPlanRoutes.js'
import Importance from './routes/ImportanceRoutes.js'
import {deleteAllBy7days} from './controller/deleteAllBy7days.js'
app.use(cors())
app.use(express.json())
const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Financial Health Check API',
      version: '1.0.0',
      description: 'API documentation for Financial Health Check application',
    },
    components: {
      schemas: {
        EducationPlan: {
          type: 'object',
          properties: {
            id: { type: 'string' },
            user_params: { type: 'string' },
            nickname: { type: 'string' },
            age: { type: 'string' },
            levelOfeducation: { type: 'string' },
            typeOfeducation: { type: 'string' },
            yearsOfeducation: { type: 'string' },
            inflationRate: { type: 'string' },
            deposit: { type: 'string' },
            insuranceFund: { type: 'string' },
            otherAssets: { type: 'string' },
            createdAt: { type: 'string', format: 'date-time' },
            updatedAt: { type: 'string', format: 'date-time' },
          },
        },
        ProtectionPlan: {
          type: 'object',
          properties: {
            id: { type: 'string' },
            user_params: { type: 'string' },
            nickname: { type: 'string' },
            age: { type: 'string' },
            initialMonthlyExpense: { type: 'string' },
            numberOfYears: { type: 'string' },
            adjustedYearlyExpenses: { type: 'string' },
            inflationRate: { type: 'string' },
            homePayments: { type: 'string' },
            carPayments: { type: 'string' },
            otherDebts: { type: 'string' },
            bankDeposit: { type: 'string' },
            lifeInsuranceFund: { type: 'string' },
            otherAssets: { type: 'string' },
            createdAt: { type: 'string', format: 'date-time' },
            updatedAt: { type: 'string', format: 'date-time' },
          },
        },
        Importance: {
          type: 'object',
          properties: {
            id: { type: 'string' },
            user_params: { type: 'string' },
            nickname: { type: 'string' },
            age: { type: 'string' },
            protectionPlanOrder: { type: 'string' },
            healthPlanOrder: { type: 'string' },
            retirementPlanOrder: { type: 'string' },
            educationPlanOrder: { type: 'string' },
            createdAt: { type: 'string', format: 'date-time' },
            updatedAt: { type: 'string', format: 'date-time' },
          },
        },
        User: {
          type: 'object',
          properties: {
            id: { type: 'string' },
            user_params: { type: 'string' },
            createdAt: { type: 'string', format: 'date-time' },
            updatedAt: { type: 'string', format: 'date-time' },
          },
        },
        HealthPlan: {
          type: 'object',
          properties: {
            id: { type: 'string' },
            user_params: { type: 'string' },
            nickname: { type: 'string' },
            age: { type: 'string' },
            hospitals: { type: 'string' },
            dailyCompensationFromWelfare: { type: 'string' },
            treatingSeriousIllness: { type: 'string' },
            emergencyCosts: { type: 'string' },
            annualTreatment: { type: 'string' },
            roomFeeFromCompany: { type: 'string' },
            dailyCompensationFromCompany: { type: 'string' },
            treatingSeriousIllnessFromCompany: { type: 'string' },
            emergencyCostsFromCompany: { type: 'string' },
            annualTreatmentFromCompany: { type: 'string' },
            createdAt: { type: 'string', format: 'date-time' },
            updatedAt: { type: 'string', format: 'date-time' },
          },
        },
        RetirementPlan: {
          type: 'object',
          properties: {
            id: { type: 'string' },
            user_params: { type: 'string' },
            nickname: { type: 'string' },
            age: { type: 'string' },
            livingCosts: { type: 'string' },
            houseCosts: { type: 'string' },
            internetCosts: { type: 'string' },
            clothingCosts: { type: 'string' },
            medicalCosts: { type: 'string' },
            otherCosts: { type: 'string' },
            retireAge: { type: 'string' },
            lifExpectancy: { type: 'string' },
            inflationRate: { type: 'string' },
            deposit: { type: 'string' },
            insuranceFund: { type: 'string' },
            otherAssets: { type: 'string' },
            createdAt: { type: 'string', format: 'date-time' },
            updatedAt: { type: 'string', format: 'date-time' },
          },
        },
      },
    },
  },
  apis: ['./routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(swaggerOptions)

const authMiddleware = basicAuth({
  users: {
    admin: process.env.SWAGGER_PASSWORD,
  },
  challenge: true,
});
app.use(`/docs/${process.env.SWAGGER_UUID}/super-secret/v1.0/api/swagger-ui/access/private/hidden/paths/docs`, authMiddleware, swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get('/', (req, res) => {
  res.send('Hello World!5555')
})

app.use(protection)
app.use(userRoutes)
app.use(HealthPlan)
app.use(Education)
app.use(Retirement)
app.use(Importance)

// cron.schedule('0 0 * * *', deleteAllBy7days)
cron.schedule('* * * * *', deleteAllBy7days);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

export default app