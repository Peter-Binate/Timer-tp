import express from 'express'
import { connectDB } from './config/dbConfig'
import userRoutes from './routes/userRoutes'

const app = express()
app.use(express.json())

connectDB()

app.use('/api/users', userRoutes)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Le serveur est lancé sur le port ${PORT}`)
})