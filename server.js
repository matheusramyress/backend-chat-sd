const express = require('express');
// const path = require('path');//front
const routes = require('./src/routes/routes');
const { errors } = require('celebrate');
const cors = require('cors');
//const session = require('express-session');//front
//const flash = require('express-flash');//front

const app = express();

app.use(cors());

// app.use(express.static(path.join(__dirname, 'public')));//css, front
// app.set('views', path.join(__dirname,'public'));//html, front
// app.engine('html', require('ejs').renderFile);
// app.set('view engine', 'ejs');

app.use(express.json());
app.use(routes);
app.use(errors());

console.log();
app.listen(3005, () => console.log("Servidor Online na porta 3005"));