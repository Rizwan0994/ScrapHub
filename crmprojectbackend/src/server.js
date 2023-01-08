require('dotenv').config();
const express = require('express');
const leadRoutes = require('./routes/leadsRoutes');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');



app.use(bodyParser.json());
app.use(cors());


app.use('/api', leadRoutes); // api is the base 

const port = process.env.EXPRESS_PORT || 4000;
app.listen(port, () => {
    console.log("port" + port);
});