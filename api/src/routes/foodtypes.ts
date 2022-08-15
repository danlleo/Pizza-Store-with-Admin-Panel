import express from 'express'
import {
  cookieJwtAuthentication,
  getFoodTypeById
} from '../middleware/middlewares'
import {
  getAllFoodTypesController,
  getOneFoodTypeController,
  createFoodTypeController,
  patchFoodTypeController,
  deleteFoodTypeController
} from '../controllers/foodtypes'

const foodTypesRouter = express.Router()

//Getting all
foodTypesRouter.get('/', getAllFoodTypesController)

//Getting one
foodTypesRouter.get('/:id', getFoodTypeById, getOneFoodTypeController)

//Creating
foodTypesRouter.post('/', cookieJwtAuthentication, createFoodTypeController)

//Updating one
foodTypesRouter.patch(
  '/:id',
  cookieJwtAuthentication,
  getFoodTypeById,
  patchFoodTypeController
)

//Deleting
foodTypesRouter.delete(
  '/:id',
  cookieJwtAuthentication,
  getFoodTypeById,
  deleteFoodTypeController
)

export default foodTypesRouter
