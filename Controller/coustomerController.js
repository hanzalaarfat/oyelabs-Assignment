const express = require("express");

const Coustomer = require("../Model/coustomerModel");

///////////////// SignUp by Admin //////////////////////////////////

exports.CoustomerSignup = async (req, res) => {
  /////////// object Destructering /////////////////

  const { name, phone } = req.body;

  try {
    ////////////////////// check before adding phone no exist or not//////////////////////////

    const phoneExist = await Coustomer.findOne({ phone: phone });
    if (phoneExist) {
      console.log(phoneExist);
      return res.status(422).json({ error: "Phone Numer  alreday Exist" });
    }

    ////////////////////////////////// new Coustomer add ///////////////////////
    if (process.env.Token == req.body.token) {
      const coustomer = new Coustomer({
        name,
        phone,
      });
      console.log(coustomer);
      const customerRegister = await coustomer.save();
      if (customerRegister) {
        res.status(201).json({ message: "Customer  resgister successfuly" });
      } else {
        res.status(500).json({ error: "Faild to register" });
      }
    } else {
      res.status(400).send({ message: "You are Not authenticate" });
    }
  } catch (err) {
    console.log(err);
    res.status(400).send({ message: err });
  }
};

exports.CoustomerLogin = async (req, res) => {
  /////////// object Destructering /////////////////

  const { phone } = req.body;

  try {
    ////////////////////// check before  phone no exist or not//////////////////////////

    const phoneExist = await Coustomer.findOne({ phone: phone });
    if (phoneExist) {
      // We Can create Tooken here  for user
      res.status(400).send({ message: "Succesfully Login" });
    }

    ////////////////////////////////// not user Exist  ///////////////////////
    else {
      return res.status(400).json({ error: "Don't Have account" });
    }
  } catch (err) {
    console.log(err);
    res.status(400).send({ message: err });
  }
};
