const express = require("express");
const os = require("os");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/userinfo", (req, res) => {
  res.json({
    cpu: os.arch(),
    freeMemory: (os.freemem() / 1024 / 1024).toFixed(2) + " MB",
    totalMemory: (os.totalmem() / 1024 / 1024).toFixed(2) + " MB",
  });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});  
     
