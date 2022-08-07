import mongoose from 'mongoose'
const Schema = mongoose.Schema

const NutritionsSchema = new Schema({
    calories: { type: Number, required: true },
    fat: { type: Number, required: true },
    sugar: { type: Number, required: true },
    salt: { type: Number, required: true }
})

const FoodsSchema = new Schema({
    name: { type: String, required: true, unique: true },
    cost: { type: Number, required: true, min: [0.1, "Number is too low."] },
    type: { type: Schema.Types.ObjectId, ref: 'FoodTypes', required: true },
    image_path: { type: String, required: true },
    made_at: { type: Date, required: true },
    made_by: { type: Schema.Types.ObjectId, ref: 'Employees' },
    nutritions: NutritionsSchema
})

const Foods = mongoose.model('Foods', FoodsSchema)
export default Foods