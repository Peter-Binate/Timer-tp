import { Request, Response } from "express"
import { UserService } from '../services/userService'

export const register = async (req: Request, res: Response) => {
    try {
        const user = await UserService.register(req.body)
        res.status(201).json(user)
    } catch (error: any) {
        console.error(error)
        res.status(400).json({ message: error.message })
    }
}

export const login = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body
        const { token } = await UserService.login(email, password)
        res.status(200).json({ token })
    } catch (error: any ) {
        res.status(401).json({ message: error.message })
    }
}