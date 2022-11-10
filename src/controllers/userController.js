const fs = require("fs");
const bcrypt = require("bcryptjs");
const { User } = require("../models");

exports.updateUser = async (req, res, next) => {
  try {
    const {
      firstName,
      lastName,
      displayName,
      password,
      address,
      street,
      subDistrict,
      district,
      city,
      zipcode,
      country,
      cardNumber,
      expiredDate,
      cvc
    } = req.body;
    const hashedPassword = await bcrypt.hash(password, 12);

    await User.update(
      {
        firstName,
        lastName,
        displayName,
        password: hashedPassword,
        address,
        street,
        subDistrict,
        district,
        city,
        zipcode,
        country,
        cardNumber,
        expiredDate,
        cvc
      },
      {
        where: { id: req.user.id }
      }
    );

    const user = await User.findOne({
      where: { id: req.user.id },
      attributes: { exclude: "password" }
    });

    res.status(200).json({ user });
  } catch (err) {
    next(err);
  }
};
