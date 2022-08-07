import { Request, NextFunction } from 'express'
import FoodTypes from '../models/foodtypes'
import Foods from '../models/foods'

const MESSAGE_CANNOT_FIND_TYPE = 'Cannot find food type.'
const MESSAGE_CANNOT_FIND_FOOD = 'Cannot find food.'

export async function getFoodTypeById(req: Request, res: any, next: NextFunction) {
    let foodType
    try {
        foodType = await FoodTypes.findById(req.params.id)
        if (foodType === null) return res.status(404).json({ message: MESSAGE_CANNOT_FIND_TYPE })
    } catch (e: any) {
        return res.status(500).json({ message: e.message })
    }
    res.foodType = foodType
    next()
}

export async function getFoodTypeByName(req: any, res: any, next: NextFunction) {
    let foodType
    try {
        foodType = await FoodTypes.findOne({name: req.body.type})
        if (foodType === null) return res.status(404).json({ message: MESSAGE_CANNOT_FIND_TYPE })
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

        if (food === null) return res.status(404).json({ message: MESSAGE_CANNOT_FIND_FOOD })
    } catch (e: any) {
        return res.status(500).json({ message: e.message })
    }
    res.food = food
    next()
}