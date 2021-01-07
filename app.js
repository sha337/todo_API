const express = require('express');
const app = express();
const pool = require('./models/db');

app.use(express.json());

//requiring and using routes
const Routes = require("./routes/routes");
app.use(Routes);

app.listen(process.env.PORT || 3000, process.env.IP, () => {
    console.log("server started");
});