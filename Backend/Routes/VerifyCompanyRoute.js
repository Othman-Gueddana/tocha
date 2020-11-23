const express = require("express");
const router = express.Router();
const VerifyCompanys = require("../Models/CompanyVerifyModel.js");

router.get("/", async (req, res) => {
  await VerifyCompanys.findAll().then((verifyCompanys) => res.json(verifyCompanys));
});

router.get("/:id", async (req, res) => {
  await VerifyCompanys.findByPk(req.params.id).then((verifyCompanys) => res.json(verifyCompanys));
});

router.post("/register", async (req, res) => {
  await VerifyCompanys.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    email: req.body.email,
    address: req.body.address,
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