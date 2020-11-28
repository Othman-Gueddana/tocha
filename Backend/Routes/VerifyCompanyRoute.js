const express = require("express");
const router = express.Router();
const VerifyCompanys = require("../Models/CompanyVerifyModel.js");
const { registerCompanyValidation } = require('./Validation.js')
router.get("/", async (req, res) => {
  await VerifyCompanys.findAll().then((verifyCompanys) => res.json(verifyCompanys));
});

router.get("/:id", async (req, res) => {
  await VerifyCompanys.findByPk(req.params.id).then((verifyCompanys) => res.json(verifyCompanys));
});

router.post("/register", async (req, res) => {
  // const {error} = registerCompanyValidation(req.body)
  // if(error) return res.send(error.details[0].message)
  await VerifyCompanys.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    email: req.body.email,
    street: req.body.street,
    city: req.body.city,
    zipCode: req.body.zipCode,
    description: req.body.description,
    phoneNumber1: req.body.phoneNumber1,
    phoneNumber2: req.body.phoneNumber2,
    numberPatent: req.body.numberPatent,
    logo: req.body.logo,
  })
});

router.delete("/:id", async (req, res) => {
  await VerifyCompanys.findByPk(req.params.id)
    .then((verifyCompanys) => {
      verifyCompanys.destroy();
    })
    .then(() => {
      res.json("deleted");
    });
});

module.exports = router;