import mongoose from "mongoose"
import dotenv from 'dotenv'

// On charge les variables d'environnement
dotenv.config()

export const connectDB = async () => {
    const uri = process.env.MONGO_URI as string
    if (!uri) {
        throw new Error("MONGODB_URI environment variable is not defined");
    }
    try {
        await mongoose.connect(
            uri
        )
        console.log('MongoDB Connected')
    } catch (error) {
        console.error('MongoDB Connection Error:', error)
        console.error('Connection URI:', process.env.MONGO_URI)
        process.exit(1); // Permet de quitter l'application si la connexion échoue
    }
}