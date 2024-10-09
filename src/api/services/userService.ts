import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import User, { IUser } from '../models/userModel'

export class UserService {
    static async register(userData: IUser) {
        const hashedPassword = await bcrypt.hash(userData.password, 10)
        const user = new User({ ...userData, password: hashedPassword })
        return await user.save()
    }

    static async login(email: string, password: string) {
        try {
            // On vérifie que l'utilisateur existe dans la base de données
            const user = await User.findOne({ email })
            if (!user) {
                throw new Error('Utilisateur non trouvé')
            }

            // On compare le mdp fourni avec celui stocké dans la DB
            const isPasswordValid = await bcrypt.compare(password, user.password)
            if (!isPasswordValid) {
                throw new Error('Mot de passe incorrect')
            }

            // On génère un JWT si l'authentificatio est réussie
            const token = jwt.sign(
                {
                    id: user._id,
                    email: user.email,
                    role: user.role,
                },
                process.env.JWT_SECRET!,
                { expiresIn: '1h' }
            )

            // On retourne l'utilisateur (sans le mot de passe) et le token
            return {
                user: {
                    id: user._id,
                    email: user.email,
                    role: user.role
                },
                token
            }
        } catch (error: any) {
            throw new Error(error.message)
        }
    }
}