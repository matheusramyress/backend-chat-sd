const express = require('express');
const routes = require('./src/routes/routes');
const { errors } = require('celebrate');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(express.json());
app.use(routes);
app.use(errors());

console.log();
app.listen(process.env.PORT || 3005, () => console.log("Servidor Online"));