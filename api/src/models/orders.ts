import mongoose from 'mongoose'
const Schema = mongoose.Schema

const OrdersSchema = new Schema({
  food_name: { type: Schema.Types.ObjectId, ref: 'Foods', required: true },
  food_type: { type: Schema.Types.ObjectId, ref: 'FoodTypes', required: true },
  changed_ingredients: {
    remove: [
      { type: Schema.Types.ObjectId, ref: 'Ingredients', required: false }
    ],
    add: [{ type: Schema.Types.ObjectId, ref: 'Ingredients', required: false }]
  },
  food_price: { type: Number, required: true },
  ingredients_price: { type: Number, required: false },
  customer_name: { type: String, required: true },
  phone_number: { type: Number, required: true },
  address: { type: String, required: true },
  created_at: { type: Date, default: Date.now, required: true }
})

const Orders = mongoose.model('Orders', OrdersSchema)
export default Orders
