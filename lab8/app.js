
const express = require("express");
const app = express();
const static = express.static(__dirname + '/public');
const bodyParser = require("body-parser");
const morgan = require("morgan");

const configRoutes = require("./routes");
const exphbs = require("express-handlebars");

app.use("/public", static);
app.use(morgan('dev'));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({
    extended: true
}));

configRoutes(app);

app.listen(3000, () => {
	console.log("Server is listening on port 3000");
});