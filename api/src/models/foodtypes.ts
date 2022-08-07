import mongoose from 'mongoose'
const Schema = mongoose.Schema

const FoodTypesSchema = new Schema({
    type: { type: String, required: true, unique: true }
})

const FoodTypes = mongoose.model('FoodTypes', FoodTypesSchema)
export default FoodTypes
