import { Router } from 'express'
import { body } from 'express-validator'


import createCustomer from '../controllers/customer-controller.js'
import customerValidators from '../validator/customer-validator.js'

const router = Router()
router.post('/', customerValidators, createCustomer)



export default router