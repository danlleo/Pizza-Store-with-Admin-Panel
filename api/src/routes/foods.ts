import express from 'express'
import { getFood, getFoodTypeByName } from '../middleware/middlewares'
import {
  getAllFoodController,
  getOneFoodController,
  createFoodController,
  patchFoodController,
  deleteFoodController,
} from '../controllers/foods'

const foodsRouter = express.Router()

//Getting all
foodsRouter.get('/', getAllFoodController)

//Getting one
foodsRouter.get('/:id', getFood, getOneFoodController)

//Creating
foodsRouter.post('/', getFoodTypeByName, createFoodController)

//Updating one
foodsRouter.patch('/:id', getFood, getFoodTypeByName, patchFoodController)

//Deleting
foodsRouter.delete('/:id', getFood, deleteFoodController)

export default foodsRouter
