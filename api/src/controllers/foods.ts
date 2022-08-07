import { Request, Response } from 'express'
import path from 'path'
import { v4 as uuidv4 } from 'uuid'
import { unlinkSync } from 'fs'
import Foods from '../models/foods'


const MESSAGE_DELETED = 'Deleted Successfully.'
const FOLDER_PATH = path.join(__dirname, '..', 'public', 'foods')
const FOOD_IMAGES_PATH = path.join(FOLDER_PATH, 'images')

export async function getAllFoodController(req: Request, res: Response){
    try {
        const foods = await Foods.find()
        res.json(foods)
    } catch (e: any) {
        res.status(500).json({ message: e.message })
    }
}

export async function getOneFoodController(req: Request, res: any){
    res.send(res.food)
}

export async function createFoodController(req: any, res: any){
    const {name, title, cost, type, nutritions, calories, fat, sugar, salt} = req.body
    const {image} = req.files

    const fileName = `${uuidv4()}${path.extname(image.name)}`

    const food = new Foods({
        name: name || title,
        cost: cost,
        type: type,
        image_path: fileName,
        nutritions: nutritions || {
            calories: calories,
            fat: fat,
            sugar: sugar,
            salt: salt
        }
    })

    try {
        const newFood = await food.save()
        image.mv(path.resolve(FOOD_IMAGES_PATH, fileName))
        res.status(201).json(newFood)
    } catch (e: any) {
        res.status(400).json({ message: e.message })
    }
}

export async function patchFoodController(req: any, res: any){
    const {name, title, cost, type, calories, fat, sugar, salt} = req.body
    const {image} = req.files

    if (name !== null || title !== null) res.food.name = name || title
    if (cost !== null) res.food.cost = cost
    if (type !== null) res.food.type = type
    if (calories !== null) res.food.calories = calories
    if (fat !== null) res.food.fat = fat
    if (sugar !== null) res.food.sugar = sugar
    if (salt !== null) res.food.salt = salt
    if (image !== null) {
        const fileName = `${uuidv4()}${path.extname(image.name)}`
        unlinkSync(path.resolve(FOOD_IMAGES_PATH, res.food.image_path))
        res.food.image_path = fileName
        image.mv(path.resolve(FOOD_IMAGES_PATH, fileName))
    }
    try {
        const updatedFood = await res.food.save()
        res.status(201).json(updatedFood)
    } catch (e: any) {
        res.status(400).json({ message: e.message })
    }
}

export async function deleteFoodController(req: Request, res: any){
    try {
        await res.food.remove()
        unlinkSync(path.resolve(FOOD_IMAGES_PATH, res.food.image_path))
        res.json({ message: MESSAGE_DELETED })
    } catch (e: any) {
        res.status(500).json({ message: e.message })
    }
}