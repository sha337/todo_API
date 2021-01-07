const express = require('express');
const app = express();
const pool = require('./db');

app.use(express.json());

//requiring and using routes
const Routes = require("./routes/routes");
app.use(Routes);

app.listen(process.env.PORT || 3000, process.env.IP, () => {
    console.log("server running on local host");
});