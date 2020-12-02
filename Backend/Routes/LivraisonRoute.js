const express = require("express");
const router = express.Router();
const Livraisons = require("../Models/LivraisonModel.js");
const verify = require("./VerificationToken.js");

router.get("/", async (req, res) => {
  
  await Livraisons.findAll().then((livraisons) => res.json(livraisons));
});

router.get("/:id", async (req, res) => {
  await Livraisons.findByPk(req.params.id).then((livraisons) => res.json(livraisons));
});

router.post("/register", async (req, res) => {
  console.log(req.body)
  await Livraisons.create({
    status: req.body.status,
    clientName: req.body.clientName,
    clientId: req.body.clientId,
    clientEmail: req.body.clientEmail,
    clientNumber: req.body.clientNumber,
    clientStreet: req.body.clientStreet,
    clientCity: req.body.clientCity,
    clientZip: req.body.clientZip,
    productId: req.body.productId,
    productName: req.body.productName,
    price: req.body.price,
    quantity: req.body.quantity,
  })
});

router.put("/:id", async (req, res) => {
  Livraisons.findByPk(req.params.id).then((livraisons) => {
    livraisons
      .update({
        status: req.body.status,
        clientName: req.body.clientName,
        clientId: req.body.clientId,
        clientEmail: req.body.clientEmail,
        clientNumber: req.body.clientNumber,
        clientStreet: req.body.clientStreet,
        clientCity: req.body.clientCity,
        clientZip: req.body.clientZip,
        productId: req.body.productId,
        productName: req.body.productName,
        price: req.body.price,
        quantity: req.body.quantity,
      })
      .then((livraisons) => {
        res.json(livraisons);
      });
  });
});

router.delete("/:id", async (req, res) => {
  await Livraisons.findByPk(req.params.id)
    .then((livraisons) => {
      livraisons.destroy();
    })
    .then(() => {
      res.json("deleted");
    });
});

router.delete("/", async (req, res) => {
  await Livraisons.destroy({ where: {}, truncate: true }).then(() =>
    res.json("cleared")
  );
});

module.exports = router;