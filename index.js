import express from 'express'
import cors from 'cors'
import cron from 'node-cron'
import swaggerJSDoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'
import basicAuth from 'express-basic-auth';
import 'dotenv/config';
import protection from './routes/ProtectionPlanRoutes.js'
import userRoutes from "./routes/UserRoutes.js"
import HealthPlan from './routes/HealthPlanRoutes.js'
import Education from './routes/EducationPlanRoutes.js'
import Retirement from './routes/RetirementPlanRoutes.js'
import Importance from './routes/ImportanceRoutes.js'
import {deleteAllBy7days} from './controller/deleteAllBy7days.js'
import helmet from 'helmet'
import {swaggerOptions} from './swaggerOptions.js'

const app = express()
const port = 3000

app.use(helmet())
app.use(cors())
app.use(express.json())


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

cron.schedule('0 0 * * *', deleteAllBy7days)
// cron.schedule('* * * * *', deleteAllBy7days);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

export default app