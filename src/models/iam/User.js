import { model, Schema } from 'mongoose'

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    index: true,
    trim: true,
    sparse: true
  },
  password: {
    type: String,
    required: false
  },
  status: {
    type: String,
    required: true
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date,
    default: Date.now
  },
  deleted_at: {
    type: Date,
    default: null
  },
  created_by: {
    type: String,
    required: false
  },
  deleted_by: {
    type: String,
    required: false,
    default: null
  }
}, { collection: 'users' })

export default model('User', UserSchema)
