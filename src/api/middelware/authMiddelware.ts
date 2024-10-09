import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

// Middleware d'authentification pour protéger les routes
export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    // On récupère le token JWT dans l'en-tête 'Authorization'
    const token = req.header('Authorization')?.split(' ')[1]

    // Si aucun token n'est présent
    if (!token) return res.status(401).json({ message: 'Accès refusé '})
    
    // On vérifie et décode le token JWT à l'aide de la clé secrète    
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET!)

        req.user = decoded

        // On passe à l'étape suivante du traitement de la requête
        next()
    } catch (error) {
        res.status(400).json({ message: 'token invalide' });
    }    
}