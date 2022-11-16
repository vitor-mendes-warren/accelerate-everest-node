import { Router } from 'express'
import { body } from 'express-validator'


import createCustomer from '../controllers/user-controller.js' //! a
import customerValidators from '../validator/customer-validator.js'

const router = Router()
router.post('/', body('email').isEmail(), createCustomer)



export default router