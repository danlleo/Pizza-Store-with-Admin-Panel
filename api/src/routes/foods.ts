import express, { Router, Request, Response, NextFunction } from 'express'
import Foods from "../models/foods";

const foodsRouter = express.Router()
const MESSAGE_CANNOT_FIND = 'Cannot find food.'
const MESSAGE_DELETED = 'Deleted Successfully.'



//Getting all
foodsRouter.get('/', async (req: Request, res: Response) => {
    try {
        const foods = await Foods.find()
        res.json(foods)
    } catch (e: any) {
        res.status(500).json({ message: e.message })
    }
})

//Getting one
foodsRouter.get('/:id', getFood, (req: Request, res: any) => {
    res.send(res.food)
})

//Creating
foodsRouter.post('/', async (req: Request, res: Response) => {
    const food = new Foods({
        name: req.body.name || req.body.title,
        cost: req.body.cost,
        type: req.body.type,
        nutritions: req.body.nutritions || {
            calories: req.body.calories,
            fat: req.body.fat,
            sugar: req.body.sugar,
            salt: req.body.salt
        }
    })

    try {
        const newFood = await food.save()
        res.status(201).json(newFood)
    } catch (e: any) {
        res.status(400).json({ message: e.message })
    }
})

//Updating one
foodsRouter.patch('/:id', getFood, async (req: Request, res: any) => {
    if (req.body.name !== null) res.food.name = req.body.name
    if (req.body.cost !== null) res.food.cost = req.body.cost
    if (req.body.type !== null) res.food.type = req.body.type
    if (req.body.calories !== null) res.food.calories = req.body.calories
    if (req.body.fat !== null) res.food.fat = req.body.fat
    if (req.body.sugar !== null) res.food.sugar = req.body.sugar
    if (req.body.salt !== null) res.food.salt = req.body.salt

    try {
        const updatedFood = await res.food.save()
        res.status(201).json(updatedFood)
    } catch (e: any) {
        res.status(400).json({ message: e.message })
    }
})

//Deleting
foodsRouter.delete('/:id', getFood, async (req: Request, res: any) => {
    try {
        await res.food.remove()
        res.json({ message: MESSAGE_DELETED })
    } catch (e: any) {
        res.status(500).json({ message: e.message })
    }
})

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