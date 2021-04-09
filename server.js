const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use("/users", require("./routes/user.routes"));

app.get('/', (req, res) => res.send('Welcome to Students Database!'))
app.listen(port, () => console.log(`Example app listening on port port!`))