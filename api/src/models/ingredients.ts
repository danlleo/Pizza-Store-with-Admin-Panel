import mongoose from 'mongoose'
const Schema = mongoose.Schema

const IngredientsSchema = new Schema({
  ingredient_name: { type: String, required: true, unique: true },
  price: { type: Number, required: true },
  removable: { type: Boolean, required: true },
  only_for: { type: Schema.Types.ObjectId, ref: 'FoodTypes', required: false },
  created_at: { type: Date, default: Date.now, required: true },
  //   created_by: { type: Schema.Types.ObjectId, ref: 'Employees', required: true },
  last_update: { type: Date, default: Date.now, required: true }
  //   updated_by: { type: Schema.Types.ObjectId, ref: 'Employees', required: true }
})

const Ingredients = mongoose.model('Ingredients', IngredientsSchema)
export default Ingredients
