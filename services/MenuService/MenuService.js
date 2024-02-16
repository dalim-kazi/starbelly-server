const menuModel = require("../../model/MenuModel/MenuModel");
const { NotFound } = require("../../utils/error");

const allMenuService = async () => {
  try {
    const menus = await menuModel.find().exec();
    return menus;
  } catch (error) {
    throw new NotFound(error);
  }
};

module.exports = {
  allMenuService,
};
