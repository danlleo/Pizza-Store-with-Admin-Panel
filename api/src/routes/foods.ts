import express, { Request, NextFunction } from 'express'
import Foods from '../models/foods';
import {
    getAllFoodController, 
    getOneFoodController, 
    createFoodController, 
    patchFoodController, 
    deleteFoodController} from '../controllers/foods';

const foodsRouter = express.Router()
const MESSAGE_CANNOT_FIND = 'Cannot find food.'

//Getting all
foodsRouter.get('/', getAllFoodController)

//Getting one
foodsRouter.get('/:id', getFood, getOneFoodController)

//Creating
foodsRouter.post('/', createFoodController)

//Updating one
foodsRouter.patch('/:id', getFood, patchFoodController)

//Deleting
foodsRouter.delete('/:id', getFood, deleteFoodController)

//Middleware
async function getFood(req: Request, res: any, next: NextFunction) {
    let food
    try {
        food = await Foods.findById(req.params.id)
        if (food === null) return res.status(404).json({ message: MESSAGE_CANNOT_FIND })
    } catch (e: any) {
        return res.status(500).json({ message: e.message })
    }
    res.food = food
    next()
}

export default foodsRouter