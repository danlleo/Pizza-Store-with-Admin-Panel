import express from 'express'
import { getFoodTypeById } from '../middleware/middlewares'
import { 
    getAllFoodTypesController, 
    getOneFoodTypeController, 
    createFoodTypeController, 
    patchFoodTypeController, 
    deleteFoodTypeController } from '../controllers/foodtypes'

const foodTypesRouter = express.Router()

//Getting all
foodTypesRouter.get('/', getAllFoodTypesController)

//Getting one
foodTypesRouter.get('/:id', getFoodTypeById, getOneFoodTypeController)

//Creating
foodTypesRouter.post('/', createFoodTypeController)

//Updating one
foodTypesRouter.patch('/:id', getFoodTypeById, patchFoodTypeController)

//Deleting
foodTypesRouter.delete('/:id', getFoodTypeById, deleteFoodTypeController)

export default foodTypesRouter