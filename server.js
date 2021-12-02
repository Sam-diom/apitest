import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import routes from "./src/routes/crmRoutes.js";

const app = express();
const PORT = 3000;

//connexion mangoose

async function asyncCall() {
  // mongoose.Promise = global.Promise;
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/CRMdb");
    console.log("conneted mongodb");
  } catch (err) {
    console.log("err", err);
  }
}
//{
//  useNewUrlParser: true
//   });
asyncCall();

//bodyparser

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

app.use(express.static('public'))

app.get("/", (req, res) =>
  res.send(`Serveur node et express sur port ${PORT}`)
);

app.listen(PORT, () => console.log(`Votre serveur est sur le port ${PORT}`));
