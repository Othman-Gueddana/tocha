const joi = require('@hapi/joi')

const loginValidation = data =>{
    const validation = joi.object({
        email:joi.string().required().email(),
        password:joi.string().min(8).required(),

    })
    return validation.validate(data);
}

module.exports.loginValidation = loginValidation ;