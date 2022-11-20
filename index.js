const app = require("./app");

app.listen(process.env.PORT || 3000, function() {
  console.log("Started express server at port 3000");
});
