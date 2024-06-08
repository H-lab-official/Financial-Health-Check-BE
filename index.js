import express from 'express'
const app = express()
const port = 3000
import protection from './routes/ProtectionPlanRoutes.js'
import userRoutes from "./routes/UserRoutes.js"
import HealthPlan from './routes/HealthPlanRoutes.js'
import Education from './routes/EducationPlanRoutes.js'
import Retirement from './routes/RetirementPlanRoutes.js'
import Importance from './routes/ImportanceRoutes.js'
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!5555')
})

app.use(protection)
app.use(userRoutes)
app.use(HealthPlan)
app.use(Education)
app.use(Retirement)
app.use(Importance)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

export default app