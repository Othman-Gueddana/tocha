const express = require("express");
const router = express.Router();
const Purchases = require("../Models/PurchaseModel.js");
const verify = require("./VerificationToken.js");

router.get("/", async (req, res) => {
  await Purchases.findAll().then((purchases) => res.json(purchases));
});

router.get("/:id", async (req, res) => {
  await Purchases.findByPk(req.params.id).then((purchases) => res.json(purchases));
});

router.post("/", async (req, res) => {
  await Purchases.create({
    clientId: req.body.clientId,
    productId: req.body.productId,
  })
});

router.put("/:id", async (req, res) => {
  Purchases.findByPk(req.params.id).then((purchases) => {
    purchases
      .update({
        clientId: req.body.clientId,
        productId: req.body.productId,
      })
      .then((purchases) => {
        res.json(purchases);
      });
  });
});

router.delete("/:id", async (req, res) => {
  
  await Purchases.findByPk(req.params.id).then((purchases) => {
      purchases.destroy();
    })
    .then(() => {
      res.json("deleted");
    });
});

router.delete("/", async (req, res) => {
  await Purchases.destroy({ where: {}, truncate: true }).then(() =>
    res.json("cleared")
  );
});

module.exports = router;