const User = require("../models/user");
const path = require("path");

exports.getForm = (req, res) => {
  User.findAll()
    .then((data) => {
      res.render("form", {
        values: data,
        pageTitle: "All Products",
        path: "/",
      });
    })
    .catch((err) => console.log(err));
};

exports.postForm = (req, res, next) => {
  const name = req.body.name;
  const phoneNo = req.body.phoneNo;
  const mailId = req.body.mailId;
  User.create({
    name: name,
    phoneNo: phoneNo,
    email: mailId,
  })
    .then((data) => console.log())
    .catch((err) => console.log(err));
  res.redirect("/");
};

exports.postDeleteProduct = (req, res, next) => {
  const elementId = req.body.id;
  User.destroy({ where: { id: elementId } })
    .then((result) => {
      console.log("deleted successfully");
    })
    .catch((err) => console.log(err));
  res.redirect("/");
};
