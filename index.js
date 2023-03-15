const express = require("express");
const app = express();
require("dotenv").config();
require('./src/config/database'); 

  
app.use(express.json()); 

app.use("/api", require("./src/routes/todoRoutes"));


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});