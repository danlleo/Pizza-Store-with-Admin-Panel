import express from 'express'
import cors from 'cors'
import { getEmployeeByEmailAndPassword } from '../middleware/middlewares'
import { signInController, signUpController } from '../controllers/auth'

const authRouter = express.Router()

//Sign in
authRouter.post('/login', getEmployeeByEmailAndPassword, signInController)

//Sign up
authRouter.post('/register', signUpController)

export default authRouter
