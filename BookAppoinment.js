const express = require("express");
const app = express();

const path = require("path");

const sequelize = require("./util/database");

const bodyParser = require("body-parser");
app.set("view engine", "ejs");
app.set("views", "views");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
// app.use(express.static('public'))

const formRoutes = require("./routes/form");

app.use(formRoutes);
// app.get('/',(req,res,next)=>{
//     res.send()
// })
// app.post("/", (req, res, next) => {
//   console.log(JSON.parse(JSON.stringify(req.body)));
// });

sequelize
  .sync()
  .then((result) => {
    // console.log(result);
    app.listen(3000);
  })
  .catch((err) => console.log(err));
