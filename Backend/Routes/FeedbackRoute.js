const express = require("express");
const router = express.Router();
const Feedbacks = require("../Models/FeedbackModel.js");
const verify = require("./VerificationToken.js");

router.get("/", async (req, res) => {
  await Feedbacks.findAll().then((feedbacks) => res.json(feedbacks));
});

router.get("/:id", async (req, res) => {
  await Feedbacks.findByPk(req.params.id).then((feedbacks) => res.json(feedbacks));
});

router.post("/register", async (req, res) => {
  await Feedbacks.create({
 text: req.body.text,
 clientName: req.body.clientName,
 clientId: req.body.clientId,
  })
});

router.put("/:id", async (req, res) => {
  Feedbacks.findByPk(req.params.id).then((feedbacks) => {
    feedbacks
      .update({
        text: req.body.text,
        clientName: req.body.clientName,
        clientId: req.body.clientId,
      })
      .then((feedbacks) => {
        res.json(feedbacks);
      });
  });
});

router.delete("/:id", async (req, res) => {
  await Feedbacks.findByPk(req.params.id)
    .then((feedbacks) => {
      feedbacks.destroy();
    })
    .then(() => {
      res.json("deleted");
    });
});

router.delete("/", async (req, res) => {
  await Feedbacks.destroy({ where: {}, truncate: true }).then(() =>
    res.json("cleared")
  );
});

module.exports = router;