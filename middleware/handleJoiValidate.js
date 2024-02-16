/**
 * Middleware function to handle Joi validation errors.
 * @param {function} validate - Joi validation function
 * @returns {function} Express middleware function
 */

const { BadRequest } = require("../utils/error");

const handleJoiValidate = (validate) => {
  return (req, res, next) => {
    try {
      const result = validate(req.body);
      const isValid = result.error == null;
      if (isValid) {
        return next();
      }
      const { details } = result.error;
      const message = details?.map((e) => e.message);
      const msg = message.join(",");
      throw new BadRequest(msg);
    } catch (error) {
      return next(error);
    }
  };
};

module.exports = handleJoiValidate;
