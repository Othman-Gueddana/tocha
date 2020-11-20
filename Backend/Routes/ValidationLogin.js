const joi = require('@hapi/joi')

const loginValidation = data =>{
    const validation = joi.object({
        email:joi.string().email(),
        password:joi.string()

    })
    return validation.validate(data);
}

module.exports.loginValidation = loginValidation ;