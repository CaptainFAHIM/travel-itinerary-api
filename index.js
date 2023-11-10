const express = require("express");
const cors = require("cors");

// Configuration
require("dotenv").config();
require("./app/utils/config/database")();

// init app
const app = express();
// body-parser middleware
app.use(express.json());
app.use(cors());


// Server connection
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server running at ${PORT}`);
});