const express = require("express");
const app = express();
const cors = require("cors");
var port = process.env.PORT || 8000;

app.use(cors());
app.use(express.static("public"));

app.listen(port, err => {
  err
    ? console.log("port connection failed")
    : console.log(`listening on port ${port}`);
});
