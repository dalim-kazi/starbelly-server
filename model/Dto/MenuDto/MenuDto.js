const joi = require("joi");

const menuSchema = joi.object().keys({
  name: joi.string().required().min(5).max(50),
  recipe: joi.string().required().min(10).max(500),
  image: joi.string().required(),
  category: joi.string().required().min(5).max(200),
  price: joi.number().required(),
  ratting: joi.number().min(0).max(5),
});

const menuValidate = (data) => {
  const result = menuSchema.validate(data);
  return result;
};
module.exports = menuValidate;
