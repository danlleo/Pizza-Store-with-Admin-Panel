import mongoose from 'mongoose'
const Schema = mongoose.Schema

const FoodTypesSchema = new Schema({
    type: { type: String, required: true, unique: true },
    created_at: { type: Date, default: Date.now, required: true },
    last_update: { type: Date, default: Date.now, required: true }
})

const FoodTypes = mongoose.model('FoodTypes', FoodTypesSchema)
export default FoodTypes
