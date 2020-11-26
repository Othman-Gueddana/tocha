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
  await Livraisons.create({
    status: req.body.status,
    clientName: req.body.clientName,
    clientId: req.body.clientId,
    productId: req.body.productId,
    status: req.body.quantity,
  })
});

router.put("/:id", async (req, res) => {
  Livraisons.findByPk(req.params.id).then((livraisons) => {
    livraisons
      .update({
        status: req.body.status,
       clientName: req.body.clientName,
       clientId: req.body.clientId,
       productId: req.body.productId,
       status: req.body.quantity,
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