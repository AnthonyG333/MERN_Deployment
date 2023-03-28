const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT;
const cors = require("cors")

require("./config/mongoose.config");

app.use(cors());
app.use( express.json());
app.use( express.urlencoded({extended : true}));

require("./routes/notes.routes")(app)

app.listen(port, () => console.log(`Listening on port: ${port}`));
