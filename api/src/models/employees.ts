import mongoose from 'mongoose'
import Roles from './roles'
const Schema = mongoose.Schema


const EmployeesSchema = new Schema({
    name: { type: String, required: true },
    surname: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    role: { type: Schema.Types.ObjectId, ref: 'Roles' },
})


const Employees = mongoose.model('employees', EmployeesSchema)
export default Employees