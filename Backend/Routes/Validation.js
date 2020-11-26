const joi = require('@hapi/joi')

// const loginValidation = data =>{
//     const validation = joi.object({
//         email:joi.string().email(),
//         password:joi.string()

//     })
//     return validation.validate(data);
// }

const registerClientValidation = data =>{
    const validation = joi.object({
        firstName:joi.string().min(3).required(),
        lastName:joi.string().min(3).required(),
        email:joi.string().required().email(),
        password:joi.string().min(8).required(),
        street : joi.string().required(),
        city : joi.string().required(),
        zipCode: joi.number().required().min(4), 
        phoneNumber : joi.number().required().max(8),
    })
    return validation.validate(data);
}
const registerCompanyValidation = data =>{
    const validation = joi.object({
        name:joi.string().min(3).required(),
        email:joi.string().required().email(),
        password:joi.string().min(8).required(),
        street : joi.string().required(),
        city : joi.string().required(),
        zipCode: joi.number().required().min(4), 
        description : joi.string().required(),
        phoneNumber1 : joi.number().required().max(8),
        phoneNumber2 : joi.number().required().max(8),
        numberPatent : joi.string().required().min(8),
        logo : joi.string().required(),
    })
    return validation.validate(data);
}
// module.exports.loginValidation = loginValidation ;
module.exports.registerClientValidation = registerClientValidation;
module.exports.registerCompanyValidation = registerCompanyValidation