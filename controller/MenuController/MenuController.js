const { allMenuService } = require("../../services/MenuService/MenuService");

const allMenuController = async (req, res, next) => {
  try {
    const result = await allMenuService();
    res.status(200).send(result);
  } catch (error) {
    return next(error, req, res);
  }
};

module.exports = {
  allMenuController,
};
