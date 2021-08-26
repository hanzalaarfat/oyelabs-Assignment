const ans3 = require("../Model/ans3Model");

exports.addNameEmail = async (req, res) => {
  const { name, email } = req.body;
  try {
    ////////////////////// check before adding phone no exist or not//////////////////////////

    const emailExist = await ans3.findOne({ email: email });
    if (emailExist) {
      console.log(emailExist);
      return res.status(422).json({ error: "Email  alreday Exist" });
    }

    ////////////////////////////////// new Coustomer add ///////////////////////

    const user = new ans3({
      name,
      email,
    });

    const data = await user.save();
    if (data) {
      res.status(201).json({ message: " successfuly data added" });
    } else {
      res.status(500).json({ error: "Faild data  " });
    }
  } catch (err) {
    console.log(err);
    res.status(400).send({ message: err });
  }
};

exports.ExistEmailThenUpdateName = async (req, res) => {
  /////////// object Destructering /////////////////

  const { name, email } = req.body;

  try {
    ////////////////////// check before email exist or not//////////////////////////

    const emailExist = await ans3.findOne({ email: email });
    if (emailExist) {
      ans3
        .findOneAndUpdate(
          { email: email },
          {
            $set: {
              ///  name will be only update
              name: name,
            },
          },
          { new: true } // return updated post
        )
        .exec(function (error, data) {
          if (error) {
            return res.status(400).send({ msg: "Update failed!" });
          }

          return res.status(200).send(data);
        });
    }

    ////////////////////////////////// not user Exist  ///////////////////////
    else {
      return res.status(400).json({ error: "Email id is not exist" });
    }
  } catch (err) {
    console.log(err);
    res.status(400).send({ message: err });
  }
};
