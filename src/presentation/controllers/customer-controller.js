import { validationResult } from 'express-validator'
import Customer from '../../domain/user/mocks/UserMock.js'

const customerAddedList = [];
class CustomerController {


    createCustomer(req, res, next) {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.mapped() })
        }
        var newCustomer = new Customer(req.body);
        customerAddedList.push(newCustomer);
        console.log(`Usuarios criados ${customerAddedList}`);
        res.status(200).json({ status: "success", customer_created: newCustomer });
    }



}




export default new CustomerController().createCustomer