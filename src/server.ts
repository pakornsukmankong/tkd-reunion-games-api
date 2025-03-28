import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import userRoutes from './routes/userRoutes'
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './config/swaggerConfig';


dotenv.config()

const app = express()

// Middleware
app.use(cors())
app.use(express.json())

// Swagger UI
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


// Home Route
app.get('/', (req, res) => {
  res.send('Express TypeScript MVC with MySQL is running')
})

// Routes
app.use('/users', userRoutes);


// Start Server
const PORT = process.env.PORT ?? 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
