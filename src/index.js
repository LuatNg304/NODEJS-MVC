const path = require("path");
const express = require("express");
const morgan = require("morgan");
const { engine } = require("express-handlebars");

const app = express();
const port = 3000;
const route = require('./routes')

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded()); //middleware chuye nnhan du lieu tu form html
app.use(express.json()); //dung de gui XMLhtml,axios,
// HTTP logger
// app.use(morgan("combined"));

// Template engine
app.engine(
  "hbs",
  engine({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resource/views"));

//route init
route(app);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
