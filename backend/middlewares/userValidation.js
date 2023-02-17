const { body } = require('express-validator')

const userCreateValidation = () => {
    return [
        body('name')
            .isString()
            .withMessage('Name is a required field.')
            .isLength({ min: 3 })
            .withMessage('Name must have at least 3 characters.'),

        body('email')
            .isString()
            .withMessage('Email field is required')
            .isEmail()
            .withMessage("Invalid email"),

        body('password')
            .isString()
            .withMessage('Insert password')
            .isLength({ min: 6 })
            .withMessage('Password must have at least 6 characters.'),

        body('confirmPassword')
            .isString()
            .withMessage('Confirm password')
            .custom((value, {req}) => {
                if(value != req.body.password){
                    throw new Error('Passwords must be the same!')
                }
                return true
            })

    ]

}

module.exports = { userCreateValidation }