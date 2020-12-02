const express = require("express");
const router = express.Router();
const SendMessages = require("../Models/SendMessageModel");
const verify = require("./VerificationToken.js");

router.get("/", async (req, res) => {
  await SendMessages.findAll().then((sendMessages) => res.json(sendMessages));
});

router.get("/:id", async (req, res) => {
  await SendMessages.findByPk(req.params.id).then((sendMessages) => res.json(sendMessages));
});

router.post("/register", async (req, res) => {
  await SendMessages.create({
 text: req.body.text ,
 count: req.body.count,
 receiverId: req.body.receiverId,
  })
});

router.put("/:id", async (req, res) => {
  SendMessages.findByPk(req.params.id).then((sendMessages) => {
    sendMessages
      .update({
        text: req.body.text ,
        count: req.body.count,
        receiverId: req.body.receiverId,
      })
      .then((sendMessages) => {
        res.json(sendMessages);
      });
  });
});

router.delete("/:id", async (req, res) => {
  await SendMessages.findByPk(req.params.id)
    .then((sendMessages) => {
      sendMessages.destroy();
    })
    .then(() => {
      res.json("deleted");
    });
});

router.delete("/", async (req, res) => {
  await SendMessages.destroy({ where: {}, truncate: true }).then(() =>
    res.json("cleared")
  );
});

module.exports = router;