class UserController {


    createCustomer(req, res, next) {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.mapped() })
        }
        res.send("Hello Worldsdsd!");
        res.status(200).end('success');
        // res.status(200).send(Array < object > [

        // ]);

    }



    handle(req, res, next) {
        res.send("Hello World!");
    }
}

export default new UserController().createCustomer