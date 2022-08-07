import mongoose from 'mongoose'
const Schema = mongoose.Schema

const RolesSchema = new Schema({
    role: { type: String, required: true }
})

const Roles = mongoose.model('Roles', RolesSchema)
export default Roles
