const Phone = require('../models/Phone');

const getAll = async (req, res, next) => {
  try {
    const phones = await Phone.find();
    return res.status(200).json(phones);
  } catch (err) {
    return next(err);
  }
};

const getById = async (req, res, next) => {
  try {
    const { idPhone } = req.params;
    const phone = await Phone.findById(idPhone);
    return res.status(200).json(phone);
  } catch (err) {
    return next(err);
  }
};

const deletePhone = async (req, res, next) => {
  try {
    const { idPhone } = req.params;
    const deletedPhone = await Phone.findByIdAndDelete(idPhone);
    return res.status(200).json(deletedPhone);
  } catch (err) {
    return next(err);
  }
};

const createPhone = async (req, res, next) => {
  try {
    const {
      id,
      name,
      manufacturer,
      description,
      color,
      price,
      imageFileName,
      screen,
      processor,
      ram
    } = req.body;

    const newPhone = new Phone({
      id,
      name,
      manufacturer,
      description,
      color,
      price,
      imageFileName,
      screen,
      processor,
      ram
    });

    await newPhone.validate();

    const createdPhone = await newPhone.save();
    return res.status(200).json(createdPhone);
  } catch (err) {
    return next(err);
  }
};

module.exports = {
  getAll,
  getById,
  deletePhone,
  createPhone
};
