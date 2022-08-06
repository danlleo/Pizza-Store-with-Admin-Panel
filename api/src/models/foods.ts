import mongoose from 'mongoose'
const Schema = mongoose.Schema

const FoodsSchema = new Schema({
    name: { type: String, required: true },
    cost: { type: Number, required: true },
    type: { type: String, required: true },
    nutritions: {
        calories: { type: Number, required: true },
        fat: { type: Number, required: true },
        sugar: { type: Number, required: true },
        salt: { type: Number, required: true }
    }
})

const Foods = mongoose.model('foods', FoodsSchema)
export default Foods