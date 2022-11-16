import { validationResult } from 'express-validator'
import Customer from '../../domain/user/mocks/UserMock.js'

class CustomerController {


    createCustomer(req, res, next) {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.mapped() })
        }
        res.status(200).json({ status: "success", customer_added: new Customer(req.body) });
    }



}




export default new CustomerController().createCustomer