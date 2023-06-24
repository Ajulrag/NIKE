const Joi = require('joi')

const schema = {
  loginSchema: Joi.object({
    email: Joi.string().email().required().messages({
      'any.required': 'Email is required'
    }),
    password: Joi.string().min(4).required().messages({
      'any.required': 'Password is required'
    })
  }),

  signupSchema: Joi.object({
    name: Joi.string().trim().required().messages({
      'any.required': 'Name is required'
    }),
    email: Joi.string().email().required().messages({
      'any.required': 'Email is required'
    }),
    password: Joi.string().min(4).required().messages({
      'any.required': 'Password is required'
    })
  })
}

module.exports = {
  schema
}
