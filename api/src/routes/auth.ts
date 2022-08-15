import express from 'express'
import cors from 'cors'
import { getEmployeeByEmailAndPassword } from '../middleware/middlewares'
import {
  signInController,
  signUpController,
  signOutController
} from '../controllers/auth'

const authRouter = express.Router()

//Sign in
authRouter.post('/login', getEmployeeByEmailAndPassword, signInController)

//Sign up
authRouter.post('/register', signUpController)

//Sign out
authRouter.post('/logout', signOutController)

export default authRouter
