const express = require("express");
const router = express.Router();
const Messages = require("../Models/MessageModel");
const verify = require("./VerificationToken.js");

router.get("/", async (req, res) => {
  await Messages.findAll().then((messages) => res.json(messages));
});

router.get("/:id", async (req, res) => {
  await Messages.findByPk(req.params.id).then((messages) => res.json(messages));
});

router.post("/register", async (req, res) => {
  await Messages.create({
 messageSent: req.body.messageSent ,
 messageReceived: req.body.messageReceived,
 senderId: req.body.senderId,
 receiverId: req.body.receiverId,
  })
});

router.put("/:id", async (req, res) => {
  Messages.findByPk(req.params.id).then((messages) => {
    messages
      .update({
        messageSent: req.body.messageSent ,
        messageReceived: req.body.messageReceived,
        senderId: req.body.senderId,
        receiverId: req.body.receiverId,
      })
      .then((messages) => {
        res.json(messages);
      });
  });
});

router.delete("/:id", async (req, res) => {
  await Messages.findByPk(req.params.id)
    .then((messages) => {
      messages.destroy();
    })
    .then(() => {
      res.json("deleted");
    });
});

router.delete("/", async (req, res) => {
  await Messages.destroy({ where: {}, truncate: true }).then(() =>
    res.json("cleared")
  );
});

module.exports = router;