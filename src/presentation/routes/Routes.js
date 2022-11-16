import { Router } from 'express'
import customerRouter from './Customer.js'

const router = Router()


router.use("/customer", customerRouter);

export default router
