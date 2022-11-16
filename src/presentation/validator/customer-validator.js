import { body } from 'express-validator'
import { cpf } from 'cpf-cnpj-validator';
import isValidCep from '@brazilian-utils/is-valid-cep';

var cpfMaxMin = ({ 'max': 14, 'min': 11 });
var phoneMaxMin = ({ 'max': 14, 'min': 11 });
var postalCodeMaxMin = ({ 'max': 9, 'min': 8 });

const customerValidators = [
               body('full_name').trim().escape().notEmpty({ ignore_whitespace: true }).isString(),
               body('email').isEmail(),
               body('email_confirmation').isEmail(),
               body('cpf').isLength({ max: cpfMaxMin.max }).customSanitizer((value) => { return value.replace(/\D/g, "") })
                              .matches(`\\d{${cpfMaxMin.min}}$`).custom(async value => {
                                             cpf.isValid(value)
                              }),
               body('cellphone').isLength({ max: phoneMaxMin.max }).customSanitizer((value) => { return value.replace(/\D/g, "") }).matches(`\\d{${phoneMaxMin.min}}$`),
               body('whatsapp').isBoolean().withMessage('only boolean value'),
               body('email_sms').isBoolean().withMessage('only boolean value'),

               body('birthdate').notEmpty().trim().toDate().isISO8601().withMessage('only datetime values'),
               body('country').isAlpha().notEmpty(),
               body('city').isAlpha().notEmpty(),
               body('postal_code').isLength({ max: postalCodeMaxMin.max }).customSanitizer((value) => { return value.replace(/\D/g, "") }).matches(`\\d{${postalCodeMaxMin.min}}$`).custom(async value => {
                              isValidCep(value)
               }),
               body('address').exists({ checkFalsy: true }).notEmpty().isString(),
]


export default customerValidators