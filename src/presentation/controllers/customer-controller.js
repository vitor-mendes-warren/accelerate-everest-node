import { validationResult } from 'express-validator'
import Customer from '../../domain/user/model/user_model.js'

const customerAddedList = [];
class CustomerController {


    createCustomer(req, res,) {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.mapped() })
        }
        var newCustomer = new Customer(req.body);
        customerAddedList.push(newCustomer);
        console.log(customerAddedList);
        res.status(200).json({ status: "success", customer_created: newCustomer });
    }



}




export default new CustomerController().createCustomer