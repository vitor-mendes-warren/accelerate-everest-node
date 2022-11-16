import { body } from 'express-validator'





const customerValidators = [
               body('email').isEmail(),
]


export default customerValidators
