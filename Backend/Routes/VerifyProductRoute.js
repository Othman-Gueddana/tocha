const express = require("express");
const router = express.Router();
const VerifyProducts = require("../Models/ProductVerifyModel.js");
const verify = require("./VerificationToken.js");

router.get("/", async (req, res) => {
  await VerifyProducts.findAll().then((verifyProducts) => res.json(verifyProducts));
});

router.get("/:id", async (req, res) => {
  await VerifyProducts.findByPk(req.params.id).then((verifyProducts) => res.json(verifyProducts));
});

router.post("/food", async (req, res) => {
  await VerifyProducts.create({
    name:req.body.name,
    oldPrice:req.body.oldPrice,
    newPrice:req.body.newPrice,
    description:req.body.description,
    category:req.body.category,
    image:req.body.image,
    ownerId:req.body.ownerId,
    ownerType:Sequelize.STRING,
    expiredDate:Sequelize.STRING,
    creationDate:req.body.creationDate,
    quantity:req.body.quantity
  })
});

router.put("/food/:id", async (req, res) => {
  VerifyProducts.findByPk(req.params.id).then((verifyProducts) => {
    verifyProducts
      .update({
        name:req.body.name,
        oldPrice:req.body.oldPrice,
        newPrice:req.body.newPrice,
        description:req.body.description,
        category:req.body.category,
        image:req.body.image,
        ownerId:req.body.ownerId,
        ownerType:Sequelize.STRING,
        expiredDate:Sequelize.STRING,
        creationDate:req.body.creationDate,
        quantity:req.body.quantity
      })
      .then((verifyProducts) => {
        res.json(verifyProducts);
      });
  });
});
router.post("/clean", async (req, res) => {
    await VerifyProducts.create({
      name:req.body.name,
      oldPrice:req.body.oldPrice,
      newPrice:req.body.newPrice,
      description:req.body.description,
      category:req.body.category,
      image:req.body.image,
      ownerId:req.body.ownerId,
      ownerType:req.body.ownerType,
      expiredDate:req.body.expiredDate,
      creationDate:req.body.creationDate,
      quantity:req.body.quantity
    })
  });
  
  router.put("/clean/:id", async (req, res) => {
    VerifyProducts.findByPk(req.params.id).then((verifyProducts) => {
      verifyProducts
        .update({
          name:req.body.name,
          oldPrice:req.body.oldPrice,
          newPrice:req.body.newPrice,
          description:req.body.description,
          category:req.body.category,
          image:req.body.image,
          ownerId:req.body.ownerId,
          ownerType:req.body.ownerType,
          expiredDate:req.body.expiredDate,
          creationDate:req.body.creationDate,
          quantity:req.body.quantity
        })
        .then((verifyProducts) => {
          res.json(verifyProducts);
        });
    });
  });
  router.post("/elec", async (req, res) => {
    await VerifyProducts.create({
      name:req.body.name,
      oldPrice:req.body.oldPrice,
      newPrice:req.body.newPrice,
      description:req.body.description,
      category:req.body.category,
      image:req.body.image,
      ownerId:req.body.ownerId,
      ownerType:req.body.ownerType,
      creationDate:req.body.creationDate,
      device:req.body.device,
      quantity:req.body.quantity
     
    })
  });
  
  router.put("/elec/:id", async (req, res) => {
    VerifyProducts.findByPk(req.params.id).then((verifyProducts) => {
      verifyProducts
        .update({
          name:req.body.name,
          oldPrice:req.body.oldPrice,
          newPrice:req.body.newPrice,
          description:req.body.description,
          category:req.body.category,
          image:req.body.image,
          ownerId:req.body.ownerId,
          ownerType:req.body.ownerType,
          creationDate:req.body.creationDate,
          device:req.body.device,
          quantity:req.body.quantity
        })
        .then((verifyProducts) => {
          res.json(verifyProducts);
        });
    });
  });
  router.post("/house", async (req, res) => {
    await VerifyProducts.create({
      name:req.body.name,
      oldPrice:req.body.oldPrice,
      newPrice:req.body.newPrice,
      description:req.body.description,
      category:req.body.category,
      image:req.body.image,
      ownerId:req.body.ownerId,
      ownerType:req.body.ownerType,
      creationDate:req.body.creationDate,
      device:req.body.device,
      quantity:req.body.quantity
    })
  });
  
  router.put("/house/:id", async (req, res) => {
    VerifyProducts.findByPk(req.params.id).then((verifyProducts) => {
      verifyProducts
        .update({
          name:req.body.name,
          oldPrice:req.body.oldPrice,
          newPrice:req.body.newPrice,
          description:req.body.description,
          category:req.body.category,
          image:req.body.image,
          ownerId:req.body.ownerId,
          ownerType:req.body.ownerType,
          creationDate:req.body.creationDate,
          device:req.body.device,
          quantity:req.body.quantity
        })
        .then((verifyProducts) => {
          res.json(verifyProducts);
        });
    });
  });
  router.post("/clothes", async (req, res) => {
    await VerifyProducts.create({
      name:req.body.name,
      oldPrice:req.body.oldPrice,
      newPrice:req.body.newPrice,
      description:req.body.description,
      category:req.body.category,
      image:req.body.image,
      ownerId:req.body.ownerId,
      ownerType:req.body.ownerType,
      humanKind:req.body.humanKind,
      quantity:req.body.quantity
    })
  });
  
  router.put("/clothes/:id", async (req, res) => {
    VerifyProducts.findByPk(req.params.id).then((verifyProducts) => {
      verifyProducts
        .update({
          name:req.body.name,
          oldPrice:req.body.oldPrice,
          newPrice:req.body.newPrice,
          description:req.body.description,
          category:req.body.category,
          image:req.body.image,
          ownerId:req.body.ownerId,
          ownerType:req.body.ownerType,
          humanKind:req.body.humanKind,
          quantity:req.body.quantity
        })
        .then((verifyProducts) => {
          res.json(verifyProducts);
        });
    });
  });
  router.post("/fourni", async (req, res) => {
    await VerifyProducts.create({
      name:req.body.name,
      oldPrice:req.body.oldPrice,
      newPrice:req.body.newPrice,
      description:req.body.description,
      category:req.body.category,
      image:req.body.image,
      ownerId:req.body.ownerId,
      ownerType:req.body.ownerType,
      type:req.body.type,
      quantity:req.body.quantity
    })
  });
  
  router.put("/fourni/:id", async (req, res) => {
    VerifyProducts.findByPk(req.params.id).then((verifyProducts) => {
      verifyProducts
        .update({
          name:req.body.name,
          oldPrice:req.body.oldPrice,
          newPrice:req.body.newPrice,
          description:req.body.description,
          category:req.body.category,
          image:req.body.image,
          ownerId:req.body.ownerId,
          ownerType:req.body.ownerType,
          type:req.body.type,
          quantity:req.body.quantity
        })
        .then((verifyProducts) => {
          res.json(verifyProducts);
        });
    });
  });
  router.post("/labo", async (req, res) => {
    await VerifyProducts.create({
      name:req.body.name,
      oldPrice:req.body.oldPrice,
      newPrice:req.body.newPrice,
      description:req.body.description,
      category:req.body.category,
      image:req.body.image,
      ownerId:req.body.ownerId,
      ownerType:req.body.ownerType,
      expiredDate:req.body.expiredDate,
      quantity:req.body.quantity
    })
  });
  
  router.put("/labo/:id", async (req, res) => {
    VerifyProducts.findByPk(req.params.id).then((verifyProducts) => {
      verifyProducts
        .update({
          name:req.body.name,
          oldPrice:req.body.oldPrice,
          newPrice:req.body.newPrice,
          description:req.body.description,
          category:req.body.category,
          image:req.body.image,
          ownerId:req.body.ownerId,
          ownerType:req.body.ownerType,
          expiredDate:req.body.expiredDate,
          quantity:req.body.quantity
        })
        .then((verifyProducts) => {
          res.json(verifyProducts);
        });
    });
  });
router.delete("/:id", async (req, res) => {
  await VerifyProducts.findByPk(req.params.id)
    .then((verifyProducts) => {
      verifyProducts.destroy();
    })
    .then(() => {
      res.json("deleted");
    });
});

router.delete("/", async (req, res) => {
  await VerifyProducts.destroy({ where: {}, truncate: true }).then(() =>
    res.json("cleared")
  );
});

module.exports = router;