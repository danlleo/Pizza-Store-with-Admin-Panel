import { Request, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import FoodTypes from '../models/foodtypes'
import Foods from '../models/foods'
import Employees from '../models/employees'

const MESSAGE_CANNOT_FIND_TYPE = 'Cannot find food type.'
const MESSAGE_CANNOT_FIND_FOOD = 'Cannot find food.'
const MESSAGE_CANNOT_FIND_EMPLOYEE = 'Cannot find employee.'

export async function getFoodTypeById(
  req: Request,
  res: any,
  next: NextFunction
) {
  let foodType
  try {
    foodType = await FoodTypes.findById(req.params.id)
    if (foodType === null)
      return res.status(404).json({ message: MESSAGE_CANNOT_FIND_TYPE })
  } catch (e: any) {
    return res.status(500).json({ message: e.message })
  }
  res.foodType = foodType
  next()
}

export async function getFoodTypeByName(
  req: any,
  res: any,
  next: NextFunction
) {
  let foodType
  try {
    foodType = await FoodTypes.findOne({ type: req.body.type })
    if (foodType === null)
      return res.status(404).json({ message: MESSAGE_CANNOT_FIND_TYPE })
  } catch (e: any) {
    return res.status(500).json({ message: e.message })
  }
  res.foodType = foodType
  next()
}

export async function getFood(req: Request, res: any, next: NextFunction) {
  let food
  try {
    food = await Foods.findById(req.params.id)

    if (food === null)
      return res.status(404).json({ message: MESSAGE_CANNOT_FIND_FOOD })
  } catch (e: any) {
    return res.status(500).json({ message: e.message })
  }
  res.food = food
  next()
}

export async function getEmployeeByEmailAndPassword(
  req: Request,
  res: any,
  next: NextFunction
) {
  let employee
  try {
    employee = await Employees.findOne({
      email: req.body.email,
      password: req.body.password
    })
    if (employee === null)
      return res.status(404).json({ message: MESSAGE_CANNOT_FIND_EMPLOYEE })
  } catch (e: any) {
    return res.status(500).json({ message: e.message })
  }
  res.employee = employee
  next()
}

export async function cookieJwtAuthentication(
  req: any,
  res: any,
  next: NextFunction
) {
  const token = req.cookies.token
  try {
    const decoded = jwt.verify(token, String(process.env.ACCESS_TOKEN_SECRET))
    req.employee = decoded
    next()
  } catch (e: any) {
    res.clearCookie('token')
    return res.status(401).json({ message: 'Unauthorized' })
  }
}
