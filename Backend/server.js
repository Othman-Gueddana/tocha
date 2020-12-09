const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const path = require("path")

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use(express.static('../bekhtef/dist/bekhteff'))

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname,"../bekhtef/src","index.html"));
});
// Routes 
app.use("/clients",require('./Routes/ClientRoute.js'))
app.use("/companys",require('./Routes/CompanyRoute.js'))
app.use("/feedbacks",require('./Routes/FeedbackRoute.js'))
app.use("/livraisons",require('./Routes/LivraisonRoute.js'))
app.use("/sendMessages",require('./Routes/SendMessageRoute.js'))
app.use("/receivedMessages",require('./Routes/ReceivedMessageRoute.js'))
app.use("/products",require('./Routes/ProductRoute.js'))
app.use("/purchases",require('./Routes/PurchaseRoute.js'))
app.use("/verifyProducts",require('./Routes/VerifyProductRoute.js'))
app.use("/verifyClients",require('./Routes/VerifyClientRoute.js'))
app.use("/verifyCompanys",require('./Routes/VerifyCompanyRoute.js'))
// Server listening
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`listening at port at http://localhost:${PORT}`);
});