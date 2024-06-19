import express from 'express';
import cors from 'cors';
import cron from 'node-cron';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import basicAuth from 'express-basic-auth';
import 'dotenv/config';
import protection from './routes/ProtectionPlanRoutes.js';
import userRoutes from "./routes/UserRoutes.js";
import HealthPlan from './routes/HealthPlanRoutes.js';
import Education from './routes/EducationPlanRoutes.js';
import Retirement from './routes/RetirementPlanRoutes.js';
import Importance from './routes/ImportanceRoutes.js';
import { deleteAllBy7days } from './controller/deleteAllBy7days.js';
import helmet from 'helmet';
import { swaggerOptions } from './swaggerOptions.js';

const app = express();
const port = process.env.MAIN_PORT || 3000;

// Use Helmet with custom CSP settings
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'"],
        styleSrc: ["'self'", "'unsafe-inline'"],
        imgSrc: ["'self'", "data:"],
        connectSrc: ["'self'"],
        fontSrc: ["'self'"],
        objectSrc: ["'none'"],
        mediaSrc: ["'self'"],
        frameSrc: ["'none'"],
      },
    },
  })
);

// Configure CORS with allowed origin and credentials
const allowedOrigins = ['https://financial-health-check.azayagencyjourney.com',"http://localhost:5173","http://192.168.1.37:5173"];
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  })
);

app.use(express.json());

const swaggerSpec = swaggerJSDoc(swaggerOptions);

const authMiddleware = basicAuth({
  users: {
    admin: process.env.SWAGGER_PASSWORD,
  },
  challenge: true,
});

app.use(
  `/docs/${process.env.SWAGGER_UUID}/api`,
  authMiddleware,
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec)
);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use(protection);
app.use(userRoutes);
app.use(HealthPlan);
app.use(Education);
app.use(Retirement);
app.use(Importance);

cron.schedule('0 0 * * *', deleteAllBy7days);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;