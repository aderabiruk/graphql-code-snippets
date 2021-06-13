/* eslint-disable camelcase */
import transform_mongoose_error from 'mongoose-validation-error-handler'
/* eslint-disable camelcase */

import User from '../models/iam/User'

export default {
  findOne,
  findById,
  findMany
}

function findMany (query = {}, sort = {}) {
  return new Promise((resolve, reject) => {
    User.find({ ...query, deleted_at: null }).sort(sort).exec((error, result) => {
      console.log(error, result)
      if (error) {
        reject(transform_mongoose_error(error, { capitalize: true, humanize: true }))
      } else {
        resolve(result)
      }
    })
  })
}

async function findOne (query = {}, sort = {}) {
  return new Promise((resolve, reject) => {
    User.findOne({ ...query, deleted_at: null }).sort(sort).exec((error, result) => {
      if (error) {
        reject(transform_mongoose_error(error, { capitalize: true, humanize: true }))
      } else {
        resolve(result)
      }
    })
  })
}

async function findById (id) {
  return new Promise((resolve, reject) => {
    User.findById(id).exec((error, result) => {
      if (error) {
        reject(transform_mongoose_error(error, { capitalize: true, humanize: true }))
      } else {
        resolve(result)
      }
    })
  })
}
