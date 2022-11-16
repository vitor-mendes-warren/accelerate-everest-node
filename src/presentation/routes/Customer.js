import { Router } from 'express'
import { body } from 'express-validator'


import handle from '../controllers/customer_controller.js'
import customerValidators from '../validator/customer_validator.js'

const customerRoutes = Router()
customerRoutes.post('/', customerValidators, handle)



export default customerRoutes