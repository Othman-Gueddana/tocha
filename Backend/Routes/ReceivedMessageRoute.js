const express = require("express");
const router = express.Router();
const ReceivedMessages = require("../Models/ReceivedMessageModel");
const verify = require("./VerificationToken.js");

router.get("/", async (req, res) => {
  await ReceivedMessages.findAll().then((receivedMessages) => res.json(receivedMessages));
});

router.get("/:id", async (req, res) => {
  await ReceivedMessages.findByPk(req.params.id).then((receivedMessages) => res.json(receivedMessages));
});

router.post("/register", async (req, res) => {
  await ReceivedMessages.create({
 text: req.body.text ,
 count: req.body.count,
 senderId: req.body.senderId,
  })
});

router.put("/:id", async (req, res) => {
  ReceivedMessages.findByPk(req.params.id).then((receivedMessages) => {
    receivedMessages
      .update({
        text: req.body.text ,
        count: req.body.count,
        senderId: req.body.senderId,
      })
      .then((receivedMessages) => {
        res.json(receivedMessages);
      });
  });
});

router.delete("/:id", async (req, res) => {
  await ReceivedMessages.findByPk(req.params.id)
    .then((receivedMessages) => {
      receivedMessages.destroy();
    })
    .then(() => {
      res.json("deleted");
    });
});

router.delete("/", async (req, res) => {
  await ReceivedMessages.destroy({ where: {}, truncate: true }).then(() =>
    res.json("cleared")
  );
});

module.exports = router;