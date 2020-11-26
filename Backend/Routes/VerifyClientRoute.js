const express = require("express");
const router = express.Router();
const VerifyClients = require("../Models/ClientVerifyModel.js");
const { registerClientValidation } = require('./Validation.js')

router.get("/", async (req, res) => {
  await VerifyClients.findAll().then((verifyClients) => res.json(verifyClients));
});

router.get("/:id", async (req, res) => {
  await VerifyClients.findByPk(req.params.id).then((verifyClients) => res.json(verifyClients));
});

router.post("/register", async (req, res) => {
  const {error} = registerClientValidation(req.body)
  if(error) return res.send(error.details[0].message)
  await VerifyClients.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    password: req.body.password,
    email: req.body.email,
    street: req.body.street,
    city: req.body.city,
    zipCode: req.body.zipCode,
    phoneNumber: req.body.phoneNumber,
  })
});

router.delete("/:id", async (req, res) => {
  await VerifyClients.findByPk(req.params.id)
    .then((verifyClients) => {
      verifyClients.destroy();
    })
    .then(() => {
      res.json("deleted");
    });
});

module.exports = router;