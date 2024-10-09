import mongoose from "mongoose"
import dotenv from 'dotenv'

// On charge les variables d'environnement
dotenv.config()

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI!, {
            useNewUrlParser: true, // analyse l'url de connexion
            useUnifiedTopology: true // gère comment est gèré la connexion
        })
        console.log('MongoDB Connected')
    } catch (error) {
        console.error('MongoDB Connection Error:', error)
        process.exit(1); // Permet de quitter l'application si la connexion échoue
    }
}