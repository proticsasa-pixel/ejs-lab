const {restaurant} = require('./data.js')
const express = require("express");
const morgan = require("morgan");
const app = express();

app.use(morgan("dev"));



// EJS ROUTES WITH .RENDER
// GET ROUTE - INDEX
app.get("/", (req, res) => {

      console.log(restaurant)
      res.render("home.ejs", {restaurant: restaurant})
});

// SHOW ROUTE
// server.js

app.get("/:itemId", (req, res) => {
  // console.log(req.params);
  const index = req.params.itemId;
  // render show.ejs, and pass it a single item object
  res.render("show.ejs", {
    item: inventory[index],
  });
});


app.listen(3000, () => {
  console.log("Listening on port 3000");
});