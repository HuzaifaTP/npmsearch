const express = require("express");
const app = express(); //use express server
app.use(express.json());

app.get("/search", function (req, res) {
  res.send("You will see this on the port number stated"); //sends result to the page
});


app.listen(5000);
