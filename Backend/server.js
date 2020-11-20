const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const path = require("path")

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use(express.static('../dist/bekhteff'))

app.get("/*", function(req, res){
  res.sendFile(path.join(_dirname + "../dist/bekhteff/index.html"));
});

// Routes 
app.use("/clients",require('./Routes/ClientRoute.js'))
app.use("/companys",require('./Routes/CompanyRoute.js'))
app.use("/feedbacks",require('./Routes/FeedbackRoute.js'))
app.use("/livraisons",require('./Routes/LivraisonRoute.js'))
app.use("/messages",require('./Routes/MessageRoute.js'))
app.use("/products",require('./Routes/ProductRoute.js'))

// Server listening
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`listening at port at http://localhost:${PORT}`);
});